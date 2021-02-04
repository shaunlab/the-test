<template>

  <div class="o-homepage-hero d-flex flex-column text-center">
    <img
      class="a-bg mobile"
      :src="image"
      alt="hero"
    />
    <img class="d-md-none" src="/test-circle.svg" alt="circle" />
    <div class="m-wrap">
      <div class="m-copy">
        <h1 class="text-uppercase">{{ title }}</h1>
        <h3 class="text-uppercase"><span>Forge our</span> tomorrow</h3>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['desktopImageUrl', 'mobileImageUrl', 'title', 'caption'],
  computed: {
    image() {
      if (this.$device.isMobile) {
        return this.mobileImageUrl;
      } else {
        return this.desktopImageUrl;
      }
    }
  }
}
</script>

<style scoped lang="scss">
@import "~/assets/scss/_index.scss";
.o-homepage-hero {
  position: relative;
  padding: 5rem 0 3rem;
  align-items: center;
  .a-img {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
  }
  img {
    margin-bottom: 3rem;
  }
  h3 {
    color: white;
  }
  img {
    &.a-bg {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      z-index: -1;
      margin-bottom: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
}

@media ($sm-up) {
  .o-homepage-hero {
    height: 100vh;
    padding: 5rem 0 4.25rem;

    .m-wrap {
      margin-top: auto;
    }
  }
}

@media ($md-up) {
  .o-homepage-hero {
    justify-content: center;
    .a-img {
      left: 28.5%;
    }
    .m-wrap {
      margin-top: 0;
      max-width: 1440px;
      width: 100%;

      .m-copy {
        width: 60%;

        h3 {
          span {
            color: $blue;
          }
        }
      }
    }
  }
}

@media ($lg-up) {
  .o-homepage-hero {
    .a-img {
      left: 24%;
    }
    .m-wrap {
      .m-copy {
        width: 50%;
      }
    }
  }
}

@media ($hd-up) {
  .o-homepage-hero {
    .a-img {
      left: 30.5%;
    }
  }
}
</style>
