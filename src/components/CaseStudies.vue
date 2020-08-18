<template>
  <div>
    <div class="container ">
      <h2>Case Studies</h2>
      <div class="row text-left">
        <div
          class="col-md-6 col-xl-6"
          v-for="item in casestudies"
          v-bind:key="item.id"
        >
          <div class="card">
            <div class="card-body">
              <router-link
                :to="{ name: 'CaseStudy', params: { id: item.slug } }"
                ><h5>{{ item.title }}</h5></router-link
              >
              <p>{{ item.case_study | strippedContent | stringLimit }}...</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.text-left {
  text-align: left;
}
.card {
  position: relative;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-direction: column;
  flex-direction: column;
  min-width: 0;
  word-wrap: break-word;
  background-color: #fff;
  background-clip: border-box;
  border: 1px solid rgba(0, 0, 0, 0.125);
  border-radius: 0.25rem;
  font-weight: 400;
  border: 0;
  -webkit-box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16),
    0 2px 10px 0 rgba(0, 0, 0, 0.12);
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);
}

.card-body {
  padding: 1.25rem;
}
</style>
<script>
export default {
  name: "casestudies",
  data() {
    return {
      casestudies: ""
    };
  },
  mounted() {
    this.fetchWork();
  },
  methods: {
    fetchWork() {
      this.$http
        .get(
          "http://twinkle.consider-this.co.uk/ctuk-backend/items/case_studies?fields=title,client_name,case_study,slug&filter[status]=published"
        )
        .then(response => {
          this.casestudies = response.data.data;
        })
        .catch(function(error) {
          console.log(error);
        });
    }
  },
  filters: {
    strippedContent: function(string) {
      return string.replace(/<\/?[^>]+>/gi, " ");
    },
    stringLimit: function(string) {
      return string.substring(0, 200, "...");
    }
  }
};
</script>
