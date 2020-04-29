<template>
<div>
<div class="container">
    <h2>Our Latest Work</h2>
</div>
 <swiper class="swiper" :options="swiperOption">
    <swiper-slide> 
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
    <swiper-slide>Slide 4</swiper-slide>
    <swiper-slide>Slide 5</swiper-slide>
    <swiper-slide>Slide 6</swiper-slide>
    <swiper-slide>Slide 7</swiper-slide>
    <swiper-slide>Slide 8</swiper-slide>
    <swiper-slide>Slide 9</swiper-slide>
    <swiper-slide>Slide 10</swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
  <div class="container">
  <h3>See more of our work >>> </h3>
  </div>
  <div v-for="item in ourwork" v-bind:key="item.id">
    {{item.client_name}}

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
    padding: 30px;
   
}

.swiper-slide img {
   width: 100%;
   max-width: 500px; /*actual image width*/
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


import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'
import axios from 'axios';

export default {
    name: "latest-work-slider",
      components: {
         Swiper,
         SwiperSlide
    },
     data() {
      return {
        swiperOption: {
          slidesPerView: 4,
          spaceBetween: 5,
          pagination: {
            el: '.swiper-pagination',
            clickable: true
          }
        },
        ourwork: [],
      }
    },
    created(){
      this.fetchWork();
    },
    methods: {
      fetchWork(){
        axios.get('http://twinkle.consider-this.co.uk/ctuk-backend/items/projects')
        .then((response) => {
          console.log(response)
             this.ourwork = response.json().data;
        // handle success
        console.log(response);
        })
        .catch(function (error) {
        // handle error
        console.log(error);
        })
        .then(function () {
        // always executed
        });
      }
    }

   

}
</script>