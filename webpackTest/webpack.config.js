const path = require('path');

const frontendConfig = {
    mode: 'development',
    target: 'web',
    entry: './src/app.ts',
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: 'ts-loader',
                include: [path.resolve(__dirname, 'src')]
            }
        ]
    },
    output: {
        filename: 'bundle-app.js',
        path: path.resolve(__dirname, 'dist'),
    },
}

const backendConfig = {
    mode: 'development',
    target: 'node',
    entry: './src/server.ts',
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: 'ts-loader',
                include: [path.resolve(__dirname, 'src')]
            }
        ]
    },
    output: {
        filename: 'bundle-server.js',
        path: path.resolve(__dirname, 'dist'),
    },

}

module.exports = [ frontendConfig, backendConfig ]