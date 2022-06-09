import axios from "axios";
import { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";
import type { AnimeList, FC } from "../../../lib/types";
import AnimeListItem from "./AnimeListItem";

const AnimeListComp: FC = () => {
	const [anime, setAnime] = useState<AnimeList[]>([]);

	useEffect(() => {
		const { cancel, token } = axios.CancelToken.source();
		axios
			.get<{ list: AnimeList[] }>("/api/anime", { cancelToken: token })
			.then((data) => setAnime(data.data.list))
			.catch(() => void 0);

		return () => cancel();
	}, []);

	return (
		<div className="anime-list">
			{anime.length ? (
				anime.map((item) => <AnimeListItem key={item.title} anime={item} />)
			) : (
				<>
					{Array(7)
						.fill(null)
						.map((_, key) => (
							<Skeleton key={key} height={300} width={200} baseColor="#1e1f21" highlightColor="#101111" borderRadius={10} />
						))}
				</>
			)}
		</div>
	);
};

export default AnimeListComp;
