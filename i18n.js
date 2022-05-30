module.exports = {
  locales: ['en'],
  defaultLocale: 'en',
  pages: {
    '*': ['common'],
  },
  loadLocaleFrom: (locale, namespace) =>
    require(`./src/locales/${locale}/${namespace}`),
};
