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
<<<<<<< HEAD
.dark-top {
  background-color: #4a4a4a;
  height: 150px;
=======

.dark-top {
  background-color: #4a4a4a;
  height: 150px;

  .vnb-image {
    width: 80% !important;
  }

  .vnb {
    //padding-top: 25px !important;
  }

  .vnb__menu-options--right {
    padding-top: 40px;
    .vnb__menu-options__option__link {
      font-size: 1.2em;
    }
  }
>>>>>>> 8719425f16c9a7efb983f6f5ca89e9f8b883255c
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
<<<<<<< HEAD
          "http://twinkle.consider-this.co.uk/ctuk-backend/items/projects?fields=featured_image.filename_disk,client_name,job_type,description,slug,featured_image.title&filter[status]=published"
=======
          "http://twinkle.consider-this.co.uk/ctuk-backend/items/projects?fields=featured_image.filename_disk,client_name,job_type,description,featured_image.title&filter[status]=published"
>>>>>>> 8719425f16c9a7efb983f6f5ca89e9f8b883255c
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
