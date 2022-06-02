import type React from "react";
import type { UseLanyardResults } from "./hooks/Lanyard/types";

/* === Component Types === */
export type FC<Props extends Record<string, any> = Record<string, never>> = React.FC<Props & { children?: React.ReactNode }>;
export type FCWithLanyard<Props extends Record<string, any> = Record<string, never>> = React.FC<
	Props & { children?: React.ReactNode; Lanyard: UseLanyardResults }
>;
