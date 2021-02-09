import { color } from "./color";
import { values } from "./values";
import { componentsTheme, uiTheme } from "./theme";

const theme = { ...componentsTheme, ...uiTheme };
export { color, values, theme };
export const defaultProps = { theme };

type TTheme = typeof theme;
export type { TTheme };
