const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
    webpack: {
        configure: (webpackConfig) => {
            const cssRule = webpackConfig.module.rules.find((rule) => rule.test && rule.test.toString().includes(".css"));
            if (cssRule) {
                cssRule.exclude = /\.module\.css$/;
            }

            const cssModuleRule = {
                test: /\.module\.css$/,
                use: [{ loader: "style-loader" }, { loader: "css-loader", options: { modules: true } }],
            };
            webpackConfig.module.rules.push(cssModuleRule);

            return webpackConfig;
        },
    },
    style: {
        postcss: {
            plugins: [
                require("tailwindcss")({
                    theme: {
                        extend: {
                            fontSize: {
                                base: "1rem",
                            },
                            fontFamily: {
                                sans: ["Tahoma", ...defaultTheme.fontFamily.sans],
                            },
                        },
                    },
                }),
            ],
        },
    },
};
