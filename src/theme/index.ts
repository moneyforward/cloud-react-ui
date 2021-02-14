import merge from "deepmerge";

import { color } from "./color";
import { values } from "./values";
import { componentsTheme, uiTheme, layoutTheme } from "./theme";

const theme = { ...componentsTheme, ...uiTheme, ...layoutTheme };
export { color, values, theme };
export const defaultProps = { theme };

type TTheme = typeof theme;
export type { TTheme };

export const createTheme = (customTheme: RecursivePartial<TTheme>): TTheme => {
  return merge(theme, customTheme as TTheme);
};
