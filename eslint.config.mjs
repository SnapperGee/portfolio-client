export default [
{
    name: "DefaultPortfolioLinter",
    files: ["./src/**/*.ts", "./src/**/*.tsx"],
    ignores: ["dist/", "build/"],
    settings: {
        react: {
        version: "detect"
        }
    },
    root: true,
    env: { browser: true, es2020: true },
    extends: [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:react-hooks/recommended",
        "plugin:react/recommended",
        "plugin:react/jsx-runtime",
        "prettier"
    ],
    parser: "@typescript-eslint/parser",
    plugins: ["react-refresh"],
    rules: {
        "react/prop-types": "off",
        "react-refresh/only-export-components": [
        "warn",
        { allowConstantExport: true },
        ],
    },
    }
];
