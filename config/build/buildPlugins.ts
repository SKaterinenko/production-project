import HtmlWebpackPlugin from "html-webpack-plugin";
import webpack from "webpack";
import {BuildOptions, BuildPaths} from "config/build/types/config";

export const buildPlugins = ({html}: BuildPaths): webpack.WebpackPluginInstance[] => {
    return [
        new HtmlWebpackPlugin({
            template: html
        }),
        new webpack.ProgressPlugin(),
    ]
}
