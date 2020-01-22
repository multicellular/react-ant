const { override, fixBabelImports, addLessLoader, addWebpackAlias } = require('customize-cra');
const path = require("path");

module.exports = override(
    fixBabelImports('import', {
        libraryName: 'antd',
        libraryDirectory: 'es',
        style: true
    }),
    addLessLoader({
        javascriptEnabled: true,
        modifyVars: { '@primary-color': '#1DA57A' },
    }),
    addWebpackAlias({
        '@configs': path.resolve(__dirname, "src/configs"),
        '@assets': path.resolve(__dirname, "src/assets"),
        '@components': path.resolve(__dirname, "src/components"),
        '@apis': path.resolve(__dirname, "src/apis"),
        '@utils': path.resolve(__dirname, "src/utils"),
        '@pages': path.resolve(__dirname, "src/pages"),
    })
);