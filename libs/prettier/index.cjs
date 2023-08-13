/**
 * @type {import("prettier").Config}
 */
module.exports = {
  printWidth: 80,
  tabWidth: 2,
  semi: true,
  bracketSpacing: true,
  singleQuote: true,
  trailingComma: 'all',
  arrowParens: 'always',
  endOfLine: 'auto',
  useTabs: false,
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
  importOrderGroupNamespaceSpecifiers: true,
  importOrderCaseInsensitive: true,
  importOrder: ['^react', '<THIRD_PARTY_MODULES>', '^@\\/', '^..\\/', '^.\\/'],
};
