import globals from "globals";
import pluginJs from "@eslint/js";
import pluginReact from "eslint-plugin-react";

export default [
  {
    files: ["**/*.{js,mjs,cjs,jsx}"],
    languageOptions: {
      globals: globals.browser,
    },
    rules: {
      semi: ["error", "never"], // Configura para não usar ';'
    },
  },
  pluginJs.configs.recommended,
  pluginReact.configs.flat.recommended,
];
