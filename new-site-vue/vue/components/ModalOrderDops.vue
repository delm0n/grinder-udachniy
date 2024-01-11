<template>
  <div :class="['dop-list', showMore ? 'open' : 'close']">
    <div
      @click="showMore = !showMore"
      :class="['show-more__button', showMore ? 'open' : 'close']"
    >
      {{ showMore ? "Скрыть список" : "Добавить доп. товары" }}
    </div>
    <collapse :when="mobile ? showMore : true">
      <div class="order-list__wrapper">
        <div class="order-list__box">
          <div class="order-list__box-item">
            <p class="order-list__title">Расходные материалы</p>
            <div
              v-for="(dop, index) in getDops.filter(
                (el) => el.type == DOPTYPES.material
              )"
              :key="index"
              class="order-list__item"
            >
              <!-- <label class="modal-order__item-checkbox checkbox-v3">
                <input
                  class="checkbox-v3__disabled"
                  type="checkbox"
                  v-model="dop.selected"
                />
                <span class="checkbox-v3__active"> </span>
              </label> -->
              <div
                :class="[
                  'checkbox-v3 svg-box checkbox-svg-box',
                  dop.selected ? ' svg-box--active' : '',
                ]"
                @click="selectDop(dop.id)"
              >
                <div v-show="dop.selected"></div>
              </div>
              <span class="checkbox-v3__name" v-html="dop.name"></span>
              <div class="order-checkbox__row">
                <div class="order-checkbox__control">
                  <span
                    class="order-checkbox__control-btn"
                    @click="setCount([dop.id, 'minus'])"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="33"
                      height="33"
                      viewBox="0 0 33 33"
                      fill="none"
                    >
                      <path
                        d="M23.6672 16H16.5558H9"
                        stroke="#646464"
                        stroke-width="3"
                        stroke-linecap="round"
                      />
                    </svg>
                  </span>
                  <span class="order-checkbox__control-total">{{
                    dop.selected ? dop.count + 1 : 0
                  }}</span>
                  <span
                    class="order-checkbox__control-btn"
                    @click="setCount([dop.id, 'plus'])"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="33"
                      height="33"
                      viewBox="0 0 33 33"
                      fill="none"
                    >
                      <path
                        d="M16.7282 24.1661L16.7282 17M24.0018 17H16.7282M16.7282 17L16.7282 9.83398M16.7282 17H9"
                        stroke="#646464"
                        stroke-width="3"
                        stroke-linecap="round"
                      />
                    </svg>
                  </span>
                </div>
                <span class="order-checkbox__price"
                  >{{
                    (dop.selected
                      ? (dop.count + 1) * dop.price
                      : dop.price
                    ).toLocaleString()
                  }}
                  руб.</span
                >
              </div>
            </div>
          </div>

          <div class="order-list__box-item">
            <p class="order-list__title">Прочее</p>
            <div
              v-for="(dop, index) in getDops.filter(
                (el) => el.type == DOPTYPES.other
              )"
              :key="index"
              class="order-list__item"
            >
              <div
                :class="[
                  'checkbox-v3 svg-box checkbox-svg-box',
                  dop.selected ? ' svg-box--active' : '',
                ]"
                @click="selectDop(dop.id)"
              >
                <div v-show="dop.selected"></div>
              </div>
              <!-- <label class="modal-order__item-checkbox checkbox-v3">
                <input
                  class="checkbox-v3__disabled"
                  type="checkbox"
                  v-model="dop.selected"
                />
                <span class="checkbox-v3__active"> </span>
              </label> -->

              <span class="checkbox-v3__name" v-html="dop.name"></span>
              <div class="order-checkbox__row">
                <div class="order-checkbox__control">
                  <span
                    class="order-checkbox__control-btn"
                    @click="setCount([dop.id, 'minus'])"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="33"
                      height="33"
                      viewBox="0 0 33 33"
                      fill="none"
                    >
                      <path
                        d="M23.6672 16H16.5558H9"
                        stroke="#646464"
                        stroke-width="3"
                        stroke-linecap="round"
                      />
                    </svg>
                  </span>
                  <span class="order-checkbox__control-total">{{
                    dop.selected ? dop.count + 1 : 0
                  }}</span>
                  <span
                    class="order-checkbox__control-btn"
                    @click="setCount([dop.id, 'plus'])"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="33"
                      height="33"
                      viewBox="0 0 33 33"
                      fill="none"
                    >
                      <path
                        d="M16.7282 24.1661L16.7282 17M24.0018 17H16.7282M16.7282 17L16.7282 9.83398M16.7282 17H9"
                        stroke="#646464"
                        stroke-width="3"
                        stroke-linecap="round"
                      />
                    </svg>
                  </span>
                </div>
                <span class="order-checkbox__price"
                  >{{
                    (dop.selected
                      ? (dop.count + 1) * dop.price
                      : dop.price
                    ).toLocaleString()
                  }}
                  руб.</span
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </collapse>
  </div>
</template>

<script>
import { DOPTYPES } from "../../js/vars/dop-types";
import { mapGetters, mapMutations } from "vuex";
import { Collapse } from "vue-collapsed";

