<template>
  <div>
    <whiteNavBar></whiteNavBar>
    <MainSlider :slides="mainslides"></MainSlider>

    <div class="container portfolio-text-container">
      <div class="row">
        <div class="col-md-12" v-if="mainslides[0].case_study">
          <p v-html="mainslides[0].case_study"></p>
        </div>
      </div>
    </div>

    <div class="container ">
      <h1>{{ mainslides[0].title }}</h1>

      <h3>Client Name: {{ mainslides[0].client_name }}</h3>

      <div v-for="item in mainslides[0].images" v-bind:key="item.id">
        <img
          :src="
            'http://twinkle.consider-this.co.uk/uploads/ctuk-backend/originals/' +
              item.directus_files_id.filename_disk
          "
          class="client-image"
        />
      </div>
    </div>
    <PurpleHeightDiv></PurpleHeightDiv>
  </div>
</template>
<style scoped>
.portfolio-text-container {
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
          `http://twinkle.consider-this.co.uk/ctuk-backend/items/case_studies?fields=title,client_name,case_study,slug,images.directus_files_id.filename_disk,featured_image.filename_disk,client_name,headingcolor,title,case_study,featured_image.title&filter[slug]=${this.clientId}`
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
