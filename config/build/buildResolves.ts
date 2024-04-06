import webpack from "webpack";

export const buildResolves = (): webpack.ResolveOptions => {
    return {
        extensions: [".ts", ".tsx", ".js", ".css", ".scss"],
    }
}
