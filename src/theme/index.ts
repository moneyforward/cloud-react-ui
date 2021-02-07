import { color } from "./color";
import { values } from "./values";
import { theme } from "./theme";

export { color, values, theme };
export const defaultProps = { theme };

type TTheme = typeof theme;
export type { TTheme };
