/* eslint-disable @typescript-eslint/no-var-requires */
import "webpack-dev-server";
import * as webpack from "webpack";
import HtmlWebpackPlugin from "html-webpack-plugin";
import { CleanWebpackPlugin } from "clean-webpack-plugin";
import { resolve as _resolve, join } from "path";

type Mode = "none" | "development" | "production" | undefined;

const NODE_ENV: Mode = process.env.NODE_ENV as Mode;
const PREFIX = "/otus-SPA-turarov-2023";

export const entry = {
  main: _resolve(__dirname, "./src/index.ts"),
};
export const output = {
  path: _resolve(__dirname, "./dist"),
  filename: "[name].bundle.js",
};
export const resolve = {
  extensions: [".js", ".ts"],
};
export const devtool = "inline-source-map";
export const module = {
  rules: [
    {
      test: /\.(?:js|mjs|cjs|ts)$/,
      exclude: /node_modules/,
      use: {
        loader: "babel-loader",
      },
    },
    {
      test: /\.css$/,
      use: ["style-loader", "css-loader"],
    },
    {
      test: /\.html$/,
      use: "html-loader",
    },
  ],
};
export const devServer = {
  static: {
    directory: join(__dirname, "dist"),
  },
  compress: true,
  hot: true,
  port: 9000,
  allowedHosts: "all",
  historyApiFallback: true,
};
export const plugins = [
  new HtmlWebpackPlugin({
    template: _resolve(__dirname, "./src/index.html"),
    filename: "index.html",
  }),
  new HtmlWebpackPlugin({
    template: _resolve(__dirname, "./src/index.html"),
    filename: "404.html",
  }),
  new webpack.DefinePlugin({
    PRODUCTION: NODE_ENV === "production",
    PREFIX: JSON.stringify(PREFIX),
  }),
  new CleanWebpackPlugin(),
];
