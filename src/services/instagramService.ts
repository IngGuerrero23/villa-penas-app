import { get } from "./http";
import type { PublicacionInstagram } from "../types/instagram";

export const getInstagram = (signal?: AbortSignal) =>
	get<PublicacionInstagram[]>("/public/instagram", signal);