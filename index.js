const typescriptDelimiter = {
  delimiter: "comma",
  requireLast: false,
};

module.exports = {
  parser: "@typescript-eslint/parser",

  extends: [
    "airbnb",
    "airbnb/hooks",
    "airbnb-typescript",
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:compat/recommended",
    "plugin:import/recommended",
    "plugin:import/typescript",
    "plugin:jest/recommended",
    "plugin:jsx-a11y/recommended",
    "plugin:promise/recommended",
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

  settings: {
    "import/ignore": [
      // Some bad formatting in this module creates an ESLint error
      "react-native",
    ],
  },

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
    "import/no-extraneous-dependencies": [
      "error",
      {
        devDependencies: [".storybook/**", "features/**/*.stories.*", "features/**/*.spec.*"],
      },
    ],
    // TODO: fix conflicts with aliasing in nextjs+typescript+babel+webpack
    // until then, let typescript handle unresolved imports
    "import/no-unresolved": "off",
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
