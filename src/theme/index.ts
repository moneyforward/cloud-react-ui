import { values } from "./values";
import { semantics } from "./semantics";
import { media } from "./media";

export const theme = { values, semantics, media };
export const defaultProps = { theme: media };

type TTheme = typeof media;
export type { TTheme };
