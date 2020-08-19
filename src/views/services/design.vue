<template>
  <div>
    <div class="dark-top">
      <whiteNavBar></whiteNavBar>
    </div>

  <section class="design-section">

    <div class="container margin-top-bottom-30px">
      <div class="row">
        <div class="col-md-12">
          <h1>{{ service.name }}</h1>
           <div class="row">
                <div class="col-md-12">
                  <p>{{ service.intro_text }}</p>
                </div>
           </div>
                          
                <div class="card" v-for="item in service.secondary_services" v-bind:key="item.id">

                  <div class="row">
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
                      class="img-fluid"
              />
                </div>
                </div>
              
        
        </div>

      </div>
    </div>
    </div>
      </section>


    <PurpleHeightDiv></PurpleHeightDiv>
  </div>
</template>
<style>
.img-fluid{
  width: 100%;
  max-width: 100%;
}

.design-section{
 }

.dark-top {
  background-color: #4a4a4a;
  height: 150px;
}

.card{
   font-size: 16px;
    line-height: 2em;
    background-color: #ffffff;
    border-radius: 10px 10px 0 0;
    overflow: hidden;
    padding-top: 30px!important;
    padding-right: 20px!important;
    padding-bottom: 40px!important;
    padding-left: 20px!important;
    margin-bottom: 10px!important;
    box-shadow: 0px 2px 70px 0px rgba(110,130,208,0.18);
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
          "http://twinkle.consider-this.co.uk/ctuk-backend/items/primary_services/3?fields=secondary_services.name,secondary_services.description,secondary_services.image.filename_disk,intro_text,name&[secondary_services.status]=published"
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
