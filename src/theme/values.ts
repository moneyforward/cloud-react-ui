import { color } from './color';

export const values = {
  font: {
    family:
      '"Noto Sans JP", -apple-system, BlinkMacSystemFont, Helvetica, "Hiragino Sans", "ヒラギノ角ゴ ProN W3", "Hiragino Kaku Gothic ProN", Arial, Meiryo, sans-serif',
    weight: {
      normal: 'normal',
      bold: 'bold',
    },
  },
  text: {
    size: {
      xSmall: '10px',
      small: '12px',
      middle: '13px',
      large: '14px',
      xlarge: '16px',
      xxlarge: '18px',
      xxxLarge: '20px',
      xxxxLarge: '24px',
    },
    color: {
      default: color.nightRider,
      notes: color.nobel,
      inherit: 'inherit',
    },
  },
  line: {
    weight: {
      thin: '1px',
      bold: '2px',
    },
  },
  border: {
    width: {
      thin: '1px',
      bold: '2px',
    },
    style: {
      solid: 'solid',
    },
  },
} as const;
