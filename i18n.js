module.exports = {
  locales: ['en'],
  defaultLocale: 'en',
  pages: {
    '*': ['common'],
    '/': ['home'],
  },
  loadLocaleFrom: (locale, namespace) =>
    require(`./src/locales/${locale}/${namespace}`),
};