export default {
  data() {
    return {
      showMore: false,
      DOPTYPES: DOPTYPES,
      mobile: window.innerWidth < 1281,
    };
  },
  methods: mapMutations(["setCount", "selectDop"]),
  computed: mapGetters(["getDops"]),
  components: { Collapse },

  mounted() {
    const windowbreakpoint = window.matchMedia("(max-width: 1280px)");
    const breakpointChecker = () => {
      if (!windowbreakpoint.matches) {
        this.mobile = false;
      } else {
        this.mobile = true;
      }
    };

    windowbreakpoint.addListener(breakpointChecker);
    breakpointChecker();
  },
};
</script>

<style lang="scss">
#modal-order .dop-list {
  &.open {
    border-radius: 3px;
    background: #fff;
  }

  .checkbox-v3 {
    align-items: center;
    display: flex;
    gap: 10px;

    @media (max-width: 576px) {
      grid-row: 1/3;
      grid-column: 1/2;
    }

    &__name {
      color: #323232;
      font-family: "Inter";
      font-size: 18px;
      font-style: normal;
      font-weight: 400;
      line-height: 25px; /* 138.889% */

      @media (max-width: 768px) {
        font-size: 16px;
        line-height: 23px;
      }

      @media (max-width: 576px) {
        font-size: 15px;
        line-height: 22px;

        grid-row: 1/2;
        grid-column: 2/4;
      }
    }

    &__active {
      flex-shrink: 0;
      @media (max-width: 576px) {
        border: 2px solid #878787;
      }
    }

    &__price {
      font-size: 13px;
      font-weight: 700;
      line-height: 22px;
      font-family: "Inter";
      grid-row: 2/3;
      grid-column: 2/3;

      @media (min-width: 577px) {
        display: none;
      }
    }
  }

  .show-more__button {
    @media (min-width: 1280px) {
      display: none;
    }
    transition: all 0.3s;
    max-width: 358px;
    margin: 0 auto;
    padding: 18px 10px;
    font-family: "Inter";
    text-align: center;
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: 17px; /* 94.444% */

    @media (max-width: 768px) {
      padding: 15px 10px;
    }

    @media (max-width: 576px) {
      max-width: 100%;
    }

    &.close {
      color: #fff;
      border-radius: 10px;
      background: #2362b1;
    }

    &.open {
      text-decoration-line: underline;
      color: #646464;
      border-radius: 3px 3px 0px 0px;
      background: #fff;
    }
  }

  .order-list {
    &__title {
      font-family: "Gilroy";
      font-size: 22px;
      font-weight: 700;
      line-height: 29px;

      @media (max-width: 576px) {
        font-size: 18px;
        line-height: 25px;
      }
    }

    &__wrapper {
      padding: 10px 15px;
      border-radius: 10px;
      background: #fafafa;

      @media (max-width: 1280px) {
        background: transparent;
        padding: 10px;
      }

      @media (max-width: 576px) {
        padding-top: 0px;
      }
    }

    &__box {
      display: flex;
      flex-direction: column;
      gap: 20px;
      height: 375px;
      overflow-x: hidden;
      scrollbar-width: thin;

      @media (max-width: 1280px) {
        height: 320px;
      }

      &::-webkit-scrollbar {
        width: 4px;
        height: 3px;
      }

      &::-webkit-scrollbar-track {
        background-color: #cecece;
      }

      &::-webkit-scrollbar-thumb {
        background-color: #2362b1;
      }

      &::-webkit-scrollbar-thumb:hover {
        background-color: #2362b1;
      }
    }

    &__box-item {
      display: flex;
      flex-direction: column;
      gap: 15px;
      //   padding-right: 10px;

      @media (max-width: 576px) {
        gap: 10px;
      }
    }

    &__item {
      //   display: flex;
      align-items: center;
      gap: 10px;
      //   justify-content: space-between;
      width: 100%;

      display: grid;
      grid-template-columns: auto 1fr auto;

      @media (max-width: 576px) {
        gap: 0 10px;
        padding-right: 5px;
      }
    }
  }

  .order-checkbox__row {
    align-items: center;
    display: flex;
    // flex-shrink: 0;
    padding-left: 10px;
    gap: 20px;

    @media (max-width: 576px) {
      padding-left: 0;
      grid-column: 2/4;
      grid-row: 2/3;
      flex-direction: row-reverse;
      justify-content: flex-end;
      gap: 10px;
    }

    .order-checkbox__control {
      align-items: center;
      background: #fff;
      border-radius: 10px;
      display: flex;

      @media (max-width: 1280px) {
        background: #f4f4f4;
      }

      &-btn {
        cursor: pointer;
        align-items: center;
        background: #fff;
        border-radius: 10px;
        display: flex;
        @media (max-width: 1280px) {
          background: #f4f4f4;
        }
        @media (max-width: 576px) {
          height: 20px;
          width: 20px;

          svg path {
            stroke: #646464;
          }
        }
      }
      &-total {
        color: #646464;
        font-family: "Gilroy";
        font-size: 22px;
        font-weight: 400;
        text-align: center;
        width: 42px;

        @media (max-width: 576px) {
          font-size: 15px;
          width: 24px;
        }
      }
    }

    .order-checkbox__price {
      color: #323232;
      font-family: "Gilroy";
      font-size: 18px;
      font-style: normal;
      font-weight: 700;
      line-height: 25px; /* 138.889% */
      width: 95px;

      @media (max-width: 576px) {
        font-size: 16px;
        width: 85px;
      }
    }
  }
}
</style>