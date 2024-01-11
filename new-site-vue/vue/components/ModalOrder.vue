<template>
  <div id="modal-order" style="display: none">
    <div class="modal-order__box">
      <div class="modal-order__img">
        <div class="modal-order__img-logo">
          <picture
            ><source
              srcset="new-site-vue/build/images/src/logo.webp"
              type="image/webp" />
            <img
              src="new-site-vue/build/images/src/logo.png"
              alt="Логотип Helicon"
          /></picture>

          <div class="line"></div>

          <p>
            Официальный сайт <br />
            производителя
          </p>
        </div>

        <div class="modal-order__img-img">
          <picture>
            <source
              :srcset="
                'new-site-vue/build/images/modal-order/' +
                getMainItem.img +
                '@05x' +
                (getWebp == 'webp' ? '.webp' : '.png')
              "
              media="(max-width: 1280px)"
            />
            <img
              :src="
                'new-site-vue/build/images/modal-order/' +
                getMainItem.img +
                (getWebp == 'webp' ? '.webp' : '.png')
              "
              :alt="'#'"
              :onload="animationImage"
            />
          </picture>
        </div>
      </div>
      <div class="modal-order__content">
        <h3 class="content-title">Оформление заказа</h3>
        <p class="content-decr">
          После отправки формы мы свяжемся с Вами в течение 10 минут и уточним
          детали доставки
        </p>

        <droplist
          class="content-droplist"
          @action-droplist="actionDroplist"
          :array="getMain"
          :repeat="true"
        />

        <h4>Добавьте в заказ</h4>

        <modal-order-dops />
      </div>
      <div class="modal-order__form">
        <h3 class="--mobile">Оформление заказа</h3>

        <form
          action=""
          v-on:submit.prevent
          method="post"
          class="spnForm form-order"
        >
          <div class="form-order__column">
            <div class="form-order__inputs">
              <input
                class="my-input-v2 kit-form__name"
                type="text"
                name="name"
                placeholder="Имя"
                v-model="getUser.name"
              />
              <input
                class="my-input-v2"
                type="text"
                name="phone"
                placeholder="+7 (___)-___-__-__"
                v-model="getUser.phone"
              />
            </div>

            <div class="form-order__row-img">
              <my-image
                v-for="(item, index) in [1, 2, 3, 4]"
                :key="index"
                :alt="'#'"
                :floder="'modal-order'"
                :imgName="'order-icon-' + item"
                :mobile="false"
              />
            </div>
          </div>

          <div class="form-order__column">
            <button
              @click="openModalSuccessOrder"
              type="submit"
              class="button button-anim"
            >
              Заказать
            </button>

            <label class="checkbox-v2 form-order__rassrochka"
              ><input
                v-model="getUser.rassrochka"
                class="checkbox-v2__disabled"
                type="checkbox"
              /><span class="checkbox-v2__active"></span
              ><span class="checkbox-v2__name">Покупка в рассрочку</span></label
            >

            <div class="form-offer-box" style="display: none">
              <div class="offer-box">
                <p>
                  Итого <span class="hidden">к оплате</span>:
                  <span class="bold"
                    >{{ getLastPriceWithCount.toLocaleString() }} ₽</span
                  >
                </p>
              </div>
            </div>
          </div>

          <div class="form-order__decr --mobile">
            Мы свяжемся с Вами в течение 10 минут и уточним детали доставки
          </div>

          <div>
            <div :key="index" v-for="(dop, index) in getDops">
              <input
                type="hidden"
                :name="'quantity[' + dop.id + ']'"
                :value="dop.selected ? dop.count + 1 : 0"
              /><input type="hidden" name="id[]" :value="dop.id" />
            </div>

            <form-helicon :main="true" :dops="false" :rassr="true" />
          </div>
        </form>
      </div>

      <div class="modal-order__offer">
        <div class="offer-box">
          <p>
            Итого <span class="hidden">к оплате</span>:
            <span class="bold"
              >{{ getLastPriceWithCount.toLocaleString() }} ₽</span
            >
          </p>
        </div>

        <div class="row-img --mobile">
          <my-image
            v-for="(item, index) in [1, 2, 3]"
            :key="index"
            :alt="'#'"
            :floder="'modal-order'"
            :imgName="'order-icon-' + item"
            :mobile="false"
          />

          <my-image
            :alt="'#'"
            :floder="'modal-order'"
            :imgName="'order-icon-4-mob'"
            :mobile="false"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
