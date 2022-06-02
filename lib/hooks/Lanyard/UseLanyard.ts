import { useEffect, useState } from "react";
import { WEBSOCKET_URL } from "../../constants";
import type { Data, UseLanyardOptions, UseLanyardResults } from "./types";

function parseSocketMessage(message: string): {
	t: "INIT_STATE" | "PRESENCE_UPDATE";
	d: Data;
} {
	const { t, d } = JSON.parse(message) as {
		t: "INIT_STATE" | "PRESENCE_UPDATE";
		d: Data;
	};

	return { t, d };
}

export const useLanyard = (options: UseLanyardOptions): UseLanyardResults => {
	const [status, setStatus] = useState<Data>();
	const [websocket, setWebsocket] = useState<WebSocket>();
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const supportsWebSocket = "WebSocket" in window || "MozWebSocket" in window;
		if (!supportsWebSocket) throw new Error("Browser doesn't support WebSocket connections.");

		const subscription = Array.isArray(options.userId) ? "subscribe_to_ids" : "subscribe_to_id";

		let heartbeat: NodeJS.Timeout;
		let socket: WebSocket;

		const connectWebsocket = () => {
			if (heartbeat) clearInterval(heartbeat);

			socket = new WebSocket(WEBSOCKET_URL);
			setWebsocket(socket);
			setLoading(true);

			socket.addEventListener("open", () => {
				socket.send(
					JSON.stringify({
						op: 2,
						d: {
							[subscription]: options.userId
						}
					})
				);

				heartbeat = setInterval(
					() =>
						socket.send(
							JSON.stringify({
								op: 3
							})
						),
					3e4
				);
			});

			socket.addEventListener("message", ({ data }) => {
				const { t, d } = parseSocketMessage(data);
				if (t === "INIT_STATE" || t === "PRESENCE_UPDATE") {
					if (loading) setLoading(false);
					setStatus(d);
				}
			});

			socket.addEventListener("close", connectWebsocket);
		};

		connectWebsocket();

		return () => {
			clearInterval(heartbeat);
			socket.removeEventListener("close", connectWebsocket);
			socket.close();
		};
	}, []);

	return { websocket, loading, status };
};
