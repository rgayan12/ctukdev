<template>
    <div>
        <whiteNavBar></whiteNavBar>
        <MainSlider :slides="mainslides"></MainSlider>
        
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                 <p v-html="mainslides[0].description"></p>
                </div>
            </div>
        </div>

    </div>
</template>
<style>

</style>
<script>
import whiteNavBar from "@/components/WhiteNavBar.vue";
import axios from "axios";
import MainSlider from "@/components/ClientSlider.vue";


export default {
    name: 'ClientDetails',
    components:{
    whiteNavBar,
    MainSlider,

    },
    data(){
        return{
            clientId: this.$route.params.id,
            mainslides: ''
        }
    },
    created() {
    this.fetchSlides();
  },
  methods: {
    fetchSlides() {
      axios
        .get(
          `http://twinkle.consider-this.co.uk/ctuk-backend/items/projects?fields=featured_image.filename_disk,client_name,job_type,description,featured_image.title&filter[slug]=${this.clientId}`
        )
        .then(response => {
          this.mainslides = response.data.data;
        })
        .catch(function(error) {
          console.log(error);
        });
    }
  }
    
}
</script>