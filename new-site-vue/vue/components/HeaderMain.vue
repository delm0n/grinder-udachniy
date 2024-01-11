<template>
  <div class="header-main">
    <div class="container">
      <div class="grid-box">
        <div class="grid-box__title">
          <div class="header-main__title-wrap">
            <h1 class="header-main__title">
              Гриндер
              <span
                >УДАЧНЫЙ
                {{ getMainItem.id == getMain[1].id ? "ПЛЮС" : "" }}

                <span class="black"> M610 </span>
              </span>
            </h1>
            <h2 class="header-main__subtitle">
              Надёжный помощник в Вашу мастерскую
            </h2>
          </div>
        </div>

        <div class="grid-box__features">
          <div class="decription-item">
            <div class="decription-item__item">
              <p class="decription-item__title">Напрямую с завода!</p>
              <ul class="decription-item__list">
                <li>Гарантия честной цены</li>
                <li>Без наценок и переплат</li>
                <li>Без посредников</li>
                <li>Гарантия <span>3 года</span></li>
              </ul>
            </div>
          </div>

          <div class="features-box">
            <div
              v-for="(item, index) in featuresList"
              :key="index"
              class="feature-item"
            >
              <svg
                v-show="!item.toggle || getMainItem.id == getMain[1].id"
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
              >
                <rect
                  width="18"
                  height="18"
                  rx="4"
                  :fill="item.toggle ? '#FF4E52' : '#2BC591'"
                ></rect>
                <path
                  d="M5.14285 9L7.71428 12.2143L12.8571 6.42857"
                  stroke="white"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </svg>

              <div v-show="!item.toggle || getMainItem.id == getMain[1].id">
                <h3 v-html="item.title"></h3>
                <p v-html="item.text" class="feature-item__text"></p>
              </div>
            </div>
          </div>
        </div>

        <div class="grid-box__img">
          <div class="header-main__img-wrap">
            <div class="img-wrap main">
              <picture>
                <source
                  :srcset="
                    '/new-site-vue/build/images/header/' +
                    getMainItem.img +
                    '.webp'
                  "
                  media="(min-width:577px)"
                  type="image/webp" />
                <source
                  :srcset="
                    '/new-site-vue/build/images/header/' +
                    getMainItem.img +
                    '.png'
                  "
                  media="(min-width: 577px)" />
                <source
                  :srcset="
                    '/new-site-vue/build/images/header/' +
                    getMainItem.img +
                    '@05x.webp'
                  "
                  type="image/webp" />

                <img
                  :src="
                    '/new-site-vue/build/images/header/' +
                    getMainItem.img +
                    '@05x.png'
                  "
                  :alt="getMainItem.name"
              /></picture>
            </div>
          </div>
        </div>

        <div class="grid-box__form">
          <header-main-form />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import HeaderMainForm from "./HeaderMainForm.vue";

export default {
  components: { HeaderMainForm },
  computed: mapGetters(["getMainItem", "getMain"]),
  data() {
    return {
      featuresList: [
        {
          title: "Горизонтальная регулировка",
          text: `Единственный гриндер с регулируемым<br> 
            упором не только в вертикальной,<br> 
            но и горизонтальной плоскостях`,
          toggle: true,
        },
        {
          title: "Деликатная обработка",
          text: `Безупречно шлифует металл, <br>  
          а также дерево, пластик и т. п.`,
        },
        {
          title: "Без перегрева",
          text: `Длительная непрерывная <br>  
          работа`,
        },
      ],
    };
  },
};
</script>

<style lang="scss">
@import "../../scss/_global.scss";

