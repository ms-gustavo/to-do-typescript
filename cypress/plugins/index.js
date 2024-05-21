import webpack from "@cypress/webpack-preprocessor";

export default (on, config) => {
  const options = {
    webpackOptions: {
      resolve: {
        extensions: [".ts", ".js"],
      },
      module: {
        rules: [
          {
            test: /\.ts$/,
            exclude: [/node_modules/],
            use: [
              {
                loader: "ts-loader",
              },
            ],
          },
        ],
      },
    },
  };

  on("file:preprocessor", webpack(options));

  return config;
};
