import { values } from "./values";
import { theme } from "./theme";

export { values, theme };
export const defaultProps = { theme };

type TTheme = typeof theme;
export type { TTheme };
