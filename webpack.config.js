/**
 * Created by asheshvidyut on 16/07/17.
 */
module.exports = {
    entry: ["./src/app.js"],
    output: {
        path: __dirname,
        publicPath: "/",
        filename: "./dist/bundle.js"
    },
    module: {
        loaders: [
            {
                exclude: /node_modules/,
                loader: "babel-loader",
                query: {
                    presets: ['latest', 'react', 'stage-0']
                }
            }
        ]
    },
    devServer: {
        contentBase: "./dist/"
    }
};
