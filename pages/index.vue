<template>
  <div>
    <navbar></navbar>
    <homepage-hero :desktopImageUrl="desktopImageUrl" :mobileImageUrl="mobileImageUrl" :title="title" :caption="caption"></homepage-hero>
    <title-text-aside :asideTitle="asideTitle" :asideBody="asideBody" :asideBody2="asideBody2"></title-text-aside>
    <div class="carousel-wrap">
      <div class="a-bg"></div>
      <div class="m-container">
        <carousel-with-text></carousel-with-text>
      </div>
    </div>
    <contact-form></contact-form>
  </div>
</template>

<script>
import { createClient } from "~/plugins/contentful.js";
import Navbar from "~/components/Navbar.vue";
import HomepageHero from "~/components/HomepageHero.vue";
import TitleTextAside from "~/components/TitleTextAside.vue";
import CarouselWithText from '~/components/CarouselWithText.vue';
import ContactForm from '~/components/ContactForm.vue';
const client = createClient();

export default {
  components: {
    Navbar,
    HomepageHero,
    TitleTextAside,
    CarouselWithText,
    ContactForm
  },

  asyncData({ env }) {
    const that = this;
    return Promise.all([
      // fetch all blog posts sorted by creation date
      client.getEntries({
        content_type: env.CTF_HERO_ID
      }),
      client.getEntries({
        content_type: env.CTF_TITLE_TEXT_ASIDE_ID
      })
    ])
      .then(entry => {
        return {
          title: entry[0].items[0].fields.title,
          caption: entry[0].items[0].fields.caption,
          desktopImageUrl: entry[0].items[0].fields.desktopImage.fields.file.url,
          mobileImageUrl: entry[0].items[0].fields.mobileImage.fields.file.url,
          asideTitle: entry[1].items[0].fields.title,
          asideBody: entry[1].items[0].fields.body,
          asideBody2: entry[1].items[0].fields.body2
        }
      })
      .catch(console.error);
  }
};
</script>

<style>
.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; /* 1 */
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
