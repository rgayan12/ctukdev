<template>
  <div>
    <div class="testimonials p-80">
      <div class="container">
        <h2 class="text-left">Don't just take our word for it</h2>

        <swiper class="swiper" :options="swiperOptions">
              <swiper-slide v-for="item in testimonials" v-bind:key="item.id">
                    <div class="row">
                          <div class="col-md-4 col-lg-3">
                            <knob-control
                              :min="0"
                              :max="5"
                              :stroke-width="10"
                              :responsive="true"
                              v-model="item.rating"
                              primaryColor="#4F1A6F"
                              readonly="true"
                            ></knob-control>
                          </div>
                          <div class="col-md-8 col-lg-8">
                            <div class="testimonial-desc">
                              <div class="text-description">
                                <p class="testimonial-text">
                                {{ item.testimonial }}
                                </p>
                                <div class="author">
                                  <p>
                                    <strong>{{item.writer}}</strong><br />{{ item.title }}
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
              </swiper-slide>
               <div class="swiper-pagination" slot="pagination"></div>
          </swiper>  
    
      </div>
    </div>
  </div>
</template>
<style scoped>
h2{
     font-size: 1.9rem;
}
.p-80{
   padding-top: 80px;
   padding-bottom: 80px;
}
.testimonials {
  padding-left: 50px;
}
.testimonial-desc {
  font-weight: 1.5rem;
}
.author {
  text-align: left;
}

.testimonial-text {
  font-size: 1.4rem;
}
</style>
<script>
import KnobControl from "vue-knob-control";

  import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
  import 'swiper/css/swiper.css'

export default {
  name: "testimonials",
  components: {
    KnobControl,
    Swiper,
    SwiperSlide
 
  },
  data() {
    return {
      semitone: 4.5,
      testimonials: '',
      swiperOptions: {
         slidesPerView: 1,
          spaceBetween: 30,
          keyboard: {
            enabled: true,
          },
          pagination: {
            el: '.swiper-pagination',
            clickable: true
          },
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
          }
        }
 
    };
  },
  mounted() {
     this.fetchData();
  },
    methods: {
    fetchData() {
      this.$http
        .get(
          `http://twinkle.consider-this.co.uk/ctuk-backend/items/testimonials?&filter[status]=published`
        )
        .then(response => {
          this.testimonials = response.data.data;
        })
        .catch(function(error) {
          console.log(error);
        });
    }
  }

};
</script>
