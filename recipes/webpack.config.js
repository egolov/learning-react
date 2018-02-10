const DIRNAME_PARENT = getDirnameParent();
function getDirnameParent() {
    const split = __dirname.split('/');
    split.pop();
    return split.join('/');
}

module.exports = {
    entry: "./src/index.js",
    output: {
        path: DIRNAME_PARENT + "/dist/assets",
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
