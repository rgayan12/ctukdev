<template>
  <div>
    <agile v-if="mainslides.length" :nav-buttons="false" :options="options1">
      <div v-for="item in mainslides" v-bind:key="item.id">
        <div class="slide" :style="'background-color:' + item.headingcolor">
          <div class="row client-slider-raw">
            <div class="col-md-12 col-lg-12 col-xl-6 img-div">
              <img
                :src="
                  'http://twinkle.consider-this.co.uk/uploads/ctuk-backend/originals/' +
                    item.featured_image.filename_disk
                "
                alt="header image"
                class="img-fluid max-width-60"
              />
            </div>
            <div class="col-md-12 col-lg-12 col-xl-6">
              <div class="padding-md-30px">
                <h1 v-html="item.client_name"></h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </agile>
  </div>
</template>

<style lang="scss">
.agile__dots {
  bottom: 10px;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  flex-direction: column;
  right: 30px;
  position: absolute;
}
.agile__dot {
  margin: 5px 0;
}
.agile__dot button {
  background-color: transparent;
  border: 1px solid #fff;
  cursor: pointer;
  display: block;
  height: 10px;
  font-size: 0;
  line-height: 0;
  margin: 0;
  padding: 0;
  -webkit-transition-duration: 0.3s;
  transition-duration: 0.3s;
  width: 10px;
}
.agile__dot--current button,
.agile__dot:hover button {
  background-color: #fff;
}

.slide {
  align-items: center;
  color: #fff;
  display: flex;
  height: 100vh;
  justify-content: center;
  -o-object-fit: cover;
  object-fit: cover;

  h3 {
    font-size: 32px;
    font-weight: 300;
  }
}
.agile {
  margin-top: -180px;
  z-index: 2;

  h1 {
    font-size: 1.5rem;
    text-transform: uppercase;
    line-height: 1;
  }
  .spotlight-text {
    font-size: 2rem;
  }
  .spotlight-text::after {
    content: "\a";
    white-space: pre;
  }
}

.client-slider-raw {
  display: flex;
  align-items: center;
  justify-content: center;
}
.img-div img {
  display: block;
  width: 100%;
  max-width: 600px; /*actual image width*/
  height: auto; /* maintain aspect ratio*/
  margin: auto; /*optional centering of image*/
  margin-top: 20%;
}

@media (max-width: 1200px) {
  .padding-md-30px {
    padding: 30px;
  }
}

@media (min-width: 768px) {
  .agile {
    h1 {
      font-size: 3rem;
      text-transform: uppercase;
      line-height: 1;
    }
    .spotlight-text {
      font-size: 6rem;
    }
  }
}

@media (min-width: 1024px) {
  .img-div img {
    margin-top: 0;
  }
}
</style>

<script>
import { VueAgile } from "vue-agile";

export default {
  name: "client-slider",
  components: {
    agile: VueAgile
  },
  props: {
    slug: String,
    slides: Array
  },
  data() {
    return {
      mainslides: [],
      options1: {
        dots: true,
        fade: true,
        navButtons: false,
        slidesToShow: 1
      }
    };
  },
  created() {
    this.mainslides = this.slides;
  }
};
</script>
