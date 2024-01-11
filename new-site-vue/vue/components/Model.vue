<template>
  <section id="model">
    <div class="container">
      <div class="title">
        <h2>Выберите свой гриндер «УДАЧНЫЙ»</h2>
      </div>

      <div class="model-wrapper">
        <div v-for="(item, index) in getMain" :key="index" class="model-item">
          <div class="model-item__img">
            <my-image
              :alt="item.name"
              :floder="'model'"
              :imgName="item.img"
              :mobile="false"
            />

            <h3 v-html="item.name.replace('«', '').replace('»', '')"></h3>
          </div>

          <div class="model-item__text">
            <p class="decr">
              <span>Габариты станка — </span>
              <b v-html="item.size"></b>
            </p>

            <p class="decr">
              <span>Вес — </span>
              <b v-html="item.weight"></b>
            </p>

            <p class="decr">
              <span>Диапазон горизонтальной регулировки&nbsp;—&nbsp;</span>
              <b v-html="item.upor.rangeV"></b>
            </p>

            <p class="decr">
              <span>Диапазон горизонтальной регулировки&nbsp;—&nbsp;</span>
              <b v-html="item.upor.rangeG"></b>
            </p>

            <collapse :when="item.showMoreModel || window1200">
              <div class="complectation">
                <p class="decr">
                  <b> Комплектация</b>: гриндер, 3 абразивные ленты (Р60, P100,
                  Р180), гарантийный талон, инструкция
                </p>
              </div>
            </collapse>

            <collapse :when="item.showMoreModel">
              <div class="complectation">
                <p v-for="(li, idx) in item.charList" :key="idx" class="decr">
                  <span v-html="li[0]"></span> —
                  <b v-html="li[1]"></b>
                </p>
              </div>
            </collapse>

            <p
              @click="item.showMoreModel = !item.showMoreModel"
              class="show-more-button"
            >
              {{
                item.showMoreModel
                  ? "Скрыть дополнительные характеристики"
                  : "Дополнительные характеристики"
              }}
            </p>
          </div>

          <div class="model-item__offer">
            <div class="price">
              <div class="sale" v-html="'-' + item.sale"></div>
              <p class="new" v-html="item.price.toLocaleString() + ' РУБ.'"></p>
              <p
                class="old"
                v-html="item.oldPrice.toLocaleString() + ' РУБ.'"
              ></p>
            </div>
            <button class="button" @click="console.log(1)">Заказать</button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapGetters } from "vuex";
import { Collapse } from "vue-collapsed";
import MyImage from "../UI/MyImage.vue";

export default {
  data() {
    return {
      window1200: window.innerWidth > 1200,
    };
  },
  computed: mapGetters(["getMain"]),
  components: {
    MyImage,
    Collapse,
  },
  mounted() {
    const windowbreakpoint1200 = window.matchMedia("(max-width: 1200px)");
    const breakpointChecker1200 = () => {
      if (!windowbreakpoint1200.matches) {
        this.window1200 = true;
      } else {
        this.window1200 = false;
      }
    };

    windowbreakpoint1200.addListener(breakpointChecker1200);

    breakpointChecker1200();
  },
};
</script>

<style lang="scss">
@import "../../scss/_global.scss";

#model {
  overflow: hidden;
  @extend %padd;

  .model-wrapper {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 30px;
    align-items: start;

    @media (max-width: 992px) {
      grid-template-columns: 1fr;
    }

    .model-item {
      border-radius: 10px;
      background: #fff;
      box-shadow: 0px 4px 14px 0px rgba(111, 111, 111, 0.15);
      padding: 50px 30px;
      display: flex;
      flex-direction: column;
      gap: 30px;

      @media (max-width: 576px) {
        padding: 20px 10px;
      }

      &__img {
        picture {
          justify-content: center;
        }

        @include aspect() {
          max-width: 339px;
          aspect-ratio: 1/1;
        }
      }

      &__text {
        border-top: 4px solid #e0e0e0;
        border-bottom: 4px solid #e0e0e0;
        padding: 20px 0;

        .complectation {
          border-top: 4px solid #e0e0e0;
          padding-top: 20px;
        }

        .decr {
          color: #323232;
          font-family: "Gilroy";
          font-size: 22px;
          font-style: normal;
          font-weight: 400;
          line-height: 131.818%;

          @include fluidFontSize(18, 22, 576, 1400);

          margin-bottom: 20px;

          @media (max-width: 576px) {
            margin-bottom: 15px;
          }

          span {
            font-weight: 400;
          }

          b {
            font-weight: 600;
            white-space: nowrap;
          }
        }

        .show-more-button {
          cursor: pointer;
          color: rgba(50, 50, 50, 0.8);
          font-family: "Inter";
          font-size: 18px;
          font-style: normal;
          font-weight: 400;
          line-height: 25px; /* 138.889% */
          text-decoration-line: underline;

          border-top: 4px solid #e0e0e0;
          padding-top: 20px;
          // margin-top: 20px;

          @media (max-width: 992px) {
            text-align: center;
          }
        }
      }

      h3 {
        color: #323232;
        text-align: center;
        font-family: "Gilroy";
        font-size: 27px;
        font-style: normal;
        font-weight: 700;
        line-height: 125.926%;
      }

      &__offer {
        .price {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          margin-bottom: 20px;

          .sale {
            border-radius: 50px;
            background: #ff3838;
            display: flex;
            padding: 5px 10px;
            justify-content: center;
            align-items: center;

            color: #fff;
            font-family: "Inter";
            font-size: 16px;
            font-style: normal;
            font-weight: 400;
            line-height: 23px; /* 143.75% */
          }

          .new {
            color: #323232;
            font-family: "Gilroy";
            font-size: 27px;
            font-style: normal;
            font-weight: 600;
            line-height: normal;
          }

          .old {
            color: #c8c8c8;
            font-family: "Gilroy";
            font-size: 18px;
            font-style: normal;
            font-weight: 900;
            line-height: normal;
            text-decoration: line-through;
          }
        }

        .button {
          margin: 0 auto;
        }
      }
    }
  }
}
</style>