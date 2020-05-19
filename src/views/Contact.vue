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
                                <h3>What's your name?</h3>
                                <div class="row">
                                    <div class="col-md-6"><input type="text" placeholder="First Name" /></div>
                                    <div class="col-md-6"><input type="text" placeholder="Last Name" /></div>
                                </div>
                            </div>
                            
                            <div class="col-md-12">
                                <h3>What's your email?</h3>
                                <input type="text" placeholder="example@email.com" />
                            </div>    
                            <div class="col-md-12">
                                <h3>What's your phone number?</h3>
                                <input type="text" placeholder="07000 00000" />
                            </div>   
                              <div class="col-md-12">
                                <h3>What's your message?</h3>
                                <textarea placeholder="Write us a message"></textarea>
                            </div>   
                             <div class="col-md-12 text-center">
                                <button>Send Message</button>
                            </div>   
                        </div>
                   </div>

                  <div class="col-md-6">
                      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2481.539424909829!2d-0.49438168422882145!3d51.540006979640495!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48766e6a2bb99a39%3A0x595dade47be30757!2sConsider%20This%20UK!5e0!3m2!1sen!2suk!4v1589901691036!5m2!1sen!2suk" width="100%" height="450" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
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

</style>
<script>
import whiteNavBar from "@/components/WhiteNavBar.vue";
import PurpleHeightDiv from "@/components/PurpleHeightDiv.vue";

export default {
    name: 'contact',
    components: {
        whiteNavBar,
        PurpleHeightDiv
    }
}
</script>