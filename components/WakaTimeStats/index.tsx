import axios from "axios";
import React, { useEffect, useState } from "react";
import type { FC, WakaTimeApiResult } from "../../lib/types";
import ms from "ms";
import { Cell, Pie, PieChart, PieLabel, PieLabelRenderProps } from "recharts";

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#ee453f"];
const RADIAN = Math.PI / 180;

const renderCustomizedLabel: PieLabel<PieLabelRenderProps> = ({ cx: _cx, cy: _cy, midAngle, innerRadius: inner, outerRadius: outer, percent }) => {
	const innerRadius = Number(inner) ?? 0;
	const outerRadius = Number(outer) ?? 0;

	const cx = Number(_cx) ?? 0;
	const cy = Number(_cy) ?? 0;

	const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
	const x = cx + radius * Math.cos(-midAngle * RADIAN);
	const y = cy + radius * Math.sin(-midAngle * RADIAN);

	return (
		<text x={x} y={y} fill="white" textAnchor={x > cx ? "start" : "end"} dominantBaseline="central">
			{`${(percent ?? 1).toFixed(0)}%`}
		</text>
	);
};

const WakaTimeStats: FC = () => {
	const [stats, setStats] = useState<WakaTimeApiResult>();

	useEffect(() => {
		const { cancel, token } = axios.CancelToken.source();
		axios
			.get<WakaTimeApiResult>("/api/wakatime", { cancelToken: token })
			.then((data) => setStats(data.data))
			.catch(() => void 0);

		return () => cancel();
	}, []);

	return (
		<div>
			<h1>WakaTime Stats</h1>
			{stats ? (
				<>
					<p>Total coding time this week: {ms(stats.total_seconds * 1e3, { long: true })}</p>
					<div className="wakatime-stats-container">
						<div>
							{stats.languages
								.filter((lang) => lang.percent > 1)
								.map((lang, i) => (
									<p key={i}>
										<i className="fa-solid fa-square" style={{ color: COLORS[i % COLORS.length] }} /> {lang.name}
									</p>
								))}
						</div>
						<PieChart width={200} height={200}>
							<Pie
								data={stats.languages.filter((lang) => lang.percent > 1)}
								cx="50%"
								cy="50%"
								labelLine={false}
								label={renderCustomizedLabel}
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
			) : null}
		</div>
	);
};

export default WakaTimeStats;
