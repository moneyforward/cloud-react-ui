import merge from 'deepmerge';

export { color } from './color';
export { zIndex } from './zIndex';
export { values } from './values';

import { componentsTheme, uiTheme, layoutTheme } from './theme';

export { ThemeProvider } from 'styled-components';

const theme = { ...componentsTheme, ...uiTheme, ...layoutTheme };
export { theme };
export const defaultProps = { theme };

type TTheme = typeof theme;
export type { TTheme };

export const createTheme = (customTheme: RecursivePartial<TTheme>): TTheme => {
  return merge(theme, customTheme as TTheme);
};
