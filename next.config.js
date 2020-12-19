/* eslint-disable @typescript-eslint/no-var-requires */
const nextTranslate = require('next-translate');

const { locales, defaultLocale } = require('./i18n.json');

module.exports = {
  ...nextTranslate(),
  i18n: {
    locales,
    defaultLocale,
  },
};
