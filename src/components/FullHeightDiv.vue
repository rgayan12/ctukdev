<template>
    <div>
            <div class="full-height overlay grey">
                <div class="container">
                <div class="div-text">
                    <h2>{{title}}</h2>
                    <p> {{summary}} </p>
                    <div class="right-text">
                        <a href="#">Learn more about us</a>
                    </div> 
                </div>
                </div>
            </div>
    </div>
</template>
<style lang="scss">
    .full-height{
        height: 80vh;
        background: url('/images/greybackground.png');
        padding: 50px
    }
    .div-text{
        position: relative;
        max-width: 500px;
        z-index: 100;
        h2{
           color: #fff; 
           font-size: 1.9rem;
           border-bottom: 8px solid #fff;    
        }
        p{
            color: #fff;
            font-size: 1.5rem;
        }
        a{
            color: #fff;
        }
    .right-text{
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
        content:"";
        top:0;
        left:0;
        width:100%;
        height:100%;
        opacity:0;
    }

    .overlay:after  {
        opacity: .8;
    }

    .grey:after {
        background-color: #2e2e2e;
    }
</style>
<script>
export default {
    name: 'FullHeightDiv',
    props: {
        title: String,
        summary: String
    }
}
</script>