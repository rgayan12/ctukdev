<template>
  <div>
    <NavBar></NavBar>

    <section class="info-section">
      <div class="container">
        <div class="about">
          <h1>This is a portfolio page</h1>
          <p>
            For the first time ever, all performing arts schools and colleges
            can list all their information on one site for all their courses,
            events, auditions, open days and shows. Applying for performing arts
            courses can be very time consuming, and very expensive. Perform This
            allows applicants to fill in one application form that can be sent
            to all schools who use our ground-breaking Audition Management
            System.
          </p>
        </div>
      </div>
    </section>
  </div>
</template>
<style lang="scss">
.info-section {
  padding: 100px;
  margin-top: 20px;
}
</style>
<script>
import NavBar from "@/components/RegularNavBar.vue";
export default {
  components: {
    NavBar
  }
};
</script>
