const path = require('path');

module.exports = ({config}) => {
  config.resolve.alias = {
    "@assets": path.resolve(__dirname, "../src/assets"),
    "@components": path.resolve(__dirname, "../src/components"),
    "@layouts": path.resolve(__dirname, "../src/layouts"),
    "@theme": path.resolve(__dirname, "../src/theme"),
    "@ui": path.resolve(__dirname, "../src/ui"),
  };

  return config;
};
