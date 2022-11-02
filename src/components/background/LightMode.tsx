import React from "react";

const LightMode = ({ children }: React.PropsWithChildren) => {
	return (
		<div className="w-screen h-screen fixed">
			<svg
				className="z-0 fixed right-[10%] top-[10%]"
				width="656"
				height="564"
				viewBox="0 0 656 564"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					d="M613.8 541.056C567.637 576.332 478.795 561.96 412.163 547.589C345.096 532.782 300.24 517.975 234.044 504.474C167.848 490.974 79.4415 478.78 35.456 429.133C-8.09404 379.486 -8.09404 291.95 20.2135 214.867C48.521 137.783 104.7 70.716 175.251 34.134C245.802 -2.88347 330.289 -10.287 393.872 18.456C457.02 47.199 499.699 111.653 541.507 170.446C583.75 229.238 625.123 282.369 644.285 351.614C663.447 420.423 659.963 505.781 613.8 541.056Z"
					fill="#4E9ED790"
				/>
			</svg>

			<svg
				className="z-0 fixed left-[10%] bottom-[10%]"
				width="421"
				height="433"
				viewBox="0 0 421 433"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					d="M414.013 129.388C441.411 212.303 383.01 325.139 296.85 383.901C210.691 442.662 97.1335 447.709 42.698 400.844C-11.7375 354.34 -7.051 255.923 22.1495 170.484C51.35 84.6855 105.425 11.504 189.061 1.77048C273.057 -7.96302 386.615 46.112 414.013 129.388Z"
					fill="#4E9ED7"
				/>
			</svg>
			<div className="w-screen h-screen bg-[var(--background-filter-white)] backdrop-blur-[175px] fixed z-10">{children}</div>
		</div>
	);
};

export default LightMode;
