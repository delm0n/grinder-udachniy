<template>
  <section id="faq">
    <div class="container">
      <div class="title">
        <h2>Часто задаваемые вопросы</h2>
      </div>
      <div class="faq-wrapper">
        <div v-for="(item, index) in questions" :key="index" class="faq-item">
          <div @click="showHide(index)" class="faq-item__title">
            <h3>
              <span> ? </span>
              <b v-html="item.title"> </b>
            </h3>
            <svg
              :style="
                item.open
                  ? 'transform: rotate(180deg)'
                  : 'transform: rotate(0deg)'
              "
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              viewBox="0 0 30 30"
              fill="none"
            >
              <path
                d="M3 3L13.3572 11.7638C14.0168 12.3219 14.9832 12.3219 15.6428 11.7638L26 3"
                stroke="#FED740"
                stroke-width="5.30769"
                stroke-linecap="round"
              />
              <path
                d="M3 16.2695L13.3572 25.0333C14.0168 25.5915 14.9832 25.5915 15.6428 25.0333L26 16.2695"
                stroke="#FED740"
                stroke-width="5.30769"
                stroke-linecap="round"
              />
            </svg>
          </div>

          <collapse :when="item.open">
            <div class="faq-item__content">
              <div class="text-box">
                <p v-html="item.content"></p>
              </div>
            </div>
          </collapse>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { Collapse } from "vue-collapsed";

export default {
  components: {
    Collapse,
  },

  data() {
    return {
      questions: [
        {
          title: "Зачем на гриндере «Удачный» сразу 3 ленты в комплекте?",
          content:
            "Использование лент разной зернистости — необходимость для многофункционального гриндера. Мы предлагаем три типа лент (Р60, Р100 и Р180) с возможностью обработки металла, дерева, стекла, пластика и полимеров, керамики.",
          open: false,
        },
        {
          title:
            "Сколько времени гриндер «Удачный» может работать без перерыва?",
          content: `Согласно проведённым испытаниям, максимальное время непрерывной работы гриндера — 1,5 часа. При этом рекомендованное время непрерывной эксплуатации изделия — 35–40 мин. Далее желателен перерыв на 5–10 мин (чтобы могли остыть двигатель и узел натяжения). `,
          open: false,
        },
        {
          title: "Нужно ли менять ленту, если работаешь с разными материалами?",
          content: `Использовать одну ленту для работы с деревом и металлом нежелательно, лучше произвести её замену. Для замены ленты нужно надеть её на все ролики и приводной каток, отжав рукоятку. Далее завести ленту на прижимной ролик и опустить рукоятку. Пружина механизма подтягивания автоматически создаст достаточное натяжение, чтобы во время работы лента не могла слететь.`,
          open: false,
        },

        {
          title: "С каким напряжением сети работает гриндер «Удачный»?",
          content: `Гриндер «Удачный» работает от обычной сети с напряжением 220 В.`,
          open: false,
        },
        // {
        //   title:
        //     "Какие дополнительные устройства предлагаются с гриндером «Удачный» для расширения функционала?",
        //   content: `
        //  Можно использовать следующие устройства:
        //   <ul>
        //     <li>
        //       Модуль для выведения спусков — механизм для заточки ножей и изготовления ножей с нуля. Устанавливается на поворотном столике.
        //     </li>

        //      <li>
        //         Магнитный угол — устройство для удобной сварки труб, отторцованных с помощью гриндера.
        //     </li>
        //   </ul>
        //   `,
        //   open: false,
        // },

        {
          title: "Как работать с гриндером: в перчатках или без?",
          content: `Не рекомендуем использовать перчатки. Они могут зацепиться за неровную поверхность шлифовочной ленты и привести к травмам, порче оборудования.`,
          open: false,
        },
      ],
    };
  },

  methods: {
    showHide(i) {
      this.questions.forEach((element, index) => {
        index == i
          ? (element.open = element.open == true ? false : true)
          : (element.open = false);
      });
    },
  },
};
</script>

<style lang="scss">
@import "../../scss/_global.scss";

#faq {
  @extend %padd;
  overflow: hidden;
  background: #f5f5f5;

  .faq-item {
    &:not(:last-child) {
      margin-bottom: 30px;

      @media (max-width: 768px) {
        margin-bottom: 20px;
      }
    }

    &__title {
      border-radius: 10px;
      padding: 10px 30px;
      cursor: pointer;
      user-select: none;
      // min-height: 100px;
      display: flex;
      align-items: center;
      background: #fff;
      box-shadow: 0px 4px 14px 0px rgba(111, 111, 111, 0.15);
      gap: 15px;
      justify-content: space-between;

      background: #ffffff;
      border-radius: 10px;

      @media (max-width: 768px) {
        padding: 14px;
        min-height: 70px;
      }

      &:hover {
        h3 span {
          background-color: #fed740;
        }
      }

      h3 {
        display: flex;
        gap: 20px;
        align-items: center;

        b {
          color: #323232;
          font-family: "Gilroy";
          font-size: 22px;
          font-style: normal;
          font-weight: 400;
          line-height: 131.818%;

          @include fluidFontSize(18, 22, 993, 1920);

          @media (max-width: 576px) {
            font-size: 16px;
            line-height: 21px;
          }
        }

        span {
          flex-shrink: 0;
          transition: all 0.3s;
          border-radius: 100%;
          background-color: #2362b1;
          width: 30px;
          height: 30px;
          display: flex;
          align-items: center;
          justify-content: center;

          color: #fff;
          font-family: "Gilroy";
          font-size: 22.759px;
          font-style: normal;
          font-weight: 1000;
          line-height: 30px; /* 131.818% */

          @media (max-width: 576px) {
            display: none;
          }
        }
      }

      svg {
        flex-shrink: 0;
        transform-origin: center;
        transition: all 0.4s;
        width: 30px;
        height: 30px;

        @media (max-width: 992px) {
          width: 24px;
          height: 24px;
        }
      }
    }

    &__content {
      border-radius: 0px 0px 10px 10px;
      background: rgba(255, 255, 255, 0.5);

      transition: all 0.4s ease;
      max-width: 80%;
      margin: 0 auto;

      @media (max-width: 992px) {
        max-width: 95%;
      }

      .text-box {
        padding: 50px;

        @media (max-width: 1280px) {
          padding: 40px;
        }

        @media (max-width: 992px) {
          padding: 30px;
        }

        @media (max-width: 768px) {
          padding: 20px;
        }

        @media (max-width: 576px) {
          padding: 15px 10px;
        }

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

      p {
        color: #323232;
        font-family: "Gilroy";
        font-size: 22px;
        font-style: normal;
        font-weight: 300;
        line-height: 29px; /* 131.818% */

        @media (max-width: 768px) {
          font-size: 16px;
          line-height: 21px;
        }
      }
    }
  }
}
</style>
