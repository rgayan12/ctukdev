<template>
  <div>
    <div class="testimonials p-80">
      <div class="container">
        <h2 class="text-left">Don't just take our word for it</h2>
        <div class="row">
          <div class="col-md-4 col-lg-3">
            <knob-control
              :min="0"
              :max="5"
              :stroke-width="10"
              :responsive="true"
              v-model="semitone"
              primaryColor="#4F1A6F"
              readonly="true"
            ></knob-control>
          </div>
          <div class="col-md-8 col-lg-9">
            <div class="testimonial-desc">
              <div class="text-description">
                <p class="testimonial-text">
                  “A diversely talented team of great people who are a pleasure
                  to work with. It's reassuring to have Consider This on hand."
                </p>
                <div class="author">
                  <p>
                    <strong>Imogen Barber</strong><br />Head of Marketing &
                    Communication
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
h2{
     font-size: 1.9rem;
}
.p-80{
   padding-top: 80px;
   padding-bottom: 80px;
}
.testimonials {
  padding-left: 50px;
}
.testimonial-desc {
  font-weight: 1.5rem;
}
.author {
  text-align: left;
}

.testimonial-text {
  font-size: 1.4rem;
}
</style>
<script>
import KnobControl from "vue-knob-control";

export default {
  name: "testimonials",
  components: {
    KnobControl
  },
  data() {
    return {
      semitone: 4.5
    };
  }
};
</script>
