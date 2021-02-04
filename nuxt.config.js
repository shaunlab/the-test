const config = require("./.contentful.json");

module.exports = {
  /*
   ** Headers of the page
   */
  head: {
    title: "the-test-nuxt",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: "Assessment for new starters at Riverr"
      }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
  },
  /*
   ** Customize the progress bar color
   */
  loading: { color: "#3B8070" },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** Run ESLint on save
     */
    extend(config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: "pre",
          test: /\.(js|vue)$/,
          loader: "eslint-loader",
          exclude: /(node_modules)/
        });
      }
    }
  },
  env: {
    CTF_SPACE_ID: config.CTF_SPACE_ID,
    CTF_CDA_ACCESS_TOKEN: config.CTF_CDA_ACCESS_TOKEN,
    CTF_HERO_ID: config.CTF_HERO_ID,
    CTF_TITLE_TEXT_ASIDE_ID: config.CTF_TITLE_TEXT_ASIDE_ID
  },
  modules: ["bootstrap-vue/nuxt"],
  buildModules: ["@nuxtjs/device"],
  css: ["~/assets/scss/_index.scss"]
};
