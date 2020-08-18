<template>
  <div>
    <div class="dark-top">
      <whiteNavBar></whiteNavBar>
    </div>

    <div class="container ">
      <h1>{{ study.title }}</h1>

      <h3>Client Name: {{ study.client_name }}</h3>

      <p v-html="study.case_study"></p>

      <div v-for="item in study.images" v-bind:key="item.id">
        <img
          :src="
            'http://twinkle.consider-this.co.uk/uploads/ctuk-backend/originals/' +
              item.directus_files_id.filename_disk
          "
          class="client-image"
        />
      </div>

      <div class="row text-left">
        <div
          class="col-md-6 col-xl-6"
          v-for="item in casestudies"
          v-bind:key="item.id"
        >
          <div class="card">
            <div class="card-body">
              <router-link
                :to="{ name: 'CaseStudy', params: { id: item.slug } }"
                ><h5>{{ item.title }}</h5></router-link
              >
              <p>{{ item.case_study | strippedContent | stringLimit }}...</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.dark-top {
  background-color: #4a4a4a;
  height: 150px;
}
</style>
<script>
import whiteNavBar from "@/components/WhiteNavBar.vue";
export default {
  name: "casestudy",
  components: {
    whiteNavBar
  },
  data() {
    return {
      casestudyId: this.$route.params.id,
      study: ""
    };
  },
  created() {
    this.fetchStudy();
  },
  methods: {
    fetchStudy() {
      this.$http
        .get(
          `http://twinkle.consider-this.co.uk/ctuk-backend/items/case_studies?fields=title,client_name,case_study,slug,images.directus_files_id.filename_disk&limit=1&filter[slug]=${this.casestudyId}`
        )
        .then(response => {
          this.study = response.data.data[0];
        })
        .catch(function(error) {
          console.log(error);
        });
    }
  }
};
</script>
