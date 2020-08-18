<template>
  <div>
    <div class="dark-top">
      <whiteNavBar></whiteNavBar>
    </div>

    <section class="info-section">
      <div class="container">
        <div class="about">
          <h1 class="text-center font-weight-bold large-text">Our Work</h1>
          <div class="row">
            <div
              v-for="item in ourwork"
              v-bind:key="item.id"
              class="col-md-4 col-xl-4 client-column"
            >
              <div class="client-details" v-if="item.featured_image">
                <img
                  :src="
                    'http://twinkle.consider-this.co.uk/uploads/ctuk-backend/originals/' +
                      item.featured_image.filename_disk
                  "
                  class="client-image"
                />
                <div class="overlay">
                  <div class="client-name">
                    <router-link
                      :to="{ name: 'ClientDetails', params: { id: item.slug } }"
                      class="text-white"
                    >
                      {{ item.client_name }}</router-link
                    >
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<style lang="scss" scoped>
.info-section {
  margin-top: 2%;

  .large-text {
    font-size: 3rem;
  }
}

.client-image {
  border: 1px solid rgba(0, 0, 0, 0.125);
  border-radius: 1px;
  width: 100%;
  max-width: 100%;
  height: 400px;
  object-fit: cover;
}
.client-column {
  padding: 2px;
}
.client-details {
  position: relative;
  height: 400px;

  .client-name {
    color: white;
    font-size: 30px;
    position: absolute;
    top: 50%;
    left: 50%;
    -webkit-transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    text-align: center;
  }
}

.client-details:hover {
  .client-image {
    filter: brightness(0.5);
  }

  .overlay {
    opacity: 1;
  }
}

.dark-top {
  background-color: #4a4a4a;
  height: 150px;
}

.overlay {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100%;
  width: 100%;
  opacity: 0;
  transition: 0.5s ease;
  background-color: #6c2482;
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
          "http://twinkle.consider-this.co.uk/ctuk-backend/items/case_studies?fields=featured_image.filename_disk,client_name,title,case_study,slug,featured_image.title&filter[status]=published"
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