.header-main {
  overflow: hidden;
  padding: 140px 0;

  @media (max-width: 768px) {
    padding: 80px 0;
  }

  .grid-box {
    display: grid;
    grid-template-columns: 26% 38% auto;
    grid-template-rows: min-content 1fr;
    gap: 20px;
    width: 100%;

    @media (max-width: 1366px) {
      grid-template-columns: 0.75fr 1fr;
      grid-template-rows: auto;
      row-gap: 50px;
    }

    @media (max-width: 991px) {
      row-gap: 30px;
    }

    @media (max-width: 768px) {
      grid-template-columns: 1fr;
      row-gap: 20px;
    }

    &__title {
      grid-column: 1/3;
      grid-row: 1/2;

      @media (max-width: 768px) {
        grid-column: 1/2;
        grid-row: 1/2;
      }

      h1 {
        color: #323232;
        font-family: "Gilroy";
        font-size: 60px;
        font-style: normal;
        font-weight: 400;
        line-height: 71px; /* 118.333% */
        margin-bottom: 10px;

        @media (max-width: 992px) {
          font-size: 48px;
          line-height: 57px;
        }

        @media (max-width: 768px) {
          font-size: 44px;
          line-height: 52px;
        }

        @media (max-width: 576px) {
          font-size: 32px;
          line-height: 40px;
        }

        span {
          color: #2462b1;
          font-size: 60px;
          font-weight: 900;
          line-height: 71px;

          @media (max-width: 992px) {
            font-size: 48px;
            line-height: 57px;
          }

          @media (max-width: 768px) {
            font-size: 44px;
            line-height: 52px;
          }

          @media (max-width: 576px) {
            font-size: 32px;
            line-height: 40px;
          }

          .black {
            color: #323232;
          }
        }
      }
      h2 {
        color: #323232;
        font-family: "Gilroy";
        font-size: 25px;
        font-style: normal;
        font-weight: 400;
        line-height: 29px; /* 116% */

        @media (max-width: 768px) {
          font-size: 22px;
          line-height: 26px;
        }

        @media (max-width: 576px) {
          font-size: 20px;
          line-height: 24px;
        }
      }
    }

    &__features {
      grid-column: 1/2;
      grid-row: 2/3;
      z-index: 10;

      @media (max-width: 1366px) {
        grid-column: 1/2;
        grid-row: 2/3;
        justify-self: center;
      }

      @media (max-width: 768px) {
        grid-column: 1/2;
        grid-row: 3/4;
      }

      .decription-item {
        font-family: "Gilroy";
        margin: 20px 0 0px;

        @media (max-width: 768px) {
          margin: 60px auto auto;
          max-width: max-content;
          order: 2;
        }

        @media (max-width: 768px) {
          margin: 30px auto 0;
        }

        &__title {
          font-weight: 600;
          font-size: 25px;
          line-height: 30px;
          color: #ffffff;
          background: #2462b1;
          border-radius: 26.5px;
          width: max-content;
          padding: 12px 22px;

          @media (max-width: 991px) {
            margin: 0 auto;
          }

          @media (max-width: 575px) {
            font-size: 18px;
            line-height: 22px;
          }
        }

        &__list {
          list-style: none;
          list-style-type: disc;
          margin-top: 10px;
          margin-bottom: 0;
          padding-left: 40px;

          li {
            font-weight: 500;
            font-size: 20px;
            line-height: 27px;
            position: relative;

            @media (max-width: 575px) {
              font-size: 16px;
              line-height: 27px;
            }

            &::before {
              position: absolute;
              content: "·";
              font-size: 50px;
              top: 50%;
              transform: translateY(-50%);
              left: -23px;

              @media (max-width: 575px) {
                font-size: 35px;
                // top: 6px;
              }
            }

            span {
              font-weight: 600;
              text-decoration-line: underline;
            }

            &:last-child {
              &::before {
                content: "";
                background-image: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTcuMDkyNzEgMC42ODg4NDZDNy4zNzgyOCAtMC4yMjk2MTcgOC42MjE3MiAtMC4yMjk2MTQgOC45MDczIDAuNjg4ODQ4TDEwLjE0MTggNC42NTkzMUMxMC4yNjk2IDUuMDcwMDYgMTAuNjM1OCA1LjM0ODE2IDExLjA0OTEgNS4zNDgxNkgxNS4wNDQyQzE1Ljk2ODMgNS4zNDgxNiAxNi4zNTI2IDYuNTgzOTQgMTUuNjA0OSA3LjE1MTU4TDEyLjM3MjkgOS42MDU0N0MxMi4wMzg1IDkuODU5MzIgMTEuODk4NiAxMC4zMDkzIDEyLjAyNjMgMTAuNzJMMTMuMjYwOCAxNC42OTA1QzEzLjU0NjQgMTUuNjA5IDEyLjU0MDUgMTYuMzcyNyAxMS43OTI4IDE1LjgwNTFMOC41NjA3NCAxMy4zNTEyQzguMjI2MzggMTMuMDk3MyA3Ljc3MzYyIDEzLjA5NzMgNy40MzkyNiAxMy4zNTEyTDQuMjA3MTkgMTUuODA1MUMzLjQ1OTU0IDE2LjM3MjcgMi40NTM1OCAxNS42MDkgMi43MzkxNiAxNC42OTA1TDMuOTczNyAxMC43MkM0LjEwMTQxIDEwLjMwOTMgMy45NjE1IDkuODU5MzIgMy42MjcxNCA5LjYwNTQ3TDAuMzk1MDc2IDcuMTUxNThDLTAuMzUyNTc3IDYuNTgzOTQgMC4wMzE2Njc1IDUuMzQ4MTYgMC45NTU4MTcgNS4zNDgxNkg0Ljk1MDg3QzUuMzY0MTYgNS4zNDgxNiA1LjczMDQ1IDUuMDcwMDYgNS44NTgxNyA0LjY1OTMxTDcuMDkyNzEgMC42ODg4NDZaIiBmaWxsPSIjRkZCODAwIi8+Cjwvc3ZnPgo=);
                background-position: center;
                background-size: 100%;

                width: 13px;
                height: 13px;

                // @media (max-width: 768px) {
                //   top: 3px;
                // }
              }
            }
          }
        }
      }

      .features-box {
        display: flex;
        flex-direction: column;
        row-gap: 20px;
        margin: 50px 0 0;
        padding-bottom: 140px;

        @media (max-width: 768px) {
          margin: 10px 0 20px;
          padding: 0px;
        }
      }

      .feature-item {
        font-family: "Gilroy";
        font-style: normal;
        display: flex;
        // align-items: center;
        gap: 8px;

        svg {
          margin-top: 5px;
        }

        h3 {
          color: #323232;
          font-size: 20px;
          font-weight: 500;
          line-height: 135%;
          margin-bottom: 5px;

          @include fluidFontSize(18, 20, 1367, 1920);
        }

        &__text {
          color: #606060;
          font-size: 18px;
          font-weight: 300;
          line-height: 116.667%;

          @media (min-width: 769px) {
            width: calc(100% + 10px);
          }

          @include fluidFontSize(16, 18, 1367, 1920);
        }
      }
    }

    &__img {
      grid-column: 1/3;
      grid-row: 2/3;
      display: flex;
      //align-self: end;
      align-items: center;
      margin-left: 50px;

      @media (max-width: 1366px) {
        // grid-column: 2/3;
        grid-row: 2/3;
        justify-self: center;
        margin-left: 75px;
      }

      @media (max-width: 991px) {
        margin-left: 90px;
      }

      @media (max-width: 768px) {
        margin-left: 0;
        grid-column: 1/2;
        grid-row: 2/3;

        img {
          // max-width: 480px;
          width: 100%;
        }
      }
      @media (max-width: 576px) {
        img {
          max-width: calc(100% + 40px);
          width: calc(100% + 40px);
          transform: translateX(-20px);
        }
      }
      .header-main__img-wrap {
        position: relative;
        max-width: 920px;
        width: 100%;
        @media (max-width: 1024px) and (min-width: 993px) {
          margin-bottom: -80px;
        }
        @media (max-width: 992px) and (min-width: 769px) {
          align-self: end;
          margin-bottom: 30px;
          margin-left: 20px;
        }

        picture {
          display: flex;
        }

        .header-main__img-main {
          width: 100%;
        }
      }
    }

    &__form {
      grid-column: 3/4;
      grid-row: 1/3;

      @media (max-width: 1366px) {
        grid-column: 1/3;
        grid-row: 3/4;
      }

      @media (max-width: 768px) {
        grid-column: 1/2;
        grid-row: 4/5;
      }
    }
  }
}
</style>