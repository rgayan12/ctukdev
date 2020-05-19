<template>
  <div>
    <whiteNavBar></whiteNavBar>

    <div class="full-height overlay grey">
      <div class="container">
        <div class="div-text">
          <h1>About Us</h1>
          <h4 v-html="page.content"></h4>

          <div class="right-text" v-if="link == true">
            <a href="#">Learn more about us</a>
          </div>
        </div>
      </div>
    </div>

    <section class="team-section">
      <div class="container" v-if="team.length">
        <div class="row">
          <div
            class="col-md-12 border-1 margin-bottom-20px"
            v-for="item in team"
            :key="item.id"
          >
            <div class="row">
              <div class="col-md-4 text-center name-block">
                <h1 class="first-letter-large">{{ item.name.charAt(0) }}</h1>
                <h2>{{ item.name }}</h2>
                <h4>{{ item.title }}</h4>
              </div>

              <div class="col-md-8">
                <div class="row col-md-12">
                  <p>{{ item.bio }}</p>
                </div>
                <div class="row text-center-bottom stats">
                  <div class="col-md-2 text-center right-ctuk-border hobby">
                    {{ item.hobby }} <span>Hobby</span>
                  </div>
                  <div class="col-md-2 text-center right-ctuk-border animal">
                    {{ item.animal }} <span>Animal</span>
                  </div>
                  <div class="col-md-2 text-center right-ctuk-border drink">
                    {{ item.drink }} <span>Drink</span>
                  </div>
                  <div class="col-md-2 text-center right-ctuk-border symbol">
                    <span v-html="item.symbol"></span> <br />
                    <span>Symbol</span>
                  </div>
                  <div class="col-md-2 text-center right-ctuk-border colour">
                    <div
                      class="colour-ball"
                      :style="'background-color:' + item.colour"
                    ></div>
                    <span> {{ item.colour }} </span>
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
@media (max-width: 786px) {
  .full-height {
    height: 100% !important;
  }
}

.full-height {
  margin-top: -180px;
  height: 100vh;
  background: url("/images/about.png");
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
    width: 60%;
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

.right-ctuk-border {
  border-right: 5px solid #6c2482;
  height: 4rem;
  line-height: 2rem;
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

export default {
  name: "about",

  data() {
    return {
      page: [],
      team: []
    };
  },
  components: {
    whiteNavBar
  },
  created() {
    this.fetchPage();
    this.fetchTeam();
  },
  methods: {
    fetchPage() {
      this.$http
        .get("http://twinkle.consider-this.co.uk/ctuk-backend/items/pages/1")
        .then(response => {
          this.page = response.data.data;
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    fetchTeam() {
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
    }
  }
};
</script>
