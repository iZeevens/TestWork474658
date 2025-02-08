/** @type {import('stylelint').Config} */
export default {
  extends: ["stylelint-config-standard-scss"],
  plugins: ["stylelint-selector-bem-pattern"],
  rules: {
    "plugin/selector-bem-pattern": {
      componentSelectors: {
        initial: "^\\.([a-z][a-zA-Z0-9]+)$",
      },
    },
    "selector-class-pattern": "^[a-z][a-zA-Z0-9]+$",
  },
};
