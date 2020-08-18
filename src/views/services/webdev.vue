<template>
  <div>
    <div class="dark-top">
      <whiteNavBar></whiteNavBar>
    </div>

    <div class="container margin-top-bottom-30px">
      <div class="row">
        <div class="col-md-12">
          <h1>{{ service.name }}</h1>

              <div class="row">
                <div class="col-md-12">
                  <p>{{ service.intro_text }}</p>
                </div>
              </div>

              <div class="row" v-for="item in service.secondary_services" v-bind:key="item.id">
                <div class="col-md-6">
                  <h1>{{ item.name }}</h1>
                  <p v-html="item.description"></p>
                </div>
                <div class="col-md-6" v-if="item.image">
                  <img
                      :src="
                        'http://twinkle.consider-this.co.uk/uploads/ctuk-backend/originals/' +
                          item.image.filename_disk
                      "
                      alt="header image"
                      class="img-fluid max-width-60"
              />
                </div>
              </div>

        </div>

      </div>
    </div>

    <PurpleHeightDiv></PurpleHeightDiv>
  </div>
</template>
<style>
.dark-top {
  background-color: #4a4a4a;
  height: 150px;
}

input,
textarea {
  display: block;
  width: 100%;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  line-height: 1.5;
  color: #495057;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #ced4da;
  border-radius: 0.25rem;
  box-sizing: border-box;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}

.button {
  border-radius: 4px;
  background-color: #6c2482;
  border: none;
  color: #ffffff;
  text-align: center;
  font-size: 20px;
  padding: 20px 40px 20px 40px;
  transition: all 0.5s;
  cursor: pointer;
  margin: 5px;
}

.button span {
  cursor: pointer;
  display: inline-block;
  position: relative;
  transition: 0.5s;
}

.button span:after {
  content: "\00bb";
  position: absolute;
  opacity: 0;
  top: 0;
  right: -20px;
  transition: 0.5s;
}

.button:hover span {
  padding-right: 25px;
}

.button:hover span:after {
  opacity: 1;
  right: 0;
}
</style>
<script>
import whiteNavBar from "@/components/WhiteNavBar.vue";
import PurpleHeightDiv from "@/components/PurpleHeightDiv.vue";

export default {
  name: "Service",
  components: {
    whiteNavBar,
    PurpleHeightDiv

  },
  data(){
    return{
      service: ''
    }
  },
  mounted() {
    this.fetchData();
  },
  methods:{
      fetchData() {
      this.$http
        .get(
          "http://twinkle.consider-this.co.uk/ctuk-backend/items/primary_services/4?fields=secondary_services.name,secondary_services.description,secondary_services.image.filename_disk,intro_text,name&[secondary_services.status]=published"
        )
        .then(response => {
          this.service = response.data.data;
        })
        .catch(function(error) {
          console.log(error);
        });
    }
  }
};
</script>
