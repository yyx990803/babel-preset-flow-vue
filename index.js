module.exports = function(api, options){
  return {
    plugins: [
      [require('@babel/plugin-proposal-class-properties'), {loose: options.loose}],
      require('@babel/plugin-transform-flow-strip-types')
    ]
  };
};
