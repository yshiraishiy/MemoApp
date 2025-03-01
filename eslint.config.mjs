import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "@typescript-eslint/eslint-plugin";
import pluginReact from "eslint-plugin-react";
import pluginPrettier from "eslint-plugin-prettier";
import configPrettier from "eslint-config-prettier";

/** @type {import('eslint').Linter.FlatConfig[]} */
export default [
  // 対象ファイルの指定
  { files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"] },
  // グローバル変数の設定（Node 用）
  { languageOptions: { globals: globals.node } },
  // @eslint/js の推奨設定（オブジェクトの場合はそのまま）
  pluginJs.configs.recommended,
  // TypeScript 用の推奨設定は配列なので展開
  ...tseslint.configs.recommended,
  // React 用の Flat Config 推奨設定（配列の場合は展開）
  ...pluginReact.configs.flat.recommended,
  // eslint-config-prettier の設定（配列の場合は展開）
  ...configPrettier,
  // Prettier を ESLint 経由でチェックするための追加設定
  {
    plugins: { prettier: pluginPrettier },
    rules: {
      "prettier/prettier": "error",
      // React 17 以降は JSX 内で React を明示的に import する必要がないため
      "react/react-in-jsx-scope": "off",
    },
  },
];
