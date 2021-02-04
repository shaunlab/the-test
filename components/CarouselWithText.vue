<template>
  <div id="mission" class="o-carousel-with-text">
    <b-carousel
      id="carousel-1"
      class="m-carousel"
      v-model="slide"
      :interval="4000"
      indicators
      fade
      background="#ababab"
      img-width="1024"
      img-height="480"
      style="text-shadow: 1px 1px 2px #333;"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    >
      <b-carousel-slide
        content-visible-up="md"
        img-src="/images/desktop/slide01.jpg"
      >
        <h2>Quality</h2>
      </b-carousel-slide>
      <b-carousel-slide
        content-visible-up="md"
        img-src="https://picsum.photos/1440/705/?image=52"
      >
        <h2>Speed</h2>
      </b-carousel-slide>
      <b-carousel-slide
        content-visible-up="md"
        img-src="https://picsum.photos/1440/705/?image=58"
      >
        <h2>Innovate</h2>
      </b-carousel-slide>
      <b-carousel-slide
        content-visible-up="md"
        img-src="https://picsum.photos/1440/705/?image=55"
      >
        <h2>Quantity</h2>
      </b-carousel-slide>
      <b-carousel-slide
        content-visible-up="md"
        img-src="https://picsum.photos/1440/705/?image=59"
      >
        <h2>Passion</h2>
      </b-carousel-slide>
    </b-carousel>
    <div class="m-copy">
      <h4 class="a-title style-1">Our mission</h4>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce nec
        mauris magna. Donec scelerisque lorem vitae erat faucibus, sed finibus
        orci vehicula. Nulla facilisi. Praesent ultrices at neque vitae maximus.
        Aenean feugiat mauris quis purus commodo scelerisque. Aliquam erat
        volutpat. Cras blandit, felis at ultrices dapibus, neque libero
        venenatis felis, vel ornare nunc erat id magna.
      </p>
      <p>
        Cras ullamcorper sollicitudin neque in vestibulum. Ut vitae elementum
        enim. Nulla placerat sodales ex euismod sodales. Maecenas ac sodales
        erat, sed suscipit est. Class aptent taciti sociosqu ad litora torquent
        per conubia nostra, per inceptos himenaeos. Maecenas scelerisque nunc
        sed mi sagittis consectetur. Pellentesque sollicitudin mi a risus
        interdum porttitor.
      </p>
      <p>
        In hac habitasse platea dictumst. Morbi rutrum leo eu tellus tristique,
        non feugiat nisi finibus. Cras facilisis quis purus in eleifend. Integer
        dapibus quam eget nulla venenatis, sit amet efficitur purus rutrum.
        Praesent condimentum erat ac ex lobortis venenatis.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      slide: 0,
      sliding: null,
    };
  },
  methods: {
    onSlideStart() {
      this.sliding = true;
    },
    onSlideEnd() {
      this.sliding = false;
    },
  },
};
</script>

<style scoped lang="scss">
@import "~/assets/scss/_index.scss";
.o-carousel-with-text {
  padding-bottom: 3.125rem;
  .m-copy {
    width: calc(100% - 30px);
    margin: -23px auto 0 auto;
    position: relative;
    z-index: 1;
    background-color: white;
    padding: 0.6875rem 0 0 0;
    .a-title {
      text-transform: uppercase;
      &.style-1 {
        position: relative;
        text-align: center;
        margin-bottom: 2.25rem;
        &:before,
        &:after {
          content: '';
          display: inline-block;
          vertical-align: middle;
          height: 1px;
          background: $blue;
          width: 20%;
          margin-right: 9px;
          margin-left: 9px;
        }
      }
    }
  }
}

@media ($sm-up) {
  .o-carousel-with-text {
    .m-copy {
      margin: -32px auto 0 auto;
      padding: 1.875rem 15px 0 15px;
      max-width: 815px;
      .a-title {
        &.style-1 {
          &:before,
          &:after {
            margin-right: 25px;
            margin-left: 25px;
          }
        }
      }
    }
  }
}

@media ($lg-up) {
  .o-carousel-with-text {
    .m-copy {
      margin: -46px auto 0 auto;
      padding: 2.875rem 15px 0 15px;
      max-width: 1084px;
      .a-title {
        text-transform: uppercase;
        &.style-1 {
          position: relative;
          text-align: center;
          margin-bottom: 2.25rem;
          &:before,
          &:after {
            width: 18%;
          }
        }
      }
    }
  }
}
</style>
