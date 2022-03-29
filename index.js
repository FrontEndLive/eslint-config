const typescriptDelimiter = {
  delimiter: "comma",
  requireLast: false,
};

module.exports = {
  parser: "@typescript-eslint/parser",

  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:compat/recommended",
    "plugin:jest/recommended",
    "plugin:jsx-a11y/recommended",
    "plugin:promise/recommended",
    "plugin:react/recommended",
    "plugin:tailwindcss/recommended",
    "plugin:unicorn/recommended",
  ],

  plugins: [
    "@typescript-eslint",
    "babel",
    "compat",
    "import",
    "jest",
    "json-format",
    "jsx-a11y",
    "promise",
    "simple-import-sort",
    "unicorn",
    "tailwindcss",
  ],

  rules: {
    "@typescript-eslint/indent": "off",
    "@typescript-eslint/member-delimiter-style": [
      "error",
      {
        multiline: typescriptDelimiter,
        singleline: typescriptDelimiter,
      },
    ],
    "arrow-body-style": ["error", "as-needed"],
    "comma-dangle": ["error", "only-multiline"],
    "object-curly-newline": ["error", { consistent: true }],
    "unicorn/filename-case": ["off"],
    "unicorn/prevent-abbreviations": ["off"],
    "react/prop-types": "off",
    "react/require-default-props": "off",
    "react/jsx-props-no-spreading": [1, { custom: "ignore" }],
    "react/function-component-definition": [
      "error",
      {
        "namedComponents": "arrow-function",
        "unnamedComponents": "arrow-function"
      }
    ],
    "jest/no-mocks-import": "off",
    "padded-blocks": "off",
    "import/order": [
      "warn",
      {
        "newlines-between": "always",
        groups: [
          "builtin",
          "external",
          "internal",
          "parent",
          "sibling",
          "index",
        ],
        pathGroups: [
          { pattern: "react", group: "builtin" },
          { pattern: "@/**", group: "internal" },
        ],
        pathGroupsExcludedImportTypes: [],
        alphabetize: {
          order: "asc",
          caseInsensitive: true,
        },
      },
    ],
  },
};
