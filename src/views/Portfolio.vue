<template>
  <div>
    <div class="dark-top">
      <whiteNavBar></whiteNavBar>
    </div>

    <section class="info-section">
      <div class="container">
        <div class="about">
          <h1>Our Work</h1>
          <div class="row">
            <div v-for="item in ourwork" v-bind:key="item.id" class="col-md-4">
              <div class="client-details">
                <img
                  :src="
                    'http://twinkle.consider-this.co.uk/uploads/ctuk-backend/originals/' +
                      item.featured_image.filename_disk
                  "
                  class="client-image"
                />
                <div class="client-name">
                  <router-link
                    :to="{ name: 'ClientDetails', params: { id: item.slug } }" class="text-white"
                  >
                    {{ item.client_name }}</router-link
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<style lang="scss">
.info-section {
  margin-top: 4%;
}

.client-image {
  border: 1px solid rgba(0, 0, 0, 0.125);
  border-radius: 48px;
  width: 100%;
  max-width: 400px; /*actual image width*/
  height: auto; /* maintain aspect ratio*/
  margin: auto; /*optional centering of image*/
}

.client-details {
  position: relative;

  .client-name {
    position: absolute;
    bottom: 10px;
    padding-left: 30px;
    color: #fff;
    font-size: 1.5rem;
  }

  .client-image {
    filter: brightness(0.5);
  }
}
.dark-top {
  background-color: #4a4a4a;
  height: 150px;
}
</style>
<script>
import whiteNavBar from "@/components/WhiteNavBar.vue";

export default {
  name: "portfolio",
  components: {
    whiteNavBar
  },
  data() {
    return {
      ourwork: []
    };
  },
  created() {
    this.fetchWork();
  },
  methods: {
    fetchWork() {
      this.$http
        .get(
          "http://twinkle.consider-this.co.uk/ctuk-backend/items/projects?fields=featured_image.filename_disk,client_name,job_type,description,slug,featured_image.title&filter[status]=published"
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
