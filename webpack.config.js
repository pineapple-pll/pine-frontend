module.exports = {
    entry: "./src/index.tsx",
    module: {
        rules: [
            {
                test: /\.(ts|tsx)?$/,
                use: ["ts-loader"],
            },
            {
                test: /\.(css)?$/,
                use: ["style-loader", "css-loader"]
            },
            {
                test: /\.(jpg|png|svg)?$/,
                use: ["file-loader"]
            }
        ]
    },
    output: {
        filename: "main.js",
        path: __dirname + "/dist",
    },
    resolve: {
        extensions: [".ts", ".tsx", ".js"]
    },
    devServer: {
        historyApiFallback: true,
        contentBase: "./dist",
    }
}