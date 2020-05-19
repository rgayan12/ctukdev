<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view />
    -->

    <!--
 <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    -->
    <transition name="fade" mode="out-in">
      <router-view />
    </transition>

    <Footer-component></Footer-component>
    <SocialFooter></SocialFooter>
  </div>
</template>

<style lang="scss">
@import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.0/css/all.min.css");
@import url("https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,500;0,600;0,700;0,900;1,900&display=swap");

html {
  width: 100%;
  font-size: 18px;
  color: #333;
}

body {
  margin: 0;
  height: 100%;
  height: 100vh;
  width: 100%;
  font-family: "Poppins", sans-serif;
}

#app {
  height: 100%;
  height: 100vh;
  width: 100%;
  line-height: 1.5;
}

.fade-enter-active,
.fade-leave-active {
  transition-duration: 0.1s;
  transition-property: opacity;
  transition-timing-function: ease;
}

.fade-enter,
.fade-leave-active {
  opacity: 0;
}

.text-white{
  color: #fff;
}

.margin-top-bottom-30px{
  margin-top: 30px;
  margin-bottom: 30px;
}

</style>

<script>
import FooterComponent from "@/components/Footer.vue";
import SocialFooter from "@/components/SocialFooter.vue";

export default {
  name: "app",
  components: {
    FooterComponent,
    SocialFooter
  }
};
</script>
