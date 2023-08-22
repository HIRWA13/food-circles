// webpac.config.js

const path = require('path');
module.exports = {
    mode: 'development',
    // isnide this object, we can configure how webpack is going to work with our project.
    // we can configure which files we are going to compile and where the output bundle is going to g afterwards.

    entry: './src/index.ts', // the primary ts file
    module: {
        /**
         * All the files that are present in the src folder will be tested and if they end up with ts they will be compiled and then the result js code will be put iin the bundle.js file from the public folder.
         */
        rules:[
            {
                test: /\.ts$/,
                use: 'ts-loader',
                include: [path.resolve(__dirname, 'src')]
            }
        ]
    },
    resolve: {
        extensions: ['.ts', '.js']
    },
    // output, where our compiled files will be located.
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'public')
    }
}