<template>
  <div>
    <div class="container my-5">
      <h2 class="sub-heading-text-work"><router-link to="/work">Our Latest Work</router-link></h2>

      <swiper class="swiper" :options="swiperOption">
        <swiper-slide v-for="item in ourwork" v-bind:key="item.id">
          <div class="figure">
            <img
              :src="
                'http://twinkle.consider-this.co.uk/uploads/ctuk-backend/originals/' +
                  item.featured_image.filename_disk
              "
            />

            <h3>{{ item.client_name }}</h3>
           <!-- <h5>{{ item.job_type }}</h5> -->
          </div>
        </swiper-slide>

        <div class="swiper-pagination" slot="pagination"></div>

      </swiper>

     
    </div>
  </div>
</template>

<style lang="scss">

.sub-heading-text-work{
  font-size: 3rem;
  color: #333;
  a {
      text-decoration: none;
      color: #333;
  }
}
 
.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #fff;

  /* Center slide text vertically */
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  -webkit-align-items: center;
  align-items: center;
}
.my-5 {
  margin-top: 100px;
  margin-bottom: 100px;
}
.swiper-slide img {
  width: 100%;
  //max-width: 400px; /*actual image width*/
  height: auto; /* maintain aspect ratio*/
  margin: auto; /*optional centering of image*/
  max-height: 350px;
}

.swiper-wrapper {
  position: relative;
  width: 100%;
  height: 100%;
  z-index: 1;
  display: flex;
  transition-property: transform;
  box-sizing: content-box;
  margin-bottom: 20px;
}
.swiper-container {
  width: 100%;
  height: 100%;
}

.swiper-pagination-bullet {
    width: 12px;
    height: 12px;
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
        pagination: {
          el: ".swiper-pagination",
          clickable: true
        },
        breakpoints: {
          1024: {
            slidesPerView: 3,
            spaceBetween: 30
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 30
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 30
          },
          320: {
            slidesPerView: 1,
            spaceBetween: 30
          }
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
