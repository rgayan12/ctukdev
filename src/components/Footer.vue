<template>
  <div>
    <footer>
      <div class="container">
        <div class="row">
          <div class="col-lg-5 col-xl-4 col-md-5 col-sm-4 col-xs-12">
            <ul class="adress">
              <span>Consider This UK Limited</span>
              <li>
                <p>
                  Building 1, <br />
                  Chalfont Park, <br />
                  Chalfont St Peter <br />
                  Gerrads Cross, <br />
                  SL9 0BG
                </p>
              </li>
              <li>
                <p>
                  Tel: 01895 619 900 <br />
                  Email: hello@considerthisuk.com <br />
                  Web: considerthisuk.com
                </p>
              </li>
              <li>
                <p></p>
              </li>
            </ul>
          </div>

          <div class="col-xl-4 col-lg-4 col-md-4 col-sm-4 col-xs-12">
            <ul class="contact">
              <span>Terms of Business</span>
              <li>
                <a href="#">Terms and Conditions</a>
              </li>

              <li>
                <a href="#">Corporate Social Responsibility</a>
              </li>

              <li>
                <a href="#">Policies</a>
              </li>

              <li>
                <a href="#">Privacy Policy / Cookies</a>
              </li>

              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
          </div>

          <div class="col-xl-4 col-lg-3 col-md-4 col-sm-4 col-xs-12">
            <ul class="contact">
              <span>Join the Newsletter</span>
              <li>
                <a href="#">Terms and Conditions</a>
              </li>

              <li>
                <a href="#">Corporate Social Responsibility</a>
              </li>

              <li>
                <a href="#">Policies</a>
              </li>

              <li>
                <a href="#">Privacy Policy / Cookies</a>
              </li>

              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>
<style lang="css" scoped>
footer {
  background-color: #414141;
  padding: 50px 0px;
}

footer ul li {
  padding: 5px 0px;
}

.adress span,
.contact span,
.social span {
  color: #fff;
  font-weight: 800;
  padding-bottom: 10px;
  margin-bottom: 20px;
  display: block;
  text-transform: uppercase;
  font-size: 20px;
  letter-spacing: 3px;
}

.adress li p,
.contact li a,
.social li a {
  color: #fff;
  letter-spacing: 2px;
  text-decoration: none;
  font-size: 15px;
}

.social li {
  float: left;
}

.adress,
.contact,
.social {
  list-style: none;
}

.fa {
  color: #9c9c9c;
  margin-right: 15px;
  font-size: 14px;
}
</style>
<script>
export default {
  name: "footer"
};
</script>
