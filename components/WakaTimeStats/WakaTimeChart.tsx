import type { FC, WakaTimeApiResult } from "../../lib/types";
import ms from "ms";
import { Cell, Pie, PieChart } from "recharts";

const COLORS = ["#277da1", "#577590", "#4d908e", "#43aa8b", "#90be6d", "#f9c74f", "#f8961e", "#f3722c", "#f94144"];
const WakaTimeChart: FC<{ stats: WakaTimeApiResult }> = ({ stats }) => {
	return (
		<>
			<p>
				My total coding time of the last 7 days is <strong>{ms(stats.total_seconds * 1e3, { long: true })}</strong>
			</p>
			<div className="wakatime-stats-container">
				<div>
					{stats.languages.map((lang, i) => (
						<p key={i}>
							<i className="fa-solid fa-square" style={{ color: COLORS[i % COLORS.length] }} /> {lang.name} ({lang.percent}%)
						</p>
					))}
				</div>
				<PieChart width={200} height={200}>
					<Pie
						data={stats.languages}
						cx="50%"
						cy="50%"
						labelLine={false}
						strokeOpacity={0}
						outerRadius={80}
						fill="#8884d8"
						dataKey="percent"
					>
						{stats.languages.map((_, i) => (
							<Cell key={`cell-${i}`} fill={COLORS[i % COLORS.length]} />
						))}
					</Pie>
				</PieChart>
			</div>
		</>
	);
};

export default WakaTimeChart;
