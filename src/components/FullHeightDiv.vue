<template>
  <div>
    <div class="full-height overlay grey">
      <div class="container d-flex justify-content-center">
        <div class="div-text">
          <h2>{{ title }}</h2>
          <p>{{ summary }}</p>

          <div class="right-text" v-if="link == true">
            <router-link to="./about">Get to know us</router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>


@media (min-width: 786px) {
  .full-height {
     padding: 100px !important;
  }

 .right-text a{
    font-size: 1.5rem;
 }

}

.full-height {
  height: 80vh;
  background: url("/images/tobias-mrzyk-iuqmGmst5Po-unsplash.jpg");
  background-size: cover;
  padding-top: 2rem;
  padding-bottom: 2rem;

}
.div-text {
  position: relative;
  max-width: 80%;
  z-index: 100;
  h2 {
    color: #fff;
    font-size: 1.9rem;
    border-bottom: 8px solid #fff;
  }
  p {
    color: #fff;
    font-size: 1.5rem;
  }
  a {
    color: #fff;
  }
  .right-text {
    margin-top: 50px;
    text-align: right;
  }
}
.overlay {
  position: relative;
  z-index: 5;
}

.overlay:after {
  position: absolute;
  content: "";
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
}

.overlay:after {
  opacity: 0.8;
}

.grey:after {
  background-color: #2e2e2e;
}

@media (max-width: 786px) {
  .full-height {
    height: 100% !important;
  }

  .div-text p{
      font-size: 1rem;
  }
}

</style>
<script>
export default {
  name: "FullHeightDiv",
  props: {
    title: String,
    summary: String,
    link: Boolean
  }
};
</script>
