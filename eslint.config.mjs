const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    overrides: [
      {
        files: ["**/*.ts", "**/*.tsx"],
        rules: {
          "no-unused-vars": "off", // ✅ Turn off for TypeScript files
        },
      },
    ],
  },
];
