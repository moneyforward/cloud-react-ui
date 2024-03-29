import { color } from './color';
import { values } from './values';

export const componentsTheme = {
  // Backdrop
  backdrop: {
    zIndex: 200,
  },
  // Block
  block: {
    width: '',
    margin: '',
    padding: '',
    background: color.white,
    borderRadius: '4px',
    border: `solid 1px ${color.linkWater}`,
    textAlign: '',
  },
  // Button
  button: {
    borderRadius: '4px',
    size: {
      small: {
        height: '28px',
        padding: '0 16px',
        fontSize: '14px',
      },
      medium: {
        height: '32px',
        padding: '0 12px',
        fontSize: '14px',
      },
      large: {
        height: '42px',
        padding: '0 52px',
        fontSize: '14px',
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
        boxShadow: '0 0 0 2px rgba(212, 216, 221, 0.3)',
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
        boxShadow: '0 0 2px rgba(212, 216, 221, 0.3)',
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
        boxShadow: '0 0 2px rgba(212, 216, 221, 0.3)',
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
        boxShadow: '0 0 2px rgba(212, 216, 221, 0.3)',
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
        boxShadow: '0 0 2px rgba(212, 216, 221, 0.3)',
      },
    },
  },
  // Checkbox
  checkbox: {
    width: '16px',
    height: '16px',
    backgroundColor: {
      unchecked: color.white,
      checked: color.royalBlue,
      disabled: color.linkWater,
    },
    borderRadius: '4px',
    borderWidth: {
      unchecked: values.border.width.thin,
      checked: values.border.width.thin,
      disabled: values.border.width.thin,
    },
    borderStyle: {
      unchecked: values.border.style.solid,
      checked: values.border.style.solid,
      disabled: values.border.style.solid,
    },
    borderColor: {
      unchecked: color.linkWater,
      checked: 'rgba(0, 0, 0, 0.15)',
      disabled: color.linkWater,
    },
    icon: {
      width: '10px',
      height: '8px',
      color: color.white,
    },
  },
  // CircularProgress
  circularProgress: {
    color: color.royalBlue,
  },
  // FlashMessage
  flashMessage: {
    width: '100%',
    padding: '12px',
    backgroundColor: {
      success: color.solitude,
      warning: color.cornSilk,
      error: color.mistyRose,
    },
    borderWidth: '1px',
    borderStyle: 'solid',
    borderRadius: '4px',
    borderColor: {
      success: color.royalBlue,
      warning: color.ecru,
      error: color.salmon,
    },
    color: {
      success: color.royalBlue,
      warning: color.mcKenzie,
      error: color.sunsetOrange,
    },
    fontSize: values.text.size.small,
  },
  // Icon
  icon: {
    fontSize: values.text.size.middle,
    color: values.text.color.default,
    hover: {
      color: values.text.color.default,
    },
  },
  // Heading
  heading: {
    color: {
      black: color.black,
      title: color.nightRider,
      blockTitle: color.dimGray,
    },
    fontSize: values.text.size,
    fontWeight: {
      light: 'normal',
      default: 'bold',
    },
  },
  // Link
  link: {
    display: '',
    alignItems: '',
    width: '',
    minHeight: '',
    padding: '',
    backgroundColor: '',
    color: color.royalBlue,
    fontSize: values.text.size.middle,
    textDecoration: 'none',
    hover: {
      color: color.royalBlue,
      textDecoration: 'underline',
    },
    active: {
      color: color.royalBlue,
      textDecoration: 'none',
    },
    focus: {
      color: color.royalBlue,
      textDecoration: 'none',
    },
    visited: {
      color: color.royalBlue,
      textDecoration: 'none',
    },
    disabled: {
      color: color.nobel,
    },
  },
  // Steps
  steps: {
    display: 'flex',
    alignItems: 'flex-end',
    step: {
      position: 'relative',
      circle: {
        marginTop: '26px',
        width: '34px',
        height: '34px',
        borderRadius: '50%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: {
          waiting: color.linkWater,
          inProgress: color.white,
          completed: color.royalBlue,
        },
        borderWidth: values.border.width.thin,
        borderStyle: values.border.style.solid,
        borderColor: {
          waiting: color.linkWater,
          inProgress: color.royalBlue,
          completed: color.royalBlue,
        },
        color: {
          waiting: color.white,
          inProgress: color.royalBlue,
          completed: color.white,
        },
        count: {
          position: 'relative',
          top: '-1px',
          fontSize: values.text.size.xxlarge,
          letterSpacing: '-0.5px',
        },
      },
      title: {
        color: {
          waiting: color.dimGray,
          inProgress: color.royalBlue,
          completed: color.royalBlue,
        },
        position: 'absolute',
        top: '0%',
        left: '50%',
        transform: 'translateX(-50%)',
        minWidth: '110px',
        textAlign: 'center',
        fontSize: values.text.size.middle,
        fontWeight: values.font.weight.bold,
      },
      check: {
        width: '18px',
        height: '14px',
        color: color.white,
      },
    },
    stepTie: {
      width: '110px',
      height: '36px',
      margin: '0 6px',
      display: 'flex',
      alignItems: 'center',
      tie: {
        width: '100%',
        height: '2px',
        background: {
          waiting: color.linkWater,
          completed: color.royalBlue,
        },
      },
    },
  },
  //Modal
  modal: {
    color: color.black,
    header: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      background: color.whiteSmoke,
      padding: '8px 16px',
      minHeight: '48px',
      fontSize: '16px',
      fontWeight: 'bold',
      wordBreak: 'break-all',
      button: {
        flex: '0 0 auto',
        icon: {
          width: '24px',
          height: '24px',
          color: color.lightSlateGrey,
        },
      },
    },
    content: {
      flex: '1 1 auto',
      padding: '16px',
      overflowY: 'auto',
    },
    actions: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '16px',
      flex: '0 0 auto',
      borderTopStyle: values.border.style.solid,
      borderTopWidth: values.border.width.thin,
      borderTopColor: color.linkWater,
      children: {
        margin: '0 8px',
      },
    },
  },
  // ProgressLabel
  progressLabel: {
    display: 'inline-block',
    width: '80px',
    padding: '5px 9px 6px',
    backgroundColor: {
      waiting: color.white,
      inProgress: color.royalBlue,
      completed: color.lightSlateGrey,
    },
    borderWidth: values.border.width.bold,
    borderStyle: values.border.style.solid,
    borderColor: {
      waiting: color.lightSlateGrey,
      inProgress: color.royalBlue,
      completed: color.lightSlateGrey,
    },
    borderRadius: '20px',
    fontSize: values.text.size.small,
    color: {
      waiting: color.lightSlateGrey,
      inProgress: color.white,
      completed: color.white,
    },
    letterSpacing: '0.18px',
  },
  // Radio
  radio: {
    width: '16px',
    height: '16px',
    backgroundColor: {
      unchecked: color.white,
      checked: color.royalBlue,
      disabled: color.linkWater,
    },
    borderRadius: '8px',
    borderWidth: {
      unchecked: values.border.width.thin,
      checked: values.border.width.thin,
      disabled: values.border.width.thin,
    },
    borderStyle: {
      unchecked: values.border.style.solid,
      checked: values.border.style.solid,
      disabled: values.border.style.solid,
    },
    borderColor: {
      unchecked: color.linkWater,
      checked: 'rgba(0, 0, 0, 0.15)',
      disabled: color.linkWater,
    },
    icon: {
      width: '6px',
      height: '6px',
      color: color.white,
    },
  },
  // Select
  select: {
    display: 'inline-block',
    width: '100%',
    height: '34px',
    backgroundColor: {
      default: color.white,
      error: color.redSnow,
      disabled: color.whisper,
    },
    borderWidth: values.border.width.thin,
    borderStyle: values.border.style.solid,
    borderColor: {
      default: color.veryRightGray,
      error: color.froly,
    },
    placeholderColor: color.nobel,
    textColor: values.text.color.default,
    fontSize: values.text.size.middle,
    option: {
      backgroundColor: {
        selected: color.aliceBlue,
        focused: color.darkenAliceBlue,
      },
      textColor: {
        selected: values.text.color.default,
        focused: values.text.color.default,
        disabled: color.veryRightGray,
      },
      focused: {},
    },
    indicator: {
      clear: {
        hover: {
          color: color.venetianRed,
        },
      },
    },
  },
  // StatusLabel
  statusLabel: {
    display: 'inline-block',
    height: {
      default: '18px',
      outline: '20px',
    },
    padding: {
      default: '2px 3px',
      outline: '3px 6px',
    },
    backgroundColor: {
      gray: color.nobel,
      red: color.sunsetOrange,
      green: color.apple,
      orange: color.burningSand,
      blue: color.royalBlue,
      outline: color.white,
    },
    borderWidth: '1px',
    borderStyle: 'solid',
    borderRadius: '4px',
    borderColor: {
      gray: color.nobel,
      red: color.sunsetOrange,
      green: color.apple,
      orange: color.burningSand,
      blue: color.royalBlue,
    },
    color: {
      gray: color.white,
      red: color.white,
      green: color.white,
      orange: color.white,
      blue: color.white,
    },
    fontSize: values.text.size.small,
    fontWeight: {
      normal: 'normal',
      bold: 'bold',
    },
    lineHeight: values.text.size.small,
  },
  searchPanel: {
    borderColor: color.linkWater,
    backgroundColor: color.white,
  },
  // Table
  table: {
    width: '100%',
    borderCollapse: 'separate',
    borderSpacing: 0,
    borderRadius: '4px',
    borderWidth: values.border.width.thin,
    borderStyle: values.border.style.solid,
    borderColor: color.linkWater,
    nonBorder: '0',
    th: {
      padding: '10px 15px',
      backgroundColor: color.solitude,
      textAlign: 'left',
      fontSize: values.text.size.middle,
      fontWeight: values.font.weight.bold,
    },
    td: {
      padding: '10px 17px',
      backgroundColor: color.white,
      textAlign: 'left',
      fontSize: values.text.size.middle,
      fontWeight: {
        normal: values.font.weight.normal,
        bold: values.font.weight.bold,
      },
    },
  },
  // Text
  text: values.text,
  // TextField
  textField: {
    width: '100%',
    height: '34px',
    padding: '10px 5px',
    backgroundColor: {
      default: color.white,
      error: color.mistyRose,
    },
    borderRadius: '4px',
    borderWidth: values.border.width.thin,
    borderStyle: values.border.style.solid,
    borderColor: {
      default: color.linkWater,
      error: color.salmon,
    },
    color: values.text.color.default,
    fontSize: values.text.size.middle,
    placeholderColor: values.text.color.notes,
  },
  // Tooltip
  tooltip: {
    margin: '8px 0',
    padding: '6px 10px',
    backgroundColor: 'rgba(51, 51, 51, 0.9)',
    borderRadius: '4px',
    fontSize: values.text.size.small,
    color: color.white,
  },
  notification: {
    backgroundColor: {
      success: color.royalBlue,
      warning: color.ecru,
      error: color.sunsetOrange,
    },
  },
};

export const uiTheme = {
  // Footer
  footer: {
    height: '35px',
    padding: '9px 20px 10px',
    backgroundColor: color.cloudGrey,
    borderTop: `1px solid ${color.linkWater}`,
    zIndex: 100,
  },
  // Header
  header: {
    height: '40px',
    padding: '10px 20px 10px 10px',
    backgroundColor: color.white,
    borderBottom: `1px solid ${color.linkWater}`,
    zIndex: 100,
  },
};

export const layoutTheme = {
  // Center
  centerLayout: {
    width: '600px',
  },
  // Left
  leftLayout: {
    width: '600px',
    margin: '20px',
  },
};
