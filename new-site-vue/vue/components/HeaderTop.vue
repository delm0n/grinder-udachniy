<template>
  <div class="header-top-test" :class="{ 'header-top-test--scroll': scroll }">
    <div class="container">
      <div class="header-top-test__wrap">
        <div class="header-top-test__logo">
          <my-image
            class="logo"
            :floder="'src'"
            :imgName="'logo'"
            :alt="'helicon'"
            :mobile="false"
            :lazyLoad="false"
          />
          <p>
            Официальный сайт <br />
            производителя
          </p>
        </div>

        <div class="header-top-test__nav">
          <ul
            ref="menu"
            class="menu-list"
            v-bind:class="{ 'menu-list--open': burger }"
          >
            <li v-for="(item, index) in navigations" v-bind:key="index">
              <p
                v-on:click="scrollToSection(item.selector)"
                v-text="item.name"
              ></p>
            </li>

            <li class="pdf">
              <my-image
                class="pdf-icon"
                :floder="'src'"
                :imgName="'pdf-icon'"
                :alt="'#'"
                :mobile="false"
                :lazyLoad="false"
              />
              <a download href="/uploadupdate/instruction.pdf">Инструкция</a>
            </li>
          </ul>
        </div>

        <div class="header-top-test__contact">
          <button class="header-button button" @click="showModal()">
            Заказать
          </button>

          <!-- <div class="header-top-test__contact-block">
            <a href="tel:88002505932" class="header-top-test__contact-phone"
              >8 800 250 59 32</a
            >

            <div
              class="header-top-test__contact-button"
              @click="openModalCall()"
            >
              Заказать звонок
            </div>
          </div> -->

          <div class="mobile-phone" @click="openModalCall()">
            <my-image
              :floder="'src'"
              :imgName="'mobile-phone'"
              :alt="'#'"
              :mobile="false"
              :lazyLoad="false"
            />
          </div>

          <div
            class="burger-container"
            :class="{ 'burger-container--open': burger }"
            @click="burger = !burger"
          >
            <div class="burger" v-bind:class="{ 'burger--open': burger }">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
import MyImage from "../UI/MyImage.vue";

export default {
  data() {
    return {
      scroll: false,
      burger: false,
    };
  },
  components: { MyImage },
  props: {
    navigations: Object,
    refHeader: String,
  },
  computed: mapGetters(["getPhone"]),
  created() {
    window.addEventListener("scroll", () => {
      this.scroll = window.pageYOffset < 30 ? false : true;
    });
  },

  methods: {
    scrollToSection(selector) {
      this.gsap.to(window, {
        duration: 1.5,
        // добавить в +
        scrollTo: { y: selector },

        // scrollTo:
        //   document.querySelector(selector).offsetTop -
        //   document.querySelector(selector).offsetHeight,
      });
      this.burger = false;
    },

    ...mapMutations(["openModalSuccessManager", "changeUserRassrochka"]),

    openModalCall() {
      this.openModalSuccessManager();
      setTimeout(() => {
        Fancybox.show([
          {
            src: this.refHeader,
          },
        ]);
      }, 10);
    },

    showModal() {
      this.changeUserRassrochka(false);

      setTimeout(() => {
        Fancybox.show([
          {
            src: "#modal-order",
          },
        ]);
      }, 10);
    },
  },
};
</script>

<style lang="scss">
@import "../../scss/_global.scss";

@mixin flex-center-x($gap) {
  display: flex;
  align-items: center;
  column-gap: $gap;
}

@mixin mobile-button() {
  cursor: pointer;

  @media (min-width: 993px) {
    height: 61px;
    width: 61px;
  }

  height: 44px;
  width: 44px;
  background: #2362b1;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 20;

  @media (max-width: 576px) {
    width: 32px;
    height: 32px;
  }
}

.header-top-test {
  position: fixed;
  background-color: #fff;
  width: 100%;
  border-bottom: 1px solid #e1e1e1;
  transition: all 0.4s ease-in-out;

  z-index: 20;
  top: 0;
  left: 50%;
  transform: translateX(-50%);

  &--scroll {
    border-bottom: 1px solid #e1e1e1;
    background: rgba(255, 255, 255, 0.7);
    backdrop-filter: blur(4px);
  }

  &__wrap {
    display: flex;
    align-items: center;
    column-gap: 10px;
    justify-content: space-between;
    height: 100px;
    position: relative;
    @media (max-width: 1366px) {
      height: 91px;
    }
    @media (max-width: 992px) {
      height: 81px;
    }
    @media (max-width: 768px) {
      height: 71px;
    }
    @media (max-width: 576px) {
      height: 51px;
    }
  }

  &__logo {
    @include flex-center-x(20px);

    @media (max-width: 768px) {
      gap: 10px;

      svg {
        width: 34px;
      }
    }

    p {
      white-space: nowrap;
      position: relative;
      color: #292929;
      font-family: "Inter";
      font-size: 14px;
      font-style: normal;
      font-weight: 200;
      line-height: 21px;

      @media (max-width: 1580px) {
        display: none;
      }

      @media (max-width: 1366px) and (min-width: 769px) {
        display: block;
      }
    }

    .logo {
      max-width: 215px;
      @media (max-width: 992px) {
        max-width: 189px;
      }

      @media (max-width: 768px) {
        max-width: 166px;
      }

      @media (max-width: 576px) {
        max-width: 130px;
      }

      @media (max-width: 375px) {
        max-width: 95px;
      }
    }
  }

  &__contact {
    display: flex;
    align-items: center;
    gap: 30px;
    position: relative;
    z-index: 20;

    gap: 20px;
    flex-direction: row-reverse;

    @media (max-width: 1366px) {
      flex-direction: row;
      gap: 5px;
    }

    // @media (max-width: 768px) {
    //   gap: 10px;
    // }

    &-block {
      position: relative;
      z-index: 10;
      @media (max-width: 1580px) {
        display: none;
      }
    }

    .mobile-phone {
      // display: none;
      // @media (max-width: 1366px) {
      flex-shrink: 0;
      padding: 9px;
      @include mobile-button();

      img {
        max-width: 100%;
      }
      // }

      @media (max-width: 576px) {
        padding: 5px;
        // display: none;
      }
    }

    &-phone {
      display: block;
      white-space: nowrap;
      transition: all 0.4s;

      color: #646464;
      text-align: right;
      font-family: "Gilroy";
      font-size: 32px;
      font-style: normal;
      font-weight: 600;
      line-height: normal;
      letter-spacing: 0.32px;

      &:hover {
        color: #2462b1;
      }

      // @media (max-width: 1580px) {
      //   display: none;
      // }

      @media (max-width: 768px) {
        font-size: 26px;
        padding: 10px 0 0px;
      }
    }

    &-button {
      cursor: pointer;
      text-align: right;
      color: #292929;
      font-family: "Inter";
      font-size: 18px;
      font-style: normal;
      font-weight: 300;
      line-height: normal;
      letter-spacing: 0.18px;
      text-decoration-line: underline;

      // @media (max-width: 1580px) {
      //   margin-top: 5px;
      //   display: none;
      // }

      @media (max-width: 768px) {
        font-size: 15px;
      }
    }

    .header-button {
      // display: none;
      padding: 15px 25px;
      // @media (max-width: 1580px) {

      //   display: block;
      // }

      // @media (max-width: 1366px) {
      //   margin-right: 15px;
      // }

      @media (max-width: 1366px) {
        display: none;
      }

      // @media (max-width: 992px) {
      //   padding: 10px 25px;
      //   font-size: 24px;
      //   font-weight: 600;
      // }

      // @media (max-width: 576px) {
      //   font-size: 14px;
      //   line-height: 18px;
      //   margin-right: 0;
      //   padding: 8px 15px;
      // }
    }
  }

  &__nav {
    .menu-list {
      @include flex-center-x(30px);
      justify-content: center;

      @media (max-width: 1440px) {
        gap: 20px;
      }

      @media (max-width: 1366px) {
        flex-direction: column;
        align-items: center;
        gap: 10px;
        position: absolute;

        z-index: 10;
        width: 100%;
        right: 0px;
        transform: translateY(-100%);
        opacity: 0;
        transition: transform 0.45s 0.1s, opacity 0.25s;
        max-width: 320px;
        // background: #f4f4f4;
        // border-radius: 0 0 10px 10px;
        // box-shadow: 0 4px 10px rgb(0 0 0 / 10%);
        padding: 30px 0;

        border-radius: 0px 0px 10px 10px;
        // opacity: 0.95;
        background: #fff;
        box-shadow: 0px 4px 14px 0px rgba(0, 0, 0, 0.1);
        backdrop-filter: blur(2px);

        top: 101px;
        @media (max-width: 1366px) {
          top: 92px;
        }
        @media (max-width: 992px) {
          top: 82px;
        }
        @media (max-width: 768px) {
          top: 72px;
        }
        @media (max-width: 576px) {
          top: 52px;
        }
      }

      @media (max-width: 768px) {
        // top: 70px;
        max-width: 270px;
        padding: 20px 0;
      }

      &--open {
        transform: translateY(0px);
        opacity: 0.95;
        transition: transform 0.4s, opacity 0.3s 0.2s;
      }

      li:not(.mobile-phone) {
        p,
        a {
          transition: all 0.4s;
          cursor: pointer;
          white-space: nowrap;
          color: #646464;
          font-family: "Inter";
          font-size: 18px;
          font-style: normal;
          font-weight: 400;
          line-height: 25px;

          &:hover {
            color: #047dd9;
          }

          // @media (max-width: 1580px) {
          //   padding: 5px 0;
          // }

          @media (max-width: 768px) {
            font-size: 16px;
            padding: 0;
          }
        }

        &.pdf {
          display: flex;
          gap: 5px;
          align-items: center;
        }
      }

      // .mobile-phone {
      //   display: none;
      //   @media (max-width: 1580px) {
      //     display: block;

      //     .header-top__contact-phone,
      //     .header-top__contact-button {
      //       display: block;
      //       text-align: center;
      //     }
      //   }
      // }
    }
  }

  .burger {
    &-container {
      display: none;
      @media (max-width: 1366px) {
        flex-shrink: 0;
        position: relative;
        @include mobile-button();
      }
    }

    position: relative;
    width: 40px;
    height: 20px;
    @media (max-width: 992px) {
      height: 14px;
    }
    @media (max-width: 576px) {
      height: 12px;
    }
    span {
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      width: 30.5px;
      height: 3px;
      border-radius: 10px;
      background-color: #fff;
      transition: 0.4s all;

      @media (max-width: 992px) {
        width: 22px;
        height: 2px;
      }

      @media (max-width: 576px) {
        height: 1.5px;
        width: 16px;
      }

      &:nth-child(1) {
        top: 1px;
      }

      &:nth-child(2),
      &:nth-child(3) {
        top: 50%;
        transform: translateX(-50%) translateY(-50%);
      }

      &:nth-child(4) {
        top: calc(100% - 1px);
        transform: translateX(-50%) translateY(-50%);
      }
    }

    &--open {
      span {
        background-color: #fff;
        &:nth-child(1) {
          transition: 0.2s all;
          opacity: 0;
        }

        &:nth-child(2) {
          transform: translateX(-50%) translateY(-50%) rotate(45deg);

          @media (max-width: 576px) {
            width: 19px;
          }
        }

        &:nth-child(3) {
          transform: translateX(-50%) translateY(-50%) rotate(-45deg);

          @media (max-width: 576px) {
            width: 19px;
          }
        }

        &:nth-child(4) {
          transition: 0.2s all;
          opacity: 0;
        }
      }
    }
  }
}
</style>
