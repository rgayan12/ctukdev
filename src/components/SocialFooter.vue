<template>
    <div>
        <!--Bottom Footer-->
		<div class="bottom section-padding">
			<div class="container">
				<div class="row text-center">
					<div class="col-md-12">
						<div class="copyright">
							<p>© <span>2003 - 2019</span> <a href="#" class="transition">Consider This UK</a> All rights reserved.</p>
						</div>
					</div>
                    <div class="col-md-12">

                         <ul class="social">
                               <li>
                                <a href="#"><i class="fa fa-facebook fa-2x"></i></a>
                           </li>
                          
                           <li>
                                <a href="#"><i class="fa fa-github fa-2x"></i></a>
                           </li>
                            
                           <li>
                                <a href="#"><i class="fa fa-linkedin fa-2x"></i></a>
                           </li>
                           
                           <li>
                                <a href="#"><i class="fa fa-tumblr fa-2x"></i></a>
                           </li>
                            
                           <li>
                                <a href="#"><i class="fa fa-google-plus fa-2x"></i></a>
                          </li>
                         </ul>
                    </div>
				</div>
			</div>
		</div>
<!--Bottom Footer-->
    </div>
</template>
<style>
a:hover{
    text-decoration:none;
}
.section-padding {
	padding: 60px 0;
}
.bottom {
    background-color: #2e2e2e
}
.bottom .copyright {
    color: #e5e5e5;
    font-weight: 600;
}
.copyright a {
    color: #f2ff49;
    margin-left: 3px;
    padding-right: 3px;
}
.bottom p {
    margin-bottom: 0;
    line-height: 50px;
    font-size: 16px;
    font-weight: 400;
}
.copyright p span {
    color: #d1caca;
}
.bottom .copyright p, .bottom .copyright a:hover{
    color: #6c6d83;
}
.text-center{

        text-align: center;
}

.social li{
    display: inline;
}

.social {
    list-style: none;
}

.fa{
    color:#9c9c9c;
    margin-right: 15px;
    font-size:14px;
}
</style>
<script>
export default {
    name: 'socialfooter'
}
</script>