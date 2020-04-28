<template>
  <div class="home">
    <!--<HelloWorld msg="Welcome to CTUK New Website" /> -->

    <MainSlider></MainSlider>

       <h2>Our Latest Work</h2>
        <LatestWork></LatestWork>
      <h3>See more of our work >>> </h3>

      <FullHeightDiv></FullHeightDiv>


   </div>
</template>

<script>
// @ is an alias to /src
//import HelloWorld from "@/components/HelloWorld.vue";
import MainSlider from "@/components/MainSlider.vue";
import LatestWork from "@/components/LatestWork.vue";
import FullHeightDiv from "@/components/FullHeightDiv.vue";



export default {
  name: "Home",
  components: {
  //  HelloWorld,
    MainSlider,
    LatestWork,
    FullHeightDiv
  }
};
</script>
