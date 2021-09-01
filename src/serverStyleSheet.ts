import { ServerStyleSheet as StyledServerStyleSheet } from 'styled-components';
import { ServerStyleSheets as MuiServerStyleSheets } from '@material-ui/core';

export class ServerStyleSheet {
  private styledSss: StyledServerStyleSheet;
  private muiSss: MuiServerStyleSheets;

  constructor() {
    this.styledSss = new StyledServerStyleSheet();
    this.muiSss = new MuiServerStyleSheets();
  }

  collectStyles(children: React.ReactNode): React.ReactElement {
    return this.styledSss.collectStyles(this.muiSss.collect(children));
  }

  getStyleElement(): React.ReactElement[] {
    return [...this.styledSss.getStyleElement(), this.muiSss.getStyleElement()];
  }

  seal(): void {
    this.styledSss.seal();
  }
}
