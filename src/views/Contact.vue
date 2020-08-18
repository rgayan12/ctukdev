<template>
  <div>
    <div class="dark-top">
      <whiteNavBar></whiteNavBar>
    </div>

    <div class="container margin-top-bottom-30px">
      <div class="row">
        <div class="col-md-6">
          <h1>Send us a Message</h1>
          <div class="row">
            <div class="col-md-12">
              <p>What's your name?</p>
              <div class="row">
                <div class="col-md-6">
                  <input type="text" placeholder="First Name" />
                </div>
                <div class="col-md-6">
                  <input type="text" placeholder="Last Name" />
                </div>
              </div>
            </div>

            <div class="col-md-12">
              <p>What's your email?</p>
              <input type="text" placeholder="example@email.com" />
            </div>
            <div class="col-md-12">
              <p>What's your phone number?</p>
              <input type="text" placeholder="07000 00000" />
            </div>
            <div class="col-md-12">
              <p>What's your message?</p>
              <textarea placeholder="Write us a message"></textarea>
            </div>
            <div class="col-md-12 text-center margin-top-bottom-30px">
              <button class="button "><span>Send Message</span></button>
            </div>
          </div>
        </div>

        <div class="col-md-6">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2481.539424909829!2d-0.49438168422882145!3d51.540006979640495!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48766e6a2bb99a39%3A0x595dade47be30757!2sConsider%20This%20UK!5e0!3m2!1sen!2suk!4v1589901691036!5m2!1sen!2suk"
            width="100%"
            height="450"
            frameborder="0"
            style="border:0;"
            allowfullscreen=""
            aria-hidden="false"
            tabindex="0"
          ></iframe>
        </div>
      </div>
    </div>

    <PurpleHeightDiv></PurpleHeightDiv>
  </div>
</template>
<style>
.dark-top {
  background-color: #4a4a4a;
  height: 150px;
}

input,
textarea {
  display: block;
  width: 100%;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  line-height: 1.5;
  color: #495057;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #ced4da;
  border-radius: 0.25rem;
  box-sizing: border-box;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}

.button {
  border-radius: 4px;
  background-color: #6c2482;
  border: none;
  color: #ffffff;
  text-align: center;
  font-size: 20px;
  padding: 20px 40px 20px 40px;
  transition: all 0.5s;
  cursor: pointer;
  margin: 5px;
}

.button span {
  cursor: pointer;
  display: inline-block;
  position: relative;
  transition: 0.5s;
}

.button span:after {
  content: "\00bb";
  position: absolute;
  opacity: 0;
  top: 0;
  right: -20px;
  transition: 0.5s;
}

.button:hover span {
  padding-right: 25px;
}

.button:hover span:after {
  opacity: 1;
  right: 0;
}
</style>
<script>
import whiteNavBar from "@/components/WhiteNavBar.vue";
import PurpleHeightDiv from "@/components/PurpleHeightDiv.vue";

export default {
  name: "contact",
  components: {
    whiteNavBar,
    PurpleHeightDiv
  }
};
</script>
