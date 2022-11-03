const presets = [
  ['@babel/preset-env', {
    targets: {
      chrome: '100',
    },
    useBuiltIns: 'entry',
    corejs: '3.21'
  }]
];
module.exports = {presets};