import Droplist from "../UI/Droplist.vue";
import MyImage from "../UI/MyImage.vue";
import FormHelicon from "./FormHelicon.vue";
import ModalOrderDops from "./ModalOrderDops.vue";

export default {
  components: { Droplist, FormHelicon, MyImage, ModalOrderDops },
  mounted() {
    this.animationImage();
  },

  methods: {
    ...mapMutations(["selectMain", "openModalSuccessOrder", "setCount"]),

    animationImage() {
      this.gsap.fromTo(
        "#modal-order .modal-order__img-img img",
        {
          opacity: 0,
          scale: 0.9,
        },
        {
          opacity: 1,
          duration: 0.4,
          scale: 1,
        }
      );
    },

    actionDroplist(id) {
      this.selectMain(id);
    },
  },

  computed: {
    ...mapGetters([
      "getWebp",
      "getMainItem",
      "getMain",
      "getDops",
      "getUser",
      "getLastPrice",
      "getLastPriceWithCount",
    ]),
  },
};
</script>

<style lang="scss">
@import "../../scss/_global.scss";

#modal-order {
  background-color: #fff;
  border-radius: 10px;
  position: relative;
  max-width: 1262px;
  padding: 0 !important;
  width: 100%;
  font-family: "Gilroy";
  cursor: default;

  @media (max-width: 1280px) {
    max-width: 720px;
  }

  .dropdown {
    .dropdown-hero {
      border-radius: 10px;
      border: 2px solid #323232;
      background: #fff;

      p {
        color: #323232;
        font-family: "Gilroy";
        font-size: 20px;
        font-style: normal;
        font-weight: 600;
        line-height: normal;
      }

      &--open {
        border-radius: 10px 10px 0 0;
      }
    }

    .dropdown-list {
      border-radius: 0 0 10px 10px;
      border: 2px solid #323232;

      li {
        font-weight: 600;
        font-family: "Gilroy";
      }
    }
  }

  .checkbox-input {
    max-width: 313px;
    @media (max-width: 1280px) {
      background: #fff;
    }
  }

  .is-close {
    top: 5px;
    right: 5px;
    color: #323232;
    svg {
      filter: none;
    }
  }

  @media (max-width: 576px) {
    max-width: 400px;
  }

  .button__showMore {
    font-family: "Gilroy";
    font-size: 20px;
    font-weight: 600;
    margin-top: 20px;
    text-decoration-line: underline;
    color: #323232;

    @media (max-width: 575px) {
      font-size: 15px;
    }
  }

  .modal-order {
    &__box {
      display: grid;
      grid-template-columns: 0.5fr 1fr;
      grid-template-rows: auto;
    }

    &__img {
      align-items: center;
      background: #f4f4f4;
      display: flex;
      flex-direction: column;
      grid-column: 1/2;
      grid-row: 1/2;

      padding: 40px 0 60px;
      border-radius: 10px 0 0 0;

      @media (max-width: 1280px) {
        grid-column: 1/3;
        grid-row: 1/2;
        padding-bottom: 0;
        border-radius: 10px 10px 0 0;
        justify-content: center;
      }

      @media (max-width: 576px) {
        padding-top: 40px;
      }

      &-logo {
        display: flex;
        gap: 15px;
        align-items: center;
        justify-content: center;

        img {
          max-width: 189px;
          width: 100%;
          @media (max-width: 1280px) {
            max-width: 159px;
          }

          @media (max-width: 576px) {
            max-width: 105px;
          }
        }

        @media (max-width: 576px) {
          gap: 10px;
        }

        div.line {
          background-color: #9b9b9b;
          display: block;
          height: 38px;
          width: 1px;

          @media (max-width: 576px) {
            height: 30px;
          }
        }

        p {
          color: #292929;
          font-family: "Gilroy";
          font-size: 14px;
          font-style: normal;
          font-weight: 200;
          line-height: 21px; /* 150% */
          white-space: nowrap;
          @media (max-width: 576px) {
            color: #292929;
            font-family: "Inter";
            font-size: 12px;
            font-style: normal;
            font-weight: 200;
            line-height: 15px; /* 125% */
          }
        }
      }

      &-img img {
        @media (max-width: 1366px) and (min-width: 1281px) {
          max-width: 380px;
        }

        @media (max-width: 576px) {
          max-width: 90%;
          margin: 0 auto;
        }
      }
    }

    &__content {
      grid-column: 2/3;
      grid-row: 1/2;
      padding: 30px 15px 30px 30px;
      color: #323232;
      font-family: "Roboto";

      @media (max-width: 1280px) {
        background: #f4f4f4;
        grid-column: 1/3;
        grid-row: 2/3;
        padding: 30px;
      }

      @media (max-width: 576px) {
        padding: 0 10px 20px;
      }

      h3 {
        font-size: 32px;
        font-style: normal;
        font-weight: 700;
        line-height: 39px;
        margin-bottom: 10px;
        font-family: "Gilroy";

        &.content-title {
          @media (max-width: 1280px) {
            display: none;
          }
        }
      }

      h4 {
        color: rgba(50, 50, 50, 0.7);
        font-family: "Gilroy";
        font-size: 22px;
        font-style: normal;
        font-weight: 500;
        line-height: 29px; /* 131.818% */
        margin-bottom: 10px;

        @media (max-width: 1280px) {
          display: none;
        }
      }

      .content-decr {
        font-size: 22px;
        font-style: normal;
        font-weight: 300;
        line-height: 29px;
        font-family: "Gilroy";
        margin-bottom: 30px;
        max-width: 663px;

        @media (max-width: 1280px) {
          display: none;
        }
      }

      .content-droplist {
        max-width: 358px;
        width: 100%;
        margin-bottom: 30px;

        @media (max-width: 1280px) {
          margin: 0 auto 20px;
        }

        @media (max-width: 576px) {
          margin: 0 auto 10px;
          max-width: 100%;
        }

        .dropdown-hero,
        .dropdown-list {
          li.dropdown-item--active {
            color: #5f7dcb;
          }

          .dropdown-item,
          p {
            @include fluidFontSize(16, 20, 992, 1920);
          }
          li {
            &:before {
              background: #5f7dcb;
            }
          }
        }
      }
    }

    &__form {
      grid-column: 2/3;
      grid-row: 2/3;
      .--mobile {
        display: none;
        font-size: 32px;
        font-style: normal;
        font-weight: 700;
        line-height: 39px;
        margin-bottom: 10px;
        text-align: center;
        color: #323232;
        font-family: "Roboto";

        @media (max-width: 576px) {
          color: #323232;
          text-align: center;
          font-size: 22px;
          font-style: normal;
          font-weight: 700;
          line-height: 29px; /* 131.818% */
          margin-bottom: 0;
        }
      }
      @media (max-width: 1280px) {
        grid-column: 1/3;
        grid-row: 3/4;
        padding-top: 30px;
        .--mobile {
          display: block;
        }
      }

      form {
        align-items: center;
        border-top: 1px solid #d0d0d0;
        display: flex;
        flex-wrap: wrap;
        gap: 30px;
        margin: 0 30px;
        padding: 30px 0;

        @media (max-width: 1280px) {
          margin: 0;
          gap: 20px;
        }
        @media (max-width: 768px) {
          padding: 20px 0;
        }

        @media (max-width: 1280px) {
          border-top: none;
          flex-direction: column;

          .form-offer-box {
            display: flex !important;
            padding: 10px 10px 20px;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            gap: 5px;
            background: #323232;
          }

          .form-order__column {
            &:nth-child(2) {
              gap: 20px;
              display: flex;
              width: 100%;
              flex-direction: column-reverse;

              .checkbox-v2,
              button.button {
                // max-width: max-content;
                margin: 0 auto;
              }
            }
          }
        }

        @media (min-width: 1281px) {
          .form-order__column {
            &:first-child {
              width: calc(59% - 15px);
              @media (max-width: 1280px) {
                width: calc(59% - 10px);
              }
            }

            &:nth-child(2) {
              align-items: center;
              display: flex;
              flex-direction: column;
              gap: 20px;
              width: calc(41% - 15px);

              @media (max-width: 1280px) {
                width: calc(41% - 10px);
              }
            }
          }
        }

        .form-order__inputs {
          display: flex;
          flex-wrap: wrap;
          gap: 30px;

          input {
            width: calc(50% - 15px);
          }

          @media (max-width: 1440px) {
            input {
              font-size: 16px;
              padding: 0 13px;
            }
          }

          @media (max-width: 1280px) {
            gap: 20px;
            input {
              width: calc(50% - 10px);
            }
          }

          @media (max-width: 1280px) {
            margin: 0 10px 10px;
            max-width: 400px;
            // gap: 10px;
            input {
              width: 100%;
            }
          }

          @media (max-width: 576px) {
            gap: 10px;
          }
        }

        .form-order__row-img {
          align-items: center;
          display: flex;
          justify-content: space-between;
          margin-top: 30px;

          @media (max-width: 1280px) {
            display: none;
          }
        }

        .form-order__decr {
          display: none;

          @media (max-width: 1280px) {
            display: block;
            font-size: 22px;
            font-weight: 300;
            line-height: 29px;
            margin: 10px auto -20px;
            max-width: 500px;
            text-align: center;
            font-family: "Roboto";
          }

          @media (max-width: 576px) {
            font-size: 15px;
            line-height: 22px;
            margin: 0 10px;
          }
        }
      }
    }

    &__offer {
      align-items: center;
      background: #323232;
      display: flex;
      grid-column: 1/2;
      grid-row: 2/3;
      justify-content: center;
      border-radius: 0 0 0 10px;

      @media (max-width: 1280px) {
        display: none;
      }

      .--mobile {
        display: none;
      }

      // @media (max-width: 1280px) {
      //   align-items: inherit;
      //   border-radius: 0 0 10px 10px;
      //   display: flex;
      //   flex-direction: column;
      //   gap: 20px;
      //   grid-column: 1/3;
      //   grid-row: 4/5;
      //   padding: 20px;

      //
      //     border-bottom: 1px solid #fff;
      //     border-top: 1px solid #fff;
      //     padding: 15px 10px;
      //   }

      //   .row-img {
      //     display: flex;
      //     gap: 20px;
      //     justify-content: center;
      //     margin-top: 0px;

      //     @media (max-width: 475px) {
      //       flex-direction: column;
      //       align-items: center;
      //     }
      //   }
      // }
    }
  }

  .offer-box {
    .hidden {
      @media (max-width: 375px) {
        display: none;
      }
    }

    p {
      color: #fff;
      font-family: "Gilroy";
      font-size: 35px;
      font-weight: 700;
      line-height: 41px;
      text-align: center;

      @media (max-width: 576px) {
        font-size: 22px;
        line-height: normal;
      }

      .bold {
        display: block;
        font-size: 50px;
        font-weight: 900;
        line-height: 1;
        margin-top: 18px;

        @media (max-width: 576px) {
          margin-top: 5px;
          font-size: 32px;
          line-height: 39px; /* 121.875% */
        }
      }
    }
  }
}
</style>
