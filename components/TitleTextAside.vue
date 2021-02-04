<template>
  <div id="about" class="o-title-text-aside">
    <div class="m-row row">
      <div class="m-title col-12 col-md-5 col-lg-5 col-xl-4">
        <div class="a-bg"></div>
        <div class="box">
          <div class="a-bg"></div>
          <h2 class="a-title text-uppercase">{{ asideTitle }}</h2>
        </div>
      </div>
      <div class="m-copy col-12 offset-md-1 col-md-6 offset-lg-0 col-lg-7 col-xl-8">
        <div class="row">
          <div class="col-12 col-lg-6" v-html="body">
          </div>
          <div class="col-12 col-lg-6" v-html="body2">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';
export default {
  props: ['asideTitle', 'asideBody', 'asideBody2'],
  computed: {
    body() {
      return documentToHtmlString(this.asideBody);
    },
    body2() {
      return documentToHtmlString(this.asideBody2);
    }
  }
}
</script>

<style scoped lang="scss">
@import '~/assets/scss/_index.scss';

.o-title-text-aside {
  .m-row {
    margin-left: 0;
    margin-right: 0;
    .m-title {
      padding-left: 0;
      padding-right: 0;
      text-align: center;

      .box {
        position: relative;
        padding: 5.5rem 1.875rem;
        .a-bg {
          background: $blue;
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          z-index: -1;
        }
        .a-title {
          color: white;
        }
      }
    }
    .m-copy {
      padding-top: 2.375rem;
      padding-bottom: 2.375rem;
    }
  }
}

@media ($sm-up) {
  .o-title-text-aside {
    padding-top: 5rem;
    padding-bottom: 5rem;
    .m-row {
      .m-title {
        text-align: left;
        padding-left: 40px;
        .box {
          padding-top: 0;
          padding-bottom: 0;
          padding-left: 15px;
          padding-right: 0;
          max-width: 347px;
          display: flex;
          flex-direction: column-reverse;
          .a-bg {
            position: static;
            height: 256px;
            width: 305px;
          }
          .a-title {
            color: black;
          }
        }
      }
      .m-copy {
        padding-top: 0;
        padding-bottom: 0;
        padding-left: 0;
        padding-right: 40px;
      }
    }
  }
}
@media ($md-up) {
  .o-title-text-aside {
    padding-top: 2.3125rem;
    .m-row {
      max-width: 1440px;
      margin: 0 auto;
      .m-title {
        > .a-bg {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-color: white;
          z-index: -1;
          transform: translateY(-3.9375rem);
        }
      }
      .m-copy {
        padding-top: 9.5625rem;
        padding-left: 15px;
      }
    }
  }
}
</style>
