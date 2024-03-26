<template>
  <div :class="['contact-box', scroll ? 'scroll' : '']">
    <div class="contact-box__wrapper">
      <div class="contact-box__front-text contact-block">
        <a href="tel:88002505932" class="contact-phone">8 800 250 59 32</a>

        <div class="contact-button" @click="openModalCall()">
          Заказать звонок
        </div>
      </div>

      <div class="contact-box__bottom-text button-block">
        <div class="phone-burger-group">
          <div class="button-phone" @click="openModalCall()">
            <my-image
              :floder="'src'"
              :imgName="'mobile-phone-v2'"
              :alt="'#'"
              :mobile="false"
              :lazyLoad="false"
            />
          </div>

          <div
            class="burger-container"
            @click="$emit('burger-change', !burger)"
          >
            <div class="burger" :class="{ 'burger--open': burger }">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>
        <div :class="['button-header-container', !scroll ? 'scroll' : '']">
          <button class="button-header button" @click="showModal()">
            <p>Заказать</p>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import MyImage from "../UI/MyImage.vue";
import { mapGetters, mapMutations } from "vuex";

export default {
  computed: mapGetters(["getPhone"]),
  components: { MyImage },
  props: {
    scroll: Boolean,
    burger: Boolean,
    refHeader: String,
  },

  methods: {
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

  @media (max-width: 768px) {
    width: 34px;
    height: 34px;
  }

  @media (max-width: 576px) {
    width: 27px;
    height: 27px;
  }
}

.contact-box {
  @media (min-width: 1367px) {
    margin-left: 30px;
    position: relative;
    z-index: 1;
    display: inline-flex;
    line-height: 1;
    text-decoration: none;
    perspective: 1000px;

    &.scroll {
      .contact-box__wrapper {
        transform: rotateX(90deg);
      }

      .contact-box__front-text {
        opacity: 0;
      }

      .contact-box__bottom-text {
        opacity: 1;
      }
    }

    &__wrapper {
      width: 100%;
      transform-origin: 50% 50%;
      transform-style: preserve-3d;
      will-change: transform;
      transition: transform 0.4s ease-in-out;
    }

    &__front-text {
      transition: all 0.2s 0.1s;
      width: 100%;
      -webkit-backface-visibility: hidden;
      backface-visibility: hidden;
    }

    &__bottom-text {
      transition: all 0.2s 0.1s;
      position: absolute;
      z-index: 1;
      top: 100%;
      right: 0;
      opacity: 0;
      transform: rotateX(-90deg);
    }
  }

  .contact-block {
    @media (max-width: 1366px) {
      display: none;
    }

    .contact-phone {
      display: block;
      white-space: nowrap;
      transition: all 0.4s;
      padding-left: 35px;
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

    .contact-button {
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

      @media (max-width: 768px) {
        font-size: 15px;
      }
    }
  }

  .button-block {
    display: flex;
    gap: 20px;
    align-items: center;

    @media (max-width: 1440px) {
      gap: 10px;
    }

    @media (max-width: 1366px) {
      gap: 0px;
      flex-direction: row-reverse;
    }

    .phone-burger-group {
      @media (max-width: 1366px) {
        gap: 10px;
        display: flex;
        align-items: center;
      }

      @media (max-width: 768px) {
        gap: 5px;
      }
    }

    .button-phone {
      flex-shrink: 0;
      padding: 12px;
      @include mobile-button();

      img {
        max-width: 100%;
      }

      @media (max-width: 768px) {
        padding: 7px;
      }
    }

    .button-header {
      padding: 15px 25px;

      @media (max-width: 992px) {
        padding: 10px 25px;
        font-size: 24px;
        font-weight: 600;
      }

      @media (max-width: 768px) {
        padding: 8px 10px;
        font-size: 16px;
        line-height: 18px;
      }

      @media (max-width: 576px) {
        padding: 5px 10px;
        font-size: 14px;
        line-height: 17px;
      }

      &-container {
        @media (min-width: 1367px) {
          width: auto;
          opacity: 1;
        }

        @media (max-width: 1366px) {
          &.scroll {
            width: 0;
            opacity: 0;
            margin-left: 0px;

            button p {
              opacity: 0;
            }
          }

          margin-right: 20px;
          margin-left: 0;
          width: 225px;
          transition: width 0.3s, opacity 0.2s 0.1s;
          overflow: hidden;
          will-change: auto;
        }

        @media (max-width: 992px) {
          width: 165px;
        }

        @media (max-width: 768px) {
          margin-right: 10px;
          width: 115px;
        }
        @media (max-width: 576px) {
          width: 85px;
        }
      }
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
    height: 40%;
    // height: 20px;
    // @media (max-width: 992px) {
    //   height: 14px;
    // }
    // @media (max-width: 768px) {
    //   height: 12px;
    // }
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

      @media (max-width: 768px) {
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
        &:nth-child(1),
        &:nth-child(4) {
          transition: 0.2s all;
          opacity: 0;
        }

        &:nth-child(2) {
          transform: translateX(-50%) translateY(-50%) rotate(45deg);

          @media (max-width: 768px) {
            width: 19px;
          }
        }

        &:nth-child(3) {
          transform: translateX(-50%) translateY(-50%) rotate(-45deg);

          @media (max-width: 768px) {
            width: 19px;
          }
        }
      }
    }
  }
}
</style>