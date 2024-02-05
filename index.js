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
    "plugin:sonarjs/recommended",
    "plugin:tailwindcss/recommended",
    "plugin:unicorn/recommended",
  ],

  plugins: [
    "@typescript-eslint",
    "compat",
    "import",
    "jest",
    "json-format",
    "jsx-a11y",
    "promise",
    "sonarjs",
    "unicorn",
    "tailwindcss",
  ],

  rules: {
    "@typescript-eslint/indent": "off",
    "arrow-body-style": ["error", "as-needed"],
    "comma-dangle": ["error", "only-multiline"],
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
    "object-curly-newline": ["error", { consistent: true }],
    "padded-blocks": "off",
    "unicorn/filename-case": ["off"],
    "unicorn/prefer-module": ["off"],
    "unicorn/prevent-abbreviations": ["off"],
  },
};
