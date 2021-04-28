module.exports = {
    entry: "./src/index.tsx",
    module: {
        rules: [
            {
                test: /\.(ts|tsx)?$/,
                use: ["ts-loader"],
            },
            {
                test: /\.(css|scss)?$/,
                use: ["style-loader", "css-loader", "sass-loader"]
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
        contentBase: "./dist"
    }
}