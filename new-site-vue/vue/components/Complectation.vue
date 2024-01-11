<template>
  <section id="complectation">
    <div class="container">
      <div class="complectation-container">
        <div class="title-wrap">
          <div class="complectation-title-container">
            <div class="complectation-title">
              <h2>
                Полная <br />
                комплектация
              </h2>
            </div>
            <p>Докупать ничего не нужно</p>
          </div>

          <div class="complectation-toggle">
            <div
              :class="[
                'toggle-item ',
                !udachPlusVersion ? 'toggle-item--active' : '',
              ]"
              @click="udachPlusVersion = false"
            >
              Удачный
            </div>
            <div
              :class="[
                'toggle-item ',
                udachPlusVersion ? 'toggle-item--active' : '',
              ]"
              @click="udachPlusVersion = true"
            >
              Удачный Плюс
            </div>
          </div>
        </div>

        <div class="complectation-wrapper">
          <div class="complectation-wrapper__items">
            <div
              v-for="(item, index) in complect"
              :key="index"
              @click="openModal(item)"
              @mouseenter="hoverEnter(index)"
              @mouseleave="hoverLeave(index)"
              :class="[
                'complectation-item',
                'complectation-item-' + (index + 1),
                item.hover ? 'complectation-item--active' : '',
              ]"
            >
              <p
                v-html="
                  index +
                  1 +
                  '. ' +
                  (item.udachPlusVersion
                    ? udachPlusVersion
                      ? item.udachPlusVersion.name
                      : item.name
                    : item.name)
                "
              ></p>
            </div>
          </div>
          <div class="complectation-wrapper__imgs">
            <div v-for="(item, index) in complect" :key="index">
              <!-- <div
                v-if="!break1280"
                :class="['arrow', 'arrow-' + (index + 1)]"
              ></div> -->
              <my-image
                v-if="item.img"
                :class="[
                  'complectation-img',
                  item.img,
                  item.udachPlusVersion ? 'loaded' : '',
                ]"
                :alt="'#'"
                :floder="'complectation'"
                :mobile="false"
                :imgName="
                  item.udachPlusVersion
                    ? udachPlusVersion
                      ? item.udachPlusVersion.img
                      : item.img
                    : item.img
                "
                :lazyLoad="!item.udachPlusVersion"
              />
              <!-- v-if="break1280" -->
              <div
                @click="openModal(item)"
                :class="[
                  'plus',
                  'plus-' + (index + 1),
                  item.hover ? 'plus--active' : '',
                ]"
              >
                <svg
                  @mouseenter="hoverEnter(index)"
                  @mouseleave="hoverLeave(index)"
                  xmlns="http://www.w3.org/2000/svg"
                  width="48"
                  height="48"
                  viewBox="0 0 48 48"
                  fill="none"
                >
                  <circle
                    cx="24"
                    cy="24"
                    r="24"
                    fill="#047DD9"
                    fill-opacity="0.4"
                  />
                  <circle cx="24" cy="24" r="17" fill="#047DD9" />
                  <path
                    d="M22.672 32.944C22.4373 32.944 22.2453 32.8693 22.096 32.72C21.9467 32.5707 21.872 32.3787 21.872 32.144V26.096H15.952C15.7173 26.096 15.5253 26.0213 15.376 25.872C15.2267 25.7227 15.152 25.5413 15.152 25.328V23.312C15.152 23.0773 15.2267 22.8853 15.376 22.736C15.5253 22.5867 15.7173 22.512 15.952 22.512H21.872V16.656C21.872 16.4213 21.9467 16.2293 22.096 16.08C22.2453 15.9307 22.4373 15.856 22.672 15.856H24.88C25.1147 15.856 25.3067 15.9307 25.456 16.08C25.6053 16.2293 25.68 16.4213 25.68 16.656V22.512H31.6C31.8133 22.512 31.9947 22.5867 32.144 22.736C32.2933 22.8853 32.368 23.0773 32.368 23.312V25.328C32.368 25.5413 32.2933 25.7227 32.144 25.872C31.9947 26.0213 31.8133 26.096 31.6 26.096H25.68V32.144C25.68 32.3787 25.6053 32.5707 25.456 32.72C25.3067 32.8693 25.1147 32.944 24.88 32.944H22.672Z"
                    fill="white"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div id="complectation-modal" style="display: none">
      <div class="modal-wrapper">
        <my-image
          class="modal-wrapper__img"
          :alt="'автоклав крестьянка с тен'"
          :floder="'complectation'"
          :mobile="false"
          :imgName="modal.img"
        />
        <div class="modal-wrapper__title">
          <p v-html="modal.title"></p>
        </div>
        <div class="modal-wrapper__text">
          <p class="modal-text" v-html="modal.text"></p>

          <p class="char-title" v-if="modal.char">Характеристики:</p>
          <ul class="char-list" v-if="modal.char">
            <li v-for="(item, index) in modal.char" :key="index">
              <span v-html="item[0]"></span> —
              <b v-html="item[1]"></b>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import MyImage from "../UI/MyImage.vue";

export default {
  components: {
    MyImage,
  },
  data() {
    return {
      break1280: window.innerWidth < 1281,
      udachPlusVersion: true,
      modal: {
        img: "modal-1",
        text: "",
        title: "",
        char: [],
      },
      complect: [
        {
          name: "Электродвигатель с клеммной коробкой",
          modalName: "Электродвигатель с клеммной коробкой (1,1&nbsp;кВт)",
          img: "main",
          hover: false,
          imgModal: "modal-1",
          char: [
            ["Частота вращения", "3000 об/мин"],
            ["Вес", "9,85 кг"],
            ["Напряжение", "220 В"],
            ["Покрытие", "порошковая краска"],
            ["Длина кабеля питания", "1,3 м"],
          ],
          text: `
           Электродвигатель является однофазным, асинхронным, имеет встроенный конденсатор и вентилятор. Медная обмотка, короткозамкнутый ротор и отсутствие подвижных контактов гарантируют длительный срок эксплуатации изделия. Защита от брызг и пыли по классу IР44.`,
        },

        {
          name: "Узел натяжения с рычагом",
          hover: false,
          imgModal: "modal-2",
          text: `
          Включает три основных элемента:
          <br><br>
          <ul>
            <li>регулировочный винт — помогает центрировать ленту, в новой версии — даже не прерывая работу двигателя;
            </li>
             <li>бочкообразный вал — надёжно фиксирует ленту;
            </li>
             <li>рычаг с пружиной — позволяет скорректировать натяжение ленты.
            </li>
          </ul>
          <br>
          Такая система позволяет не только сделать работу более эффективной, но и увеличить срок эксплуатации комплектующих (в первую очередь — абразивных лент).`,
        },

        {
          name: "Рама (станина)",
          char: [
            ["Толщина", "5 мм"],
            ["Материал", "сталь Ст3"],
            ["Покрытие", "порошковая краска AMIKA (RAL9005)"],
          ],
          hover: false,
          imgModal: "modal-3",
          text: `Является платформой для крепления роликов, механизма натяжения, опорной площадки и керамической накладки. Покрыта матовой чёрной порошковой краской, запекающейся при 180 градусах. Это повышает её устойчивость к механическим воздействиям любого типа.`,
        },

        {
          name: "Ролики (2 шт.)",
          char: [
            ["Материал", "сталь Ст45"],
            ["Диаметр", "32 мм"],
            ["Тип подшипников", "закрытые"],
          ],
          hover: false,
          imgModal: "modal-4",
          text: `Дополнительные ролики способствуют плавному движению и снижению риска соскальзывания абразивной ленты. Для надёжной и эффективной работы шкива они расположены соосно, вертикально. Внутри них установлены качественные подшипники, не требующие смазки.`,
        },

        {
          name: "Приводной шкив",
          hover: false,
          imgModal: "modal-5",
          text: `Приводной шкив (ведущий ролик) позволяет передать крутящий момент двигателя, обеспечивая плавность движения и достаточную скорость ленты. Выполнен из износостойкой стали СТ-45.`,
          char: [
            ["Диаметр", "95 мм"],
            ["Класс прочности", "10,9"],
            ["Радиальное отклонение", "не более 0,05-0,07 мм"],
          ],
        },

        {
          name: "Керамическая накладка",
          char: [["Материал", "керамогранит"]],
          hover: false,
          imgModal: "modal-6",
          text: `Накладка, выполненная из керамогранита, позволяет снизить силу трения при скольжении ленты.`,
        },

        {
          name: "Опорный столик без транспортира",
          modalName: "Опорный столик",
          img: "table",
          hover: false,
          imgModal: "modal-7",

          char: [
            ["Размер", "166 х 70 мм"],
            ["Вес", "0,495 кг"],
            ["Диапазон вертикальной регулировки", "50°"],
            ["Толщина", "5 мм "],
            ["Материал", "сталь Ст3"],
            ["Покрытие", "химическое оксидирование"],
          ],

          udachPlusVersion: {
            name: "Опорный столик с транспортиром ",
            modalName: "Опорный столик с транспортиром ",

            img: "table_plus",
            imgModal: "modal-7_plus",
            char: [
              ["Размер", "166 х 70 мм"],
              ["Вес", "0,69 кг"],
              ["Диапазон вертикальной регулировки", "50°"],
              ["Диапазон горизонтальной регулировки", "75°"],
              ["Толщина", "5 мм "],
              ["Материал", "сталь Ст3"],
              ["Покрытие", "химическое оксидирование"],
            ],
            text: `Рабочая площадка устойчива к механическим воздействиям, надёжно крепится к раме (крепление — М6). Две шкалы, в вертикальной и горизонтальной плоскости, позволяют точно установить столик и заготовку, формировать сложные углы. Чтобы задействовать всю поверхность столика, можно снять вертикальный упор.`,
          },

          text: `Рабочая площадка устойчива к механическим воздействиям и надёжно крепится к станку (крепление М6). Горизонтальная шкала внизу столика позволяет максимально точно выставить столик относительно ленты.`,
        },

        {
          name: "Абразивные ленты (3&nbsp;шт.)",
          img: "lenta",
          hover: false,
          imgModal: "modal-8",
          text: `
          3 ленты, входящие в этот набор, подходят для работы с углеродистой и легированной сталью, цветными металлами, твёрдыми породами дерева. 
          <br>
          <br>
          основе — хлопчатобумажная лента, рабочее тело — электрокорунд.
          
          `,
          char: [
            ["Гритность", "Р60, P100, Р180"],
            ["Размер", "50 х 610 мм"],
          ],
        },

        {
          name: "Инструкция и гарантийный талон",
          img: "book",
          hover: false,
          imgModal: "modal-9",
          char: [["Гарантийный срок", "3 года"]],
          text: `Чтобы ваша работа с гриндером «Удачный» была максимально эффективной и безопасной, мы предоставляем инструкцию по эксплуатации. Она содержит подробное описание всех комплектующих, основные характеристики, специфику работы, ухода, меры предосторожности.
          <br>
          <br>
          Мы — производитель, уверенный в качестве собственного оборудования, потому предлагаем на свои изделия гарантию. Для гриндера «Удачный» это 3 года. Гарантийный талон — документ, на основании которого может быть осуществлён ремонт, замена оборудования либо возврат финансовых средств в течение срока гарантии.`,
        },
      ],
    };
  },
  methods: {
    hoverEnter(index) {
      this.complect[index].hover = true;
    },
    hoverLeave(index) {
      this.complect[index].hover = false;
    },

    modalSet(img, text, title, char) {
      this.modal.img = img;
      this.modal.text = text;
      this.modal.title = title;
      this.modal.char = char;
    },

    openModal(item) {
      if (item.udachPlusVersion) {
        if (this.udachPlusVersion) {
          this.modalSet(
            item.udachPlusVersion.imgModal,
            item.udachPlusVersion.text,
            item.modalName
              ? item.udachPlusVersion.modalName
              : item.udachPlusVersion.name,
            item.udachPlusVersion.char
          );
        } else {
          this.modalSet(
            item.imgModal,
            item.text,
            item.modalName ? item.modalName : item.name,
            item.char
          );
        }
      } else {
        this.modalSet(
          item.imgModal,
          item.text,
          item.modalName ? item.modalName : item.name,
          item.char
        );
      }

      setTimeout(() => {
        Fancybox.show([
          {
            src: "#complectation-modal",
          },
        ]);
      }, 400);
    },
  },

  mounted() {
    const windowbreakpoint = window.matchMedia("(max-width: 1280px)");
    const breakpointChecker = () => {
      if (!windowbreakpoint.matches) {
        this.break1280 = false;
      } else {
        this.break1280 = true;
      }
    };

    windowbreakpoint.addListener(breakpointChecker);
    breakpointChecker();
  },
};
</script>

<style lang="scss">
@import "../../scss/_global.scss";

#complectation {
  @extend %padd;
  overflow: hidden;
  background: #f9f9f9;

  $middle-line: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjk1IiBoZWlnaHQ9IjQ0IiB2aWV3Qm94PSIwIDAgNjk1IDQ0IiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8ZyBmaWx0ZXI9InVybCgjZmlsdGVyMF9kXzk0XzkxKSI+CjxwYXRoIGQ9Ik0xNyAxNi45MThDMTYuNDQ3NyAxNi45MTggMTYgMTcuMzY1NyAxNiAxNy45MThDMTYgMTguNDcwMyAxNi40NDc3IDE4LjkxOCAxNyAxOC45MThWMTYuOTE4Wk02NzkgMTcuOTE4TDY2OSAxMi4xNDQ1VjIzLjY5MTVMNjc5IDE3LjkxOFpNMTcgMTguOTE4SDY3MFYxNi45MThIMTdWMTguOTE4WiIgZmlsbD0iIzIzNjJCMSIvPgo8L2c+CjxkZWZzPgo8ZmlsdGVyIGlkPSJmaWx0ZXIwX2RfOTRfOTEiIHg9IjAiIHk9IjAuMTQ0NTMxIiB3aWR0aD0iNjk1IiBoZWlnaHQ9IjQzLjU0NjkiIGZpbHRlclVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgY29sb3ItaW50ZXJwb2xhdGlvbi1maWx0ZXJzPSJzUkdCIj4KPGZlRmxvb2QgZmxvb2Qtb3BhY2l0eT0iMCIgcmVzdWx0PSJCYWNrZ3JvdW5kSW1hZ2VGaXgiLz4KPGZlQ29sb3JNYXRyaXggaW49IlNvdXJjZUFscGhhIiB0eXBlPSJtYXRyaXgiIHZhbHVlcz0iMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMTI3IDAiIHJlc3VsdD0iaGFyZEFscGhhIi8+CjxmZU9mZnNldCBkeT0iNCIvPgo8ZmVHYXVzc2lhbkJsdXIgc3RkRGV2aWF0aW9uPSI4Ii8+CjxmZUNvbXBvc2l0ZSBpbjI9ImhhcmRBbHBoYSIgb3BlcmF0b3I9Im91dCIvPgo8ZmVDb2xvck1hdHJpeCB0eXBlPSJtYXRyaXgiIHZhbHVlcz0iMCAwIDAgMCAxIDAgMCAwIDAgMSAwIDAgMCAwIDEgMCAwIDAgMC42NSAwIi8+CjxmZUJsZW5kIG1vZGU9Im5vcm1hbCIgaW4yPSJCYWNrZ3JvdW5kSW1hZ2VGaXgiIHJlc3VsdD0iZWZmZWN0MV9kcm9wU2hhZG93Xzk0XzkxIi8+CjxmZUJsZW5kIG1vZGU9Im5vcm1hbCIgaW49IlNvdXJjZUdyYXBoaWMiIGluMj0iZWZmZWN0MV9kcm9wU2hhZG93Xzk0XzkxIiByZXN1bHQ9InNoYXBlIi8+CjwvZmlsdGVyPgo8L2RlZnM+Cjwvc3ZnPgo=);
  @keyframes pulse {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.1);
    }
    100% {
      transform: scale(1);
    }
  }

  .complectation-container {
    border-radius: 10px;
    background: #fff;
    box-shadow: 0px 4px 14px 0px rgba(111, 111, 111, 0.15);
    padding: 0 20px 50px;

    img:not(.loaded) {
      opacity: 0;
    }

    .img-wrap.loaded {
      img:not(.loaded) {
        opacity: 1;
      }
    }
  }

  .title-wrap {
    display: flex;
    gap: 30px;
    justify-content: center;
    flex-wrap: wrap;

    margin: 0 auto 50px;

    .complectation-toggle {
      display: flex;
      gap: 30px;
      justify-content: center;
      flex-wrap: wrap;
      align-self: center;
      width: 100%;
      max-width: 512px;

      @media (min-width: 1280px) {
        align-self: flex-start;
        padding-top: 20px;
      }

      @media (max-width: 768px) {
        gap: 15px;
        align-items: center;
      }

      .toggle-item {
        color: #2362b1;
        text-align: center;
        font-family: "Inter";
        font-size: 18px;
        font-style: normal;
        font-weight: 500;
        line-height: normal;
        white-space: nowrap;
        background: #fff;
        border-radius: 30px;
        border: 2px solid #2362b1;
        transition: all 0.3s;
        cursor: pointer;
        padding: 10px;
        max-width: 241px;
        width: 100%;

        &:hover {
          border: 2px solid rgba(35, 98, 177, 0.7);
          color: rgba(35, 98, 177, 0.7);
        }

        @media (max-width: 768px) {
          max-width: 148px;
          font-size: 16px;
        }

        &--active {
          color: #fff !important;
          background: #2362b1 !important;
        }
      }
    }

    .complectation-title {
      &-container {
        flex-direction: column;
        gap: 20px;
        align-items: center;
        display: flex;

        p {
          color: #646464;
          text-align: center;
          font-family: "Gilroy";
          font-size: 30px;
          font-style: normal;
          font-weight: 500;
          line-height: 123.333%;

          @include fluidFontSize(18, 30, 320, 992);
        }
      }
      h2 {
        color: #fff;
        text-align: center;
        font-family: "Gilroy";
        font-size: 44px;
        font-style: normal;
        font-weight: 600;
        line-height: 113.462%;
        text-transform: uppercase;

        @include fluidFontSize(22, 44, 320, 992);
        @media (min-width: 769px) {
          br {
            display: none;
          }
        }
      }

      padding: 10px 20px;
      border-radius: 0px 0px 10px 10px;
      background: #2362b1;

      @media (max-width: 992px) {
        margin: 0 auto;
      }
    }
  }

  .complectation-wrapper {
    display: grid;
    grid-template-columns: calc(342px + 20px) 1fr;
    max-width: 1178px;
    margin: 0 auto;

    @media (max-width: 1280px) {
      grid-template-columns: minmax(0, 336px) minmax(335px, 1fr);
      gap: 20px;
    }
    @media (max-width: 1090px) {
      grid-template-columns: minmax(0, 316px) minmax(335px, 1fr);
      gap: 20px;
    }
    // 309px

    @media (max-width: 992px) {
      grid-template-columns: 1fr;
    }

    &__items {
      grid-column: 1/2;
      grid-row: 1/2;
      z-index: 5;
      background: #fff;

      @media (min-width: 1281px) {
        padding: 80px 20px 80px 0;
      }

      @media (max-width: 992px) {
        display: none;
      }

      .complectation-item {
        border-radius: 10px;
        background-color: #f9f9f9;
        padding: 10px 20px;
        transition: background-color 0.4s;
        cursor: pointer;

        &:not(:last-child) {
          margin-bottom: 20px;
        }
        @media (min-width: 1281px) {
          &-6 {
            margin-bottom: 109px !important;
          }
        }

        p {
          color: #323232;
          font-family: "Gilroy";
          font-size: 22px;
          font-style: normal;
          font-weight: 500;
          line-height: 131.818%;

          @media (max-width: 1280px) {
            @include fluidFontSize(16, 22, 768, 1280);
          }
        }

        &--active {
          background-color: #2362b1;

          p {
            color: #fff;
          }
        }
      }
    }

    &__imgs {
      grid-column: 1/-1;
      grid-row: 1/2;
      overflow: hidden;
      z-index: 4;
      position: relative;

      // @media (min-width: 1281px) {
      //   .arrow {
      //     &::before {
      //       content: $middle-line;
      //       position: absolute;
      //     }

      //     &-1 {
      //       &::before {
      //         top: 96px;
      //         right: 49%;
      //         z-index: 1;
      //       }
      //     }

      //     &-2 {
      //       &::before {
      //         top: 181px;
      //         right: 15%;
      //       }
      //     }

      //     &-3 {
      //       &::before {
      //         top: 249px;
      //         right: 20%;
      //       }
      //     }

      //     &-4 {
      //       &::before {
      //         top: 318px;
      //         right: 23.5%;
      //       }
      //     }

      //     &-5 {
      //       &::before {
      //         top: 388px;
      //         right: 12%;
      //       }
      //     }

      //     &-6 {
      //       &::before {
      //         top: 458px;
      //         right: 23%;
      //       }
      //     }

      //     &-7 {
      //       &::before {
      //         top: 630px;
      //         z-index: 1;
      //         right: 49%;
      //       }
      //     }

      //     &-8 {
      //       &::before {
      //         top: 713px;
      //         right: 25%;
      //         z-index: 1;
      //       }
      //     }

      //     &-9 {
      //       &::before {
      //         top: 801px;
      //         right: 54%;
      //       }
      //     }
      //   }
      // }

      // @media (max-width: 1280px) {
      grid-column: 2/3;

      .plus {
        position: absolute;
        cursor: pointer;
        z-index: 10;
        animation: pulse 2s linear infinite;

        &:hover {
          animation: none;
        }

        svg {
          * {
            transition: all 0.4s;
          }

          @media (max-width: 576px) {
            transform: scale(0.5);
          }
        }

        &--active {
          svg {
            circle {
              fill: #f9f9f9;

              &:last-child {
                fill: #f9f9f9;
                opacity: 0.7;
              }
            }

            path {
              fill: #323232;
              opacity: 0.7;
            }
          }
        }

        &-1 {
          top: 98px;
          right: 358px;

          @media (max-width: 1280px) {
            top: 64px;
            right: 268px;
          }

          @media (max-width: 576px) {
            top: 24px;
            left: 64px;
            right: auto;
          }
        }

        &-2 {
          top: 92px;
          right: 80px;

          @media (max-width: 576px) {
            top: 43px;
            right: 21px;
          }
        }

        &-3 {
          top: 183px;
          right: 169px;
          @media (max-width: 1280px) {
            top: 131px;
            right: 120px;
          }
          @media (max-width: 576px) {
            top: 64px;
            right: 66px;
          }
        }

        &-4 {
          top: 284px;
          right: 216px;

          @media (max-width: 1280px) {
            top: 186px;
            right: 156px;
          }

          @media (max-width: 576px) {
            top: 107px;
            right: 65px;
          }
        }

        &-5 {
          top: 278px;
          right: 95px;
          @media (max-width: 1280px) {
            top: 219px;
            right: 77px;
          }

          @media (max-width: 576px) {
            top: 115px;
            right: 13px;
          }
        }

        &-6 {
          top: 401px;
          right: 232px;
          @media (max-width: 1280px) {
            top: 292px;
            right: 164px;
          }

          @media (max-width: 576px) {
            top: 147px;
            right: 78px;
          }
        }

        &-7 {
          bottom: 244px;
          left: 29%;
          @media (max-width: 1280px) {
            top: 403px;
            left: 20%;
          }

          @media (max-width: 576px) {
            top: auto;
            bottom: 100px;
            left: 10%;
          }
        }

        &-8 {
          bottom: 226px;
          right: 30%;
          @media (max-width: 1280px) {
            top: 418px;
            right: 25%;
          }
          @media (max-width: 576px) {
            top: auto;
            bottom: 85px;
          }
        }

        &-9 {
          bottom: 56px;
          right: 61%;

          @media (max-width: 576px) {
            bottom: 18px;
            right: 59%;
          }
        }
      }
      // }

      @media (max-width: 992px) {
        align-self: center;
        min-height: 630px;
        max-width: 540px;
        grid-column: 1/-1;
        width: 100%;
        margin: 0 auto;
      }

      @media (max-width: 576px) {
        min-height: 360px;
        max-width: 240px;
      }

      .complectation-img {
        position: absolute;

        img {
          max-width: 100%;
        }

        &.main {
          right: 0;
          top: 0;
          width: 77%;

          @media (max-width: 1400px) and (min-width: 1281px) {
            width: 83%;
            min-width: 594px;
          }

          @media (max-width: 1280px) {
            width: 440px;
            max-width: 100%;
          }
        }

        &.lenta {
          right: 12px;
          width: 42%;
          bottom: 142px;

          @media (max-width: 1280px) {
            width: 36%;
          }
          @media (max-width: 576px) {
            width: 38%;
            bottom: 83px;
          }
        }

        &.table {
          bottom: 150px;
          left: 10%;
          width: 39%;

          @media (max-width: 1280px) {
            width: 36%;
            right: 60%;
          }
          @media (max-width: 576px) {
            width: 40%;
            bottom: 81px;
          }
        }

        &.book {
          bottom: 35px;
          left: 19%;

          @media (max-width: 1280px) {
            width: 94px;
          }

          @media (max-width: 576px) {
            width: 76px;
            bottom: 0;
          }
        }
      }
    }
  }
}

#complectation-modal {
  @extend %modal;

  .modal-wrapper {
    @media (min-width: 769px) {
      display: grid;
      grid-template-columns: 1.05fr 1.1fr;
    }

    &__title {
      font-weight: 700;
    }

    .modal-text {
      ul {
        padding-left: 20px;
        li {
          list-style: disc;

          &:not(:last-child) {
            margin-bottom: 5px;
          }
        }
      }
    }

    .char-title {
      margin: 20px 0 10px;
      color: #323232;
      font-family: "Gilroy";
      font-size: 20px;
      font-style: normal;
      font-weight: 600;
      line-height: 27px; /* 135% */

      @media (max-width: 768px) {
        margin: 6px 0;
        font-size: 18px;
      }
    }

    .char-list {
      padding-left: 20px;

      li {
        color: #323232;
        font-family: "Gilroy";
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: 23px;
        list-style: disc;
        b {
          font-weight: 600;
        }
      }
    }
  }
}
</style>