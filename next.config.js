/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: ["en-US", "fr-FR", "es-ES", "nl-NL"],

    defaultLocale: "en-US",
  },
};

module.exports = nextConfig;
