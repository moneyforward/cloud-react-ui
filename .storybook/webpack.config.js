const path = require('path');

module.exports = ({config}) => {
  config.resolve.alias = {
    "@components/*": path.resolve(__dirname, "../src/components/*"),
    "@components": path.resolve(__dirname, "../src/components"),
    "@layouts/*": path.resolve(__dirname, "../src/layouts/*"),
    "@layouts": path.resolve(__dirname, "../src/layouts"),
    "@theme/*": path.resolve(__dirname, "../src/theme/*"),
    "@theme": path.resolve(__dirname, "../src/theme"),
    "@ui/*": path.resolve(__dirname, "../src/ui/*"),
    "@ui": path.resolve(__dirname, "../src/ui"),
  };

  return config;
};
