<template>
  <div>
    <div class="container">
      <h2>Our Latest Work</h2>
    </div>
    <swiper class="swiper" :options="swiperOption">
      <!--      <swiper-slide>


        <img src="/images/Bira.png" />
        <h3>bira london</h3>
        <h5>corporate branding</h5>
      </swiper-slide>
      <swiper-slide>
        <img src="/images/alra.png" />
        <h3>alra - performing arts</h3>
        <h5>website and print</h5>
      </swiper-slide>
      <swiper-slide>
        <img src="/images/pt.png" />
        <h3>perform this</h3>
        <h5>performing arts platform</h5>
      </swiper-slide>

      -->
      <swiper-slide v-for="item in ourwork" v-bind:key="item.id">
        <img
          :src="
            'http://twinkle.consider-this.co.uk/uploads/ctuk-backend/originals/' +
              item.featured_image.filename_disk
          "
        />
        <h3>{{ item.client_name }}</h3>
        <h5>{{ item.job_type }}</h5>
      </swiper-slide>

      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
    <div class="container">
      <h3>See more of our work >>></h3>
    </div>
  </div>
</template>

<style lang="scss">
.swiper-slide {
  flex-shrink: 0;
  width: 100%;
  height: 100%;
  position: relative;
  transition-property: transform;
  padding: 20px;
}

.swiper-slide img {
  width: 100%;
  max-width: 400px; /*actual image width*/
  height: auto; /* maintain aspect ratio*/
  margin: auto; /*optional centering of image*/
}

.swiper-wrapper {
  position: relative;
  width: 100%;
  height: 100%;
  z-index: 1;
  display: flex;
  transition-property: transform;
  box-sizing: content-box;
}
</style>

<script>
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import "swiper/css/swiper.css";
import axios from "axios";

export default {
  name: "latest-work-slider",
  components: {
    Swiper,
    SwiperSlide
  },
  data() {
    return {
      swiperOption: {
        slidesPerView: 5,
        spaceBetween: 2,
        pagination: {
          el: ".swiper-pagination",
          clickable: true
        }
      },
      ourwork: []
    };
  },
  created() {
    this.fetchWork();
  },
  methods: {
    fetchWork() {
      axios
        .get(
          "http://twinkle.consider-this.co.uk/ctuk-backend/items/projects?fields=featured_image.filename_disk,client_name,job_type,description,featured_image.title&filter[status]=published"
        )
        .then(response => {
          this.ourwork = response.data.data;
        })
        .catch(function(error) {
          console.log(error);
        });
    }
  }
};
</script>
