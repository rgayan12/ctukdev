<template>
  <div>
    <agile v-if="mainslides.length" :nav-buttons="false">
      <div v-for="item in mainslides" v-bind:key="item.id">
        <div class="slide" :class="item.background_colour">
          <div class="row">
            <div class="column">
              <img
                :src="
                  'http://twinkle.consider-this.co.uk/uploads/ctuk-backend/originals/' +
                    item.main_image.filename_disk
                "
                alt="header image"
                class="img-fluid max-width-60"
              />
            </div>
            <div class="column">
              <h1 v-html="item.message"></h1>
            </div>
          </div>
        </div>
      </div>
    </agile>
  </div>
</template>

<style lang="scss">
.agile__dots {
  bottom: 10px;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  flex-direction: column;
  right: 30px;
  position: absolute;
}
.agile__dot {
  margin: 5px 0;
}
.agile__dot button {
  background-color: transparent;
  border: 1px solid #fff;
  cursor: pointer;
  display: block;
  height: 10px;
  font-size: 0;
  line-height: 0;
  margin: 0;
  padding: 0;
  -webkit-transition-duration: 0.3s;
  transition-duration: 0.3s;
  width: 10px;
}
.agile__dot--current button,
.agile__dot:hover button {
  background-color: #fff;
}

.slide {
  align-items: center;
  color: #fff;
  display: flex;
  height: 100vh;
  justify-content: center;
  -o-object-fit: cover;
  object-fit: cover;

  h3 {
    font-size: 32px;
    font-weight: 300;
  }
}

.slide-1 {
  background-color: #84ab98;
}
.slide-2 {
  background-color: #f1c40f;
}

.agile {
  margin-top: -70px;
  z-index: 2;

  h1 {
    font-size: 3rem;
    text-transform: uppercase;
    line-height: 1;
  }
  .spotlight-text {
    font-size: 6rem;
  }
  .spotlight-text::after {
    content: "\a";
    white-space: pre;
  }
}

.row {
  display: flex;
  align-items: center;
  justify-content: center;
}
.column {
  flex: 50%;
  align-items: center;
}
.column img {
  display: block;
  width: 100%;
  max-width: 600px; /*actual image width*/
  height: auto; /* maintain aspect ratio*/
  margin: auto; /*optional centering of image*/
}

.green {
  background-color: #84ab98;
}
.purple {
  background-color: #6c2482;
}
.light-yellow {
  background-color: #c4a96c;
}
.orange {
  background-color: #ee7800;
}
</style>

<script>
import { VueAgile } from "vue-agile";
import axios from "axios";

export default {
  name: "main-slider",
  components: {
    agile: VueAgile
  },
  data() {
    return {
      mainslides: []
    };
  },
  created() {
    this.fetchSlides();
  },
  methods: {
    fetchSlides() {
      axios
        .get(
          "http://twinkle.consider-this.co.uk/ctuk-backend/items/headers?fields=main_image.filename_disk,name,message,background_colour,main_image.title&filter[status]=published"
        )
        .then(response => {
          this.mainslides = response.data.data;
        })
        .catch(function(error) {
          console.log(error);
        });
    }
  }
};
</script>
