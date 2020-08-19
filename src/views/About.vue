<template>
  <div>
    <whiteNavBar></whiteNavBar>

    <div class="full-height overlay grey">
      <div class="container d-flex justify-content-center">
        <div class="div-text">
          <h4 v-html="page.content"></h4>
        </div>
      </div>
    </div>

    <section>
      <div class="container" style="margin-top:30px">
        <div class="row" v-html="page.body"></div>
      </div>
    </section>

    <section class="team-section">
      <h2 class="text-center large-text">Meet the Team</h2>
      <div class="container" v-if="team.length">
        <div class="row">
          <div
            class="col-md-6 border-0 margin-bottom-20px"
            v-for="item in team"
            :key="item.id"
          >
            <div class="card-container h-100">
              <div class="card-flip left-ctuk-border">
                <div class="card front">
                  <div class="row">
                    <div class="col-md-4 text-center name-block">
                      <h1 class="first-letter-large">
                        {{ item.name.charAt(0) }}
                      </h1>
                      <h2>{{ item.name }}</h2>
                      <h4>{{ item.title }}</h4>
                    </div>

                    <div class="col-md-8">
                      <div class="row col-md-12">
                        <p>{{ item.bio }}</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="card back">
                  <div class="row">
                    <div class="col-md-12 d-block d-md-none text-center">
                      <h3>
                        <u>{{ firstName(item.name) }}'s</u>
                      </h3>
                    </div>
                  </div>
                  <div class="row d-flex">
                    <div class="col-md-6 text-center  animal">
                      <p style="line-height:1;"><b> Fav Animal</b></p>
                      <p style="line-height:1;">{{ item.animal }}</p>
                    </div>

                    <div class="col-md-6 text-center drink">
                      <p style="line-height:1;"><b> Drink </b></p>
                      <p style="line-height:1;">{{ item.drink }}</p>
                    </div>

                    <div class="col-md-12 d-none d-md-block text-center">
                      <h2 class="p-0 m-0" :style="'color:' + item.colour">
                        <u>{{ firstName(item.name) }}'s</u>
                      </h2>
                    </div>

                    <div class="col-md-6 text-center symbol">
                      <p style="line-height:1;"><b> Symbol </b></p>
                      <p style="line-height:1;">{{ item.symbol }}</p>
                    </div>

                    <div class="col-md-6 text-center colour">
                      <p style="line-height:1;"><b> Colour </b></p>
                      <div
                        class="colour-ball"
                        :style="'background-color:' + item.colour"
                      ></div>
                      <small> {{ item.colour }} </small>
                    </div>
                  </div>
                  <div class="row d-flex">
                    <div class="col-md-12 text-center hobby">
                      <p style="line-height:1;"><b>Hobby</b></p>
                      <p style="line-height:1;">{{ item.hobby }}</p>
                    </div>
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
.card-container {
  display: grid;
  perspective: 700px;
}

.card-flip {
  display: grid;
  grid-template: 1fr / 1fr;
  grid-template-areas: "frontAndBack";
  transform-style: preserve-3d;
  transition: all 0.7s ease;
}

.card-flip,
.card-container {
  transform-style: preserve-3d;
  transition: all 0.7s ease;
}

.card-flip div {
  backface-visibility: hidden;
  transform-style: preserve-3d;
}

.front {
  grid-area: frontAndBack;
}

.back {
  grid-area: frontAndBack;
  transform: rotateY(-180deg);
}

.card-container:hover .card-flip {
  transform: rotateY(180deg);
}

.h-100 {
  height: 100%;
}

@media (max-width: 786px) {
  .full-height {
    height: 100% !important;
  }
}

.full-height {
  margin-top: -180px;
  //  height: 100vh;
  background: url("/images/tobias-mrzyk-iuqmGmst5Po-unsplash.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  padding: 50px;
}

.div-text {
  position: relative;
  margin-top: 150px;
  padding-top: 10px;
  max-width: 100%;
  width: 100%;
  z-index: 100;
  h2,
  h1 {
    color: #fff;
    font-size: 1.9rem;
    border-bottom: 2px solid #fff;
  }
  p,
  h4 {
    color: #fff;
    font-size: 1.3em;
  }
  a {
    color: #fff;
  }
  .right-text {
    margin-top: 50px;
    text-align: right;
  }
}

@media (min-width: 1200px) {
  .div-text {
    text-align: center;
    width: 70%;
  }

  .large-text {
    font-size: 3rem;
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

.margin-bottom-20px {
  margin-bottom: 20px;
}

.border-1 {
  border: 1px solid #2b2b2a;
}

.name-block {
  h1,
  h2,
  h4 {
    line-height: 1;
    margin: 20px;
  }
}

.first-letter-large {
  font-size: 7rem;
  margin: 0;
  color: #6c2482;
}

.team-section {
  padding-top: 20px;
  margin-top: 20px;
}

.symbol i {
  font-size: 30px;
  color: #6c2482;
}

.left-ctuk-border {
  border-left: 5px solid #6c2482;
}

.stats {
  margin-top: 20px;
  min-height: 30%;
}

.text-center-bottom {
  align-items: bottom;
}

.colour-ball {
  border-radius: 50%;
  width: 40px;
  height: 40px;
  margin: auto;
  margin-bottom: 5px;
}
</style>

<script>
import whiteNavBar from "@/components/WhiteNavBar.vue";
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';

export default {
  name: "about",

  data() {
    return {
      page: [],
      team: []
    };
  },
  components: {
    whiteNavBar, 
  },
  created() {
    this.fetchPage();
    this.fetchTeam();
  },
  methods: {
    fetchPage() {
      NProgress.start()
      this.$http
        .get("http://twinkle.consider-this.co.uk/ctuk-backend/items/pages/1")
        .then(response => {
          this.page = response.data.data;
        })
       
        .catch(function(error) {
          console.log(error);
        });
           NProgress.done();
    },
    fetchTeam() {
      NProgress.start()
      this.$http
        .get(
          "http://twinkle.consider-this.co.uk/ctuk-backend/items/team?filter[status]=published"
        )
        .then(response => {
          this.team = response.data.data;
        })
        .catch(function(error) {
          console.log(error);
        });
          NProgress.done();
    },
    firstName(fist_name) {
      return fist_name.split(" ")[0];
    }
  }
};
</script>
