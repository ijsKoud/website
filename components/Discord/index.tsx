import type { Data } from "../../lib/hooks/Lanyard/types";
import type { FC, FCWithLanyard } from "../../lib/types";
import { getAvatar, getEmojiString, getStatusColor } from "../../lib/utils";
import { TextLink } from "../TextLink";

export const Discord: FCWithLanyard = ({ lanyard: { status } }) => {
	return status ? (
		<div>
			<div>
				<div>
					<img src={getAvatar(status.discord_user.avatar, status.discord_user.id)} alt={status.discord_user.username} />
				</div>
				<div>
					<div>
						<p>{status.discord_user.username}</p>
						<p>#{status.discord_user.discriminator}</p>
						<div style={{ backgroundColor: getStatusColor(status.discord_status) }} />
					</div>
					<CustomStatus status={status} />
				</div>
			</div>
			<Spotify status={status} />
			<Presence status={status} />
		</div>
	) : null;
};

const CustomStatus: FC<{ status: Data }> = ({ status }) => {
	const data = status.activities.find((act) => act.type === 4);

	return data ? (
		<div>
			{data.emoji?.id ? <img src={getEmojiString(data.emoji)} alt="status emoji" /> : <p>{getEmojiString(data.emoji)}</p>}
			<p>{data.state}</p>
		</div>
	) : null;
};

const Presence: FC<{ status: Data }> = ({ status }) => {
	const data = status.activities.find((act) => act.type === 0);

	return data ? (
		<div>
			<p>PLAYING A GAME</p>
			<p>{data.name}</p>
		</div>
	) : null;
};

const Spotify: FC<{ status: Data }> = ({ status }) => {
	const data = status.spotify;

	return data ? (
		<div>
			<p>LISTENING TO</p>
			<TextLink url={`https://open.spotify.com/track/${data.track_id}`} text={data.song} external />
		</div>
	) : null;
};
