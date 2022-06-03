import type { Data } from "../../lib/hooks/Lanyard/types";
import type { FC, FCWithLanyard } from "../../lib/types";
import { getAvatar, getEmojiString, getStatusColor } from "../../lib/utils";
import { TextLink } from "../TextLink";
import ToolTip from "../Tooltip";

export const Discord: FCWithLanyard = ({ lanyard: { status } }) => {
	return status ? (
		<div className="discord-container">
			<div className="discord-user">
				<div className="discord-user-avatar">
					<img src={getAvatar(status.discord_user.avatar, status.discord_user.id)} alt={status.discord_user.username} />
				</div>
				<div className="discord-user-details">
					<div className="discord-user-info">
						<p className="discord-username">{status.discord_user.username}</p>
						<p className="discord-discrim">#{status.discord_user.discriminator}</p>
						<ToolTip content={status.discord_status}>
							<div className="discord-status" style={{ backgroundColor: getStatusColor(status.discord_status) }} />
						</ToolTip>
					</div>
					<CustomStatus status={status} />
				</div>
			</div>
			<div className="discord-presences">
				<Spotify status={status} />
				<Presence status={status} />
			</div>
		</div>
	) : null;
};

const CustomStatus: FC<{ status: Data }> = ({ status }) => {
	const data = status.activities.find((act) => act.type === 4);

	return data ? (
		<div className="discord-custom-status">
			{data.emoji?.id ? (
				<img className="discord-custom-emoji" src={getEmojiString(data.emoji)} alt="status emoji" />
			) : (
				<p className="discord-custom-emoji-text">{getEmojiString(data.emoji)}</p>
			)}
			<p className="discord-custom-text">{data.state}</p>
		</div>
	) : null;
};

const Presence: FC<{ status: Data }> = ({ status }) => {
	const data = status.activities.find((act) => act.type === 0);

	return data ? (
		<div className="discord-presence-game">
			<p className="discord-presence-title">PLAYING A GAME</p>
			<p className="discord-presence-value">{data.name}</p>
		</div>
	) : null;
};

const Spotify: FC<{ status: Data }> = ({ status }) => {
	const data = status.spotify;

	return data ? (
		<div>
			<p className="discord-presence-title">LISTENING TO</p>
			<TextLink className="discord-presence-value" url={`https://open.spotify.com/track/${data.track_id}`} text={data.song} external />
		</div>
	) : null;
};
