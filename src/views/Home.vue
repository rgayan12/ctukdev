<template>
  <div class="home">
    <!--<HelloWorld msg="Welcome to CTUK New Website" /> -->

    <MainSlider></MainSlider>

     
        <LatestWork></LatestWork>
      

      <FullHeightDiv title="What we do & Who are we" summary="We are a marketing agency with skills across a range of services. We work with organisation and franchises from a diverse range of industries from education to construction."></FullHeightDiv>
      
      <Testimonials></Testimonials>

      <PurpleDiv></PurpleDiv>  


   </div>
</template>

<script>
// @ is an alias to /src
//import HelloWorld from "@/components/HelloWorld.vue";
import MainSlider from "@/components/MainSlider.vue";
import LatestWork from "@/components/LatestWork.vue";
import FullHeightDiv from "@/components/FullHeightDiv.vue";
import Testimonials from "@/components/Testimonials.vue";
import PurpleDiv from "@/components/PurpleHeightDiv.vue";






export default {
  name: "Home",
  components: {
  //  HelloWorld,
    MainSlider,
    LatestWork,
    FullHeightDiv,
    Testimonials,
    PurpleDiv,
    
  }
};
</script>
