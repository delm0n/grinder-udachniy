<template>
  <div class="header-top" :class="{ 'header-top--scroll': scroll }">
    <div class="container">
      <div class="header-top__wrap">
        <div class="header-top__logo">
          <my-image
            class="logo"
            :floder="'src'"
            :imgName="'logo'"
            :alt="'helicon'"
            :mobile="false"
            :lazyLoad="false"
          />
          <p :style="scroll ? 'width: 0;' : ''">
            Официальный сайт <br />
            производителя
          </p>
        </div>

        <div class="header-top__nav">
          <ul :class="['menu-list', burger ? 'menu-list--open' : '']">
            <li v-for="(item, index) in navigations" :key="index">
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

        <header-top-v-2-contact
          @burger-change="burgerChange"
          class="header-top__contact"
          :scroll="scroll"
          :refHeader="refHeader"
          :burger="burger"
        />
      </div>
    </div>
  </div>
</template>

<script>
import MyImage from "../UI/MyImage.vue";
import HeaderTopV2Contact from "./HeaderTopV2Contact.vue";

export default {
  data() {
    return {
      scroll: false,
      burger: false,
    };
  },
  components: { MyImage, HeaderTopV2Contact },
  props: {
    navigations: Object,
    refHeader: String,
  },

  created() {
    window.addEventListener("scroll", () => {
      this.scroll = window.pageYOffset < 120 ? false : true;
    });
  },

  methods: {
    scrollToSection(selector) {
      this.gsap.to(window, {
        // duration: 1.5,
        // добавить в +
        scrollTo: { y: selector },

        // scrollTo:
        //   document.querySelector(selector).offsetTop -
        //   document.querySelector(selector).offsetHeight,
      });
      this.burger = false;
    },

    burgerChange(bool) {
      this.burger = bool;
    },
  },
};
</script>


<style lang="scss">
@import "../../scss/_global.scss";

.header-top {
  position: fixed;
  background-color: #fff;
  width: 100%;
  border-bottom: 1px solid #e1e1e1;
  transition: all 0.4s ease-in-out;

  z-index: 20;
  top: 0;
  left: 50%;
  transform: translateX(-50%);

  @media (min-width: 1367px) {
    overflow: hidden;
  }

  &__wrap {
    display: flex;
    align-items: center;
    column-gap: 30px;
    justify-content: space-between;
    height: 100px;
    position: relative;
    height: 91px;

    @media (max-width: 992px) {
      height: 81px;
    }

    @media (max-width: 768px) {
      height: 71px;
      gap: 10px;
    }

    @media (max-width: 576px) {
      height: 51px;
    }
  }

  &__logo {
    display: flex;
    align-items: center;
    column-gap: 20px;
    flex-shrink: 1;

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
      width: 130px;
      transition: width 0.4s;
      overflow: hidden;
      will-change: width;

      @media (max-width: 1580px) and (min-width: 1367px) {
        display: none;
      }

      @media (max-width: 768px) {
        display: none;
      }
    }

    .logo {
      max-width: 215px;
      width: 100%;
      @media (max-width: 992px) {
        max-width: 189px;
      }

      @media (max-width: 768px) {
        max-width: 130px;
      }
      @media (max-width: 576px) {
        max-width: 95px;
      }
    }
  }

  &__nav {
    .menu-list {
      display: flex;
      align-items: center;
      gap: 30px;
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
        padding: 30px 0;
        border-radius: 0px 0px 10px 10px;
        background: #fff;
        box-shadow: 0px 4px 14px 0px rgba(0, 0, 0, 0.1);
        backdrop-filter: blur(2px);

        top: 91px;

        @media (max-width: 992px) {
          top: 81px;
        }

        @media (max-width: 768px) {
          top: 71px;
        }

        @media (max-width: 576px) {
          top: 51px;
        }
      }

      @media (max-width: 768px) {
        max-width: 270px;
        padding: 20px 0;
      }

      &--open {
        transform: translateY(0px);
        opacity: 0.95;
        transition: transform 0.4s, opacity 0.3s 0.2s;
      }

      li {
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

          @media (max-width: 768px) {
            font-size: 16px;
          }
        }

        &.pdf {
          display: flex;
          gap: 5px;
          align-items: center;
          .pdf-icon {
            flex-shrink: 0;
          }
        }
      }
    }
  }

  &__contact {
    position: relative;
    z-index: 10;
  }

  &--scroll {
    background-color: rgba(255, 255, 255, 0.7);
    backdrop-filter: blur(4px);
  }
}
</style>