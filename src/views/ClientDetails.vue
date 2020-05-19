<template>
  <div>
    <whiteNavBar></whiteNavBar>
    <MainSlider :slides="mainslides"></MainSlider>

    <div class="container portfolio-text-container">
      <div class="row">
        <div class="col-md-12">
          <p v-html="mainslides[0].description"></p>
        </div>
      </div>
    </div>

    <PurpleHeightDiv></PurpleHeightDiv>
  </div>
</template>
<style>
.portfolio-text-container{
  margin-top: 20px;
  margin-bottom: 20px;

}
</style>
<script>
import whiteNavBar from "@/components/WhiteNavBar.vue";
import axios from "axios";
import MainSlider from "@/components/ClientSlider.vue";
import PurpleHeightDiv from "@/components/PurpleHeightDiv.vue";

export default {
  name: "ClientDetails",
  components: {
    whiteNavBar,
    MainSlider,
    PurpleHeightDiv

  },
  data() {
    return {
      clientId: this.$route.params.id,
      mainslides: ""
    };
  },
  created() {
    this.fetchSlides();
  },
  methods: {
    fetchSlides() {
      axios
        .get(
          `http://twinkle.consider-this.co.uk/ctuk-backend/items/projects?fields=featured_image.filename_disk,client_name,headingcolor,job_type,description,featured_image.title&filter[slug]=${this.clientId}`
        )
        .then(response => {
          this.mainslides = response.data.data;
        })
        .catch(function(error) {
          console.log(error);
        });
    }
  }
};
</script>
