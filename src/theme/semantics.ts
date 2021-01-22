import { values } from "./values";

export const semantics = {
  contents: {
    minWidth: "1200px",
  },
  text: {
    color: {
      // FIXME: titleカラーが本当はdefault
      title: values.color.nightRider,
      default: values.color.dimGray,
      notes: values.color.nobel,
      inherit: "inherit",
    },
    size: {
      small: values.font.size.small,
      default: values.font.size.middle,
      middle: values.font.size.xMiddle,
      large: values.font.size.large,
      xLarge: values.font.size.xLarge,
    },
  },
  heading: {
    size: {
      small: values.font.size.xMiddle,
      middle: values.font.size.large, // 特殊な場合に使用する（背景色のせいで文字が大きく見えすぎてしまう場合など）
      default: values.font.size.xLarge,
    },
    color: {
      default: values.color.dimGray,
    },
    weight: {
      light: "normal",
      default: "bold",
    },
  },
  line: {
    color: {
      default: values.color.linkWater,
    },
    weight: {
      default: values.line.weight.thin,
      bold: values.line.weight.bold,
    },
  },
  link: {
    color: values.color.royalBlue,
  },
  form: {
    item: {
      error: {
        backgroundColor: values.color.redSnow,
        borderColor: values.color.froly,
      },
    },
  },
};
