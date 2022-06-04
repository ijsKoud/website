/* eslint-disable @typescript-eslint/ban-types */
import type { NextPage } from "next";
import type React from "react";
import type { UseLanyardResults } from "./hooks/Lanyard/types";

/* === Component Types === */
export type FC<Props extends Record<string, any> = {}> = React.FC<Props & { children?: React.ReactNode }>;
export type FCWithLanyard<Props extends Record<string, any> = {}> = React.FC<Props & { children?: React.ReactNode; lanyard: UseLanyardResults }>;

export type NextPageWithLanyard<Props extends Record<string, any> = {}> = NextPage<Props & { lanyard: UseLanyardResults }>;
