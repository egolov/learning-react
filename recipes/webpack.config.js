module.exports = {
    entry: "./src/index.js",
    output: {
        path: __dirname + "/dist/assets",
        filename: "bundle.js"
    },
    devtool: '#source-map',
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                    options: { presets: ['env', 'stage-0', 'react'] }
                }
            }
        ]
    }
}
