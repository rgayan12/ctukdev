<template>
  <section class="main-navbar-section">
    <vue-navigation-bar :options="navbarOptions">
      <!-- Custom Slot - Uncomment to use -->
      <!-- <template v-slot:custom-section>
            <div class="custom-section-content">
              <div class="input-group input-group-sm">
                <input
                  type="text"
                  class="form-control"
                  placeholder
                  aria-label="Example text with button addon"
                  aria-describedby="button-addon1"
                />
                <div class="input-group-append">
                  <button
                    class="btn btn-primary"
                    type="button"
                    id="button-addon1"
                  >
                    <i class="fa fa-search"></i>
                  </button>
                </div>
              </div>
            </div>
          </template> -->
    </vue-navigation-bar>
  </section>
</template>
<style lang="scss">
.code-text {
  background: #fff;
  border: 1px solid #ddd;
  padding: 10px 20px;
  border-radius: 4px;
  margin-bottom: 20px;
  text-align: center;
}

@media (min-width: 992px) {
  .code-text {
    margin-bottom: 0;
  }
}

.btn {
  text-transform: uppercase;
  font-weight: bold;
}

.github-corner:hover .octo-arm {
  animation: octocat-wave 560ms ease-in-out;
}
@keyframes octocat-wave {
  0%,
  100% {
    transform: rotate(0);
  }
  20%,
  60% {
    transform: rotate(-25deg);
  }
  40%,
  80% {
    transform: rotate(10deg);
  }
}
@media (max-width: 500px) {
  .github-corner:hover .octo-arm {
    animation: none;
  }
  .github-corner .octo-arm {
    animation: octocat-wave 560ms ease-in-out;
  }
}

.main-content-section {
  padding: 45px 0;
  background: #eee;
  height: 95vh;
}

//
// vue-navigation-bar customization below
//

.main-navbar-section {
  background: transparent;
  position: relative;
  z-index: 999;
}

.vnb-image {
  width: 100%;
  height: auto;
}

.vnb__brand-image-wrapper__link {
  position: absolute;
}

.vnb__brand-image-wrapper__link__image {
  max-height: 100%;
}

.vnb {
  //font-family: "Montserrat", sans-serif;
  background: transparent;

  .facebook-button,
  .twitter-button {
    background: #fff;
    padding: 10px;
    border-radius: 50px;
  }
  .facebook-button::after {
    color: #4f1a6f;
    font-family: "Font Awesome 5 Brands";
    font-weight: 900;
    content: "\f09a";
  }

  .twitter-button::after {
      content: '\f35a'; /* You should use \ and not /*/
    font-family: "Font Awesome 5 Brands"; /* This is the correct font-family*/
    font-style: normal;
    font-weight: normal;
    color: #4f1a6f;
   
  }
  .button-red {
    background: #ff3b30;

    &:hover {
      background: darken(#ff3b30, 10%);
    }
  }

  &__menu-options {
    &__option {
      &__link {
        color: #fff;
      }
      &__button {
        &__icon {
          svg {
            margin-top: -3px;
          }
        }
      }
    }
  }

  &__popup {
    &__bottom {
      &__menu-options {
        &__option {
          &__link {
            &__icon {
              svg {
                margin-top: -4px;
              }
            }
          }
        }
      }
    }
  }

  .custom-section-content {
    width: 100%;

    @media (min-width: 568px) {
      width: 50%;
    }

    @media (min-width: 992px) {
      width: 15%;
    }

    @media (min-width: 1200px) {
      width: 20%;
    }
  }
}
</style>
<script>
import VueNavigationBar from "vue-navigation-bar";
import "vue-navigation-bar/dist/vue-navigation-bar.css";

export default {
  name: "white-navbar",
  data() {
    return {
      navbarOptions: {
        elementId: "main-navbar",
        isUsingVueRouter: true,
        mobileBreakpoint: 992,
        brandImagePath: "./",
        brandImage: require("@/assets/logo.png"),
        brandImageAltText: "brand-image",
        collapseButtonImageOpen: require("vue-navigation-bar/src/assets/images/collapse-menu-dark.png"),
        collapseButtonImageClose: require("vue-navigation-bar/src/assets/images/times.png"),
        showBrandImageInMobilePopup: true,
        ariaLabelMainNav: "Main Navigation",
        tooltipAnimationType: "shift-away",
        menuOptionsRight: [
          {
            type: "link",
            text: "Work",
            path: "./work"
          },
          {
            type: "link",
            text: "About",
            path: "./about"
          },
          {
            type: "link",
            text: "What We Do",
            subMenuOptions: [
              {
                type: "link",
                text: "Customer Service",
                path: "./customer-service",
                iconLeft: '<i class="fa fa-user fa-fw"></i>'
              },
              {
                type: "link",
                text: "Accounting",
                path: "./accounting",
                iconLeft: '<i class="fa fa-star fa-fw"></i>'
              },
              {
                type: "hr"
              },
              {
                type: "link",
                text: "Reception",
                path: "./reception",
                iconLeft:
                  '<svg id="i-telephone" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="none" stroke="currentcolor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"> <path d="M3 12 C3 5 10 5 16 5 22 5 29 5 29 12 29 20 22 11 22 11 L10 11 C10 11 3 20 3 12 Z M11 14 C11 14 6 19 6 28 L26 28 C26 19 21 14 21 14 L11 14 Z" /> <circle cx="16" cy="21" r="4" /> </svg>'
              }
            ]
          },
          {
            type: "link",
            text: "Contact",
            path: "./contact"
          },
          {
            type: "button",
            text: "",
            path: "./signup",
            class: "facebook-button"
          },
          {
            type: "button",
            text: "",
            path: "./signup",
            class: "twitter-button"
          }
        ]
      }
    };
  },
  components: {
    VueNavigationBar
  }
};
</script>
