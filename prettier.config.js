/** @type {import('prettier').Config & import('prettier-plugin-tailwindcss').PluginOptions} */
const config = {
  importOrder: [
    "^(bun/(.*)$)|^(bun$)",
    "<BUILTIN_MODULES>",
    "",
    "^~/styles/(.*)$",
    "",
    "^(next/(.*)$)|^(next$)",
    "^(react/(.*)$)|^(react$)",
    "",
    "^~/hooks/(.*)$",
    "",
    "^~/components/(.*)$",
    "",
    "^~/lib/(.*)$",
    "",
    "<THIRD_PARTY_MODULES>",
    "",
    "^~/types/(.*)$",
    "",
    "^[~/]",
    "^[.]",
  ],
  plugins: [
    "@ianvs/prettier-plugin-sort-imports",
    "prettier-plugin-tailwindcss",
  ],
  semi: false,
}

export default config
