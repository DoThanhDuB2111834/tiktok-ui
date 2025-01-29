const NodePolyfillPlugin = require('node-polyfill-webpack-plugin');
const {
    override,
    useBabelRc,
    addWebpackPlugin,
    addWebpackResolve,
} = require('customize-cra');
// const path = require('path');
module.exports = override(
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useBabelRc(),
    // addWebpackAlias({
    //     ['@']: path.resolve(__dirname, 'src'),
    // }),
    // addWebpackResolve({
    //     fallback: {
    //         path: require.resolve('path-browserify'),
    //         util: require.resolve('util/'),
    //         stream: require.resolve('stream-browserify'),
    //     },
    // })
    addWebpackResolve({
        fallback: {
            net: require.resolve('net-browserify'),
        },
    }),
    addWebpackPlugin(new NodePolyfillPlugin())
);
