module.exports = {
    webpack: (config, { isServer }) => {
      if (!isServer) {
        config.resolve.fallback = {
          ...config.resolve.fallback,
          'core-js/modules/es.object.assign': require.resolve('core-js/modules/es.object.assign'),
        };
      }
      return config;
    },
  };
  