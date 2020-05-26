module.exports = {
    "env": {
        "commonjs": true,
        "es2020": true,
        "node": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:@typescript-eslint/eslint-recommended",
        "plugin:@typescript-eslint/recommended",
        'plugin:@typescript-eslint/recommended-requiring-type-checking'
    ],
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "tsconfigRootDir": __dirname,
        "project": ['./tsconfig.json'],
    },
    "plugins": [
        "@typescript-eslint"
    ],
    "rules": {
    }
};
