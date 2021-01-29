import { color } from "./color";
import { values } from "./values";

export const theme = {
  // Button
  button: {
    borderRadius: "4px",
    size: {
      small: {
        height: "28px",
        padding: "0 16px",
        fontSize: "14px",
      },
      medium: {
        height: "32px",
        padding: "0 12px",
        fontSize: "14px",
      },
      large: {
        height: "42px",
        padding: "0 52px",
        fontSize: "14px",
      },
    },
    default: {
      textColor: values.text.color.default,
      border: `${values.border.width.thin} solid ${color.linkWater}`,
      background: `linear-gradient(to bottom, ${color.white}, ${color.solitude})`,
      iconColor: color.silver,
      hover: {
        background: `linear-gradient(to bottom, ${color.solitude}, ${color.white})`,
      },
      active: {
        boxShadow: "0 0 0 2px rgba(212, 216, 221, 0.3)",
      },
    },
    danger: {
      textColor: color.venetianRed,
      border: `${values.border.width.thin} solid ${color.linkWater}`,
      background: `linear-gradient(to bottom, ${color.white}, ${color.solitude})`,
      iconColor: color.venetianRed,
      hover: {
        background: `linear-gradient(to bottom, ${color.solitude}, ${color.white})`,
      },
      active: {
        boxShadow: "0 0 2px rgba(212, 216, 221, 0.3)",
      },
    },
    primary: {
      textColor: color.white,
      border: `${values.border.width.thin} solid rgba(0, 0, 0, 0.15)`,
      background: `linear-gradient(to bottom, ${color.royalBlue}, ${color.cobalt} 100%)`,
      iconColor: color.white,
      hover: {
        background: `linear-gradient(to bottom, ${color.cobalt}, ${color.royalBlue})`,
      },
      active: {
        boxShadow: "0 0 2px rgba(212, 216, 221, 0.3)",
      },
    },
    settings: {
      textColor: color.royalBlue,
      border: `${values.border.width.thin} solid ${color.linkWater}`,
      background: `linear-gradient(to bottom, ${color.white}, ${color.solitude})`,
      iconColor: color.royalBlue,
      hover: {
        background: `linear-gradient(to bottom, ${color.solitude}, ${color.white})`,
      },
      active: {
        boxShadow: "0 0 2px rgba(212, 216, 221, 0.3)",
      },
    },
    disabled: {
      textColor: values.text.color.notes,
      border: `${values.border.width.thin} solid rgba(0, 0, 0, 0.1)`,
      background: color.linkWater,
      iconColor: values.text.color.notes,
      hover: {
        background: color.linkWater,
      },
      active: {
        boxShadow: "0 0 2px rgba(212, 216, 221, 0.3)",
      },
    },
  },
  // Icon
  icon: {
    fontSize: values.text.size.middle,
    color: values.text.color.default,
    hover: {
      color: values.text.color.default,
    },
  },
  // Text
  text: values.text,
};
