<template>
  <div>
    <div class="container">
      <h2 class="text-center">Awards?? We got them too</h2>
      <div class="row center-row">
        <div
          class="col-md-4 col-xl-3"
          v-for="item in awards"
          v-bind:key="item.id"
        >
          <img
            :src="
              'http://twinkle.consider-this.co.uk/uploads/ctuk-backend/originals/' +
                item.image_or_logo.filename_disk
            "
            :alt="item.name"
            class="img-fluid"
          />
          <h5>{{ item.name }}</h5>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.img-fluid {
  max-width: 100%;
}

@media (min-width: 1200px) {
  .img-fluid {
    max-width: 70%;
  }
}
</style>
<script>
import axios from "axios";
export default {
  name: "awards",
  data() {
    return {
      awards: ""
    };
  },
  mounted() {
    this.fetchAwards();
  },
  methods: {
    fetchAwards() {
      axios
        .get(
          "http://twinkle.consider-this.co.uk/ctuk-backend/items/awards_and_memberships?fields=image_or_logo.filename_disk,name&filter[status]=published"
        )
        .then(response => {
          this.awards = response.data.data;
        })
        .catch(function(error) {
          console.log(error);
        });
    }
  }
};
</script>
