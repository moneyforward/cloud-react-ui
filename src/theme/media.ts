import { values } from "./values";
import { semantics } from "./semantics";

export const media = {
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
      textColor: semantics.text.color.title,
      border: `1px solid ${values.color.linkWater}`,
      background: `linear-gradient(to bottom, ${values.color.white}, ${values.color.solitude})`,
      iconColor: values.color.silver,
      hover: {
        background: `linear-gradient(to bottom, ${values.color.solitude}, ${values.color.white})`,
      },
      active: {
        boxShadow: "0 0 0 2px rgba(212, 216, 221, 0.3)",
      },
    },
    danger: {
      textColor: values.color.venetianRed,
      border: `1px solid ${values.color.linkWater}`,
      background: `linear-gradient(to bottom, ${values.color.white}, ${values.color.solitude})`,
      iconColor: values.color.venetianRed,
      hover: {
        background: `linear-gradient(to bottom, ${values.color.solitude}, ${values.color.white})`,
      },
      active: {
        boxShadow: "0 0 2px rgba(212, 216, 221, 0.3)",
      },
    },
    primary: {
      textColor: values.color.white,
      border: "1px solid rgba(0, 0, 0, 0.15)",
      background: `linear-gradient(to bottom, ${values.color.royalBlue}, ${values.color.cobalt} 100%)`,
      iconColor: values.color.white,
      hover: {
        background: `linear-gradient(to bottom, ${values.color.cobalt}, ${values.color.royalBlue})`,
      },
      active: {
        boxShadow: "0 0 2px rgba(212, 216, 221, 0.3)",
      },
    },
    settings: {
      textColor: values.color.royalBlue,
      border: `1px solid ${values.color.linkWater}`,
      background: `linear-gradient(to bottom, ${values.color.white}, ${values.color.solitude})`,
      iconColor: values.color.royalBlue,
      hover: {
        background: `linear-gradient(to bottom, ${values.color.solitude}, ${values.color.white})`,
      },
      active: {
        boxShadow: "0 0 2px rgba(212, 216, 221, 0.3)",
      },
    },
    disabled: {
      textColor: semantics.text.color.notes,
      border: "1px solid rgba(0, 0, 0, 0.1)",
      background: values.color.linkWater,
      iconColor: semantics.text.color.notes,
      hover: {
        background: values.color.linkWater,
      },
      active: {
        boxShadow: "0 0 2px rgba(212, 216, 221, 0.3)",
      },
    },
  },
  // Icon
  icon: {
    fontSize: "14px",
    color: "inherit",
    hover: {
      color: "inherit",
    },
  },
  // Text
  text: semantics.text,
};
