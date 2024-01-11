module.exports = {
  chainWebpack: (config) =>
    config.plugin("feature-flags").tap((args) => {
      args[0].__VUE_OPTIONS_API__ = JSON.stringify(false);
      return args;
    }),
};
