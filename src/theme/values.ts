import { color } from "./color";

export const values = {
  font: {
    noto: "Noto Sans JP",
  },
  text: {
    size: {
      xSmall: "10px",
      small: "12px",
      middle: "14px",
      large: "16px",
      xLarge: "20px",
    },
    color: {
      // FIXME: titleカラーが本当はdefault
      title: color.nightRider,
      default: color.dimGray,
      notes: color.nobel,
      inherit: "inherit",
    },
  },
  line: {
    weight: {
      thin: "1px",
      bold: "2px",
    },
  },
  border: {
    width: {
      thin: "1px",
    },
  },
};
