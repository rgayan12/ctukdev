<template>
<div>
        <div class="container-fluid">
            <div class="row">
                <div class="col-md-12 col-lg-12 col-xl-6" id="image-storage-div">
                    <svg class="svgs" ref="svgs"
                    xmlns:dc="http://purl.org/dc/elements/1.1/"
                    xmlns:cc="http://creativecommons.org/ns#"
                    xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
                    xmlns:svg="http://www.w3.org/2000/svg"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 246.92 246.92"
                 
                    xml:space="preserve"
                    id="svg2"
                    version="1.1"><defs
                      id="defs6" /><g
                      transform="matrix(1.3333333,0,0,-1.3333333,0,246.92)"
                      id="g10"><g
                        transform="scale(0.1)"
                        id="g12">
                        
                         <path
                          id="path14"
                          class="big-c"
                          ref="bigc"
                          style="fill:#392e91;fill-opacity:1;fill-rule:nonzero;stroke:none"
                          d="m 1103.39,1062.15 c 0,86.24 -78.38,146.97 -162.624,146.97 -186.18,0 -215.578,-158.73 -215.578,-299.827 0,-131.281 56.828,-266.504 197.929,-266.504 117.563,0 174.393,64.66 190.083,174.41 h 323.35 C 1405.2,542.852 1197.45,388.02 925.07,388.02 c -305.707,0 -533.015,207.73 -533.015,521.273 0,323.347 205.765,554.587 533.015,554.587 254.77,0 476.19,-135.23 501.67,-401.73 h -323.35" />
                          
                          <path
                          ref="outline"
                          id="path16"
                          class="outline"
                          style="fill:none;stroke:#231f20;stroke-width:200;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:1"
                          d="M 1751.92,925.953 C 1751.92,469.789 1382.12,100 925.961,100 469.793,100 100.004,469.789 100.004,925.953 c 0,456.157 369.789,825.957 825.957,825.957 456.159,0 825.959,-369.8 825.959,-825.957 z" /></g></g>
                          
                        </svg>
         
                </div>
               
                <div class="col-md-12 col-lg-12 col-xl-6 heading-text" ref="headingtext">
                    <div class="padding-md-30px">
                    <h1>Collaborating <span class="spotlight-text">Creatively</span>For 16 years</h1>
                    </div>
                </div>

            </div>
     
        </div>   
</div>
</template>

<style lang="scss" scoped>

   .svgs{
    box-shadow: 0 .5rem 1rem rgba(0,0,0,.15)!important;
    margin-top: -10%;
    width: 240px;
    max-width: 100%;
    overflow: visible;

}

.heading-text{

    h1{
        color: #333;
        font-size: 2rem;
    }

   
}


// Small devices (landscape phones, 576px and up)
@media (min-width: 576px) { 

     .svgs{
            width: 140px !important;
    }    
    .heading-text{
        
        h1{
            font-size: 2rem;
        }        
    } 

}

// Medium devices (tablets, 768px and up)
@media (min-width: 768px) {

    .svgs{
            width: 240px !important;
    }    
    .heading-text{
        
        h1{
            font-size: 2rem;
        }        
    }
}

// Large devices (desktops, 992px and up)
@media (min-width: 992px) { 

    .svgs{
            width: 250px !important;
    }    
    .heading-text{
            margin-top: 180px;
        
        h1{
            font-size: 4rem;
        }        
    }

 }

// Extra large devices (large desktops, 1200px and up)
@media (min-width: 1200px) {     
    
    .svgs{
            width: 300px !important;
    }    
    .heading-text{
        margin-top: 0;
        h1{
            color: #fff;
            font-size: 4rem;
        }        
    }
}


/*
.outline{
    opacity: 0;
}
*/
</style>


<script>

import gsap from "gsap";

export default {
    name: 'bigc',

    mounted() {

        const { bigc, svgs, headingtext } = this.$refs

        const tl = gsap.timeline();
 


       

        
   

        var mediaQuery = window.matchMedia("(min-width: 769px)");

        buildConditionalTween(mediaQuery);

        
        function buildConditionalTween(mediaQuery){
        
      


         if(mediaQuery.matches) {

                    tl.to(svgs,{duration:1, y:200, ease: "bounce", backgroundColor: "#000", borderRadius: "80%", border: "5px solid white"});
                    tl.to(svgs,{rotation: 360, duration:1.5, x:250, backgroundColor: "#fff", ease: "bounce" });

                    //tl.from(outline,{duration:1, y:1050, opacity:0, backgroundColor: "#fff", ease: "bounce" });

                    tl.from(bigc, {duration: 1,opacity:0, scale:0.3 ,ease: "back"});
                    //tl.to(".outline",{duration: 1, opacity: 1});
                    tl.from(headingtext,{duration:1, opacity:0, scale:0.7,color: '#FFFA72'});
         }

         else{

            tl.to(svgs,{duration:1, y:50, ease: "bounce", backgroundColor: "#000", borderRadius: "80%", border: "5px solid white"});
                    tl.to(svgs,{rotation: 360, duration:1.5, x:50, backgroundColor: "#fff", ease: "bounce" });

                    //tl.from(outline,{duration:1, y:1050, opacity:0, backgroundColor: "#fff", ease: "bounce" });
                    
                    tl.from(bigc, {duration: 1,opacity:0, scale:0.3 ,ease: "back"});
                    //tl.to(".outline",{duration: 1, opacity: 1});
                    tl.from(headingtext,{duration:1, opacity:0, scale:0.7,color: '#FFFA72'});
         }
        }

        // Listen to changes
        mediaQuery.addListener(buildConditionalTween);


  }

}
</script>