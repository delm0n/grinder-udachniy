<template>
  <section id="structure">
    <div class="container">
      <div class="title">
        <h2>Гриндер «УДАЧНЫй» — совершенство в каждой детали</h2>
        <p class="subtitle">
          {{ structureList.length }}
          {{ structureList.length > 4 ? "аргументов" : "аргумента" }} в пользу
          уникальной конструкции
        </p>
      </div>
      <div class="structure-wrapper">
        <structure-item
          @show-modal="showModal"
          v-for="(item, index) in structureList"
          :key="index"
          :item="item"
          :index="index"
        />
      </div>

      <div class="structure-label">
        <my-image
          class="structure-label__icon"
          :alt="'#'"
          :floder="'structure'"
          :imgName="'label'"
          :mobile="false"
        />
        <p>
          Вы получаете гриндер с мощным двигателем, способным долго работать без
          перегрева. Его конструкция проста, надёжна и функциональна. Упор
          достаточно зафиксировать один раз, не замеряя угол перед каждой
          заточкой. Положение ленты можно регулировать даже в процессе работы.
        </p>
      </div>
    </div>

    <div id="structure-modal">
      <div class="structure-item structure-modal">
        <div class="structure-modal__img">
          <my-image
            v-for="(img, i) in [
              structureModal.imgList[0],
              structureModal.imgList[1],
            ]"
            :key="i"
            :alt="'#'"
            :floder="'structure'"
            :imgName="img"
            :mobile="false"
          />
        </div>
        <div class="structure-item__content structure-modal__content">
          <h3 v-html="structureModal.title"></h3>
          <p class="decr" v-html="structureModal.decr"></p>
          <ul>
            <li v-for="(li, i) in structureModal.list" :key="i">
              <b v-html="li.title"></b>
              <span v-html="li.text"></span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import StructureItem from "./StructureItem.vue";
import MyImage from "../UI/MyImage.vue";

export default {
  components: {
    StructureItem,
    MyImage,
  },
  data() {
    return {
      structureList: [
        {
          label: {
            text: "Новинка",
            color: "red",
          },
          title: "Модернизированный опорный столик",
          decr: "Позволит выполнить сложные углы сразу в двух плоскостях. Конструкция не имеет аналогов.",
          list: [
            {
              title: "Удобная регулировка угла наклона и высоты",
              text: "Выберите оптимальное положение (диапазон изменения угла упора — 50 градусов) и зафиксируйте столик.",
            },

            {
              title: "Упор с вертикальной и горизонтальной шкалой",
              text: "У модели «Удачный Плюс» есть транспортир. Упор достаточно зафиксировать один раз, не замеряя угол перед каждой заточкой. А если нужно обработать деталь по всей плоскости, упор можно снять.",
            },

            {
              title: "Площадка столика (толщина — 5 мм)",
              text: "Надёжна и устойчива к механическим воздействиям за счёт химического оксидирования. Позволяет проводить грубую обработку металла, снимать ржавчину без ущерба для поверхности.",
            },
          ],
          video: {
            poster: "structure-1-1",
            src: "structure-1",
          },
          imgList: [
            "structure-1-3",
            "structure-1-5",
            "structure-1-2",
            "structure-1-4",
          ],
        },

        {
          label: {
            text: "15 метров в секунду",
            color: "yellow",
          },
          title: "Мощный однофазный двигатель (1,1 кВт)",
          decr: "Золотой стандарт для гриндера. На одном станке вы сможете аккуратно шлифовать дерево и быстро снимать ржавчину с металла.",
          list: [
            {
              title: "Скорость движения ленты — 15 м/сек",
              text: "Высокая производительность, присущая профессиональному станку (скорость аналогов — до 5 м/сек). Сложные задачи — буквально за несколько минут!",
            },

            {
              title: "Работает без перегрева",
              text: "Качественное охлаждение. Эффективный встроенный вентилятор позволяет делать паузы в работе не чаще, чем 1 раз в час. Для аналогов обязательны перерывы каждые 5-20 минут.",
            },

            {
              title: "Длительная эксплуатация",
              text: "Двигатель защищён от брызг и пыли по классу IP44. Медная обмотка, короткозамкнутый ротор, отсутствие подвижных контактов — гарантии безопасности.",
            },
          ],
          imgList: ["structure-2-3", "structure-2-2"],
        },

        {
          label: {
            text: "Увеличенный жизненный цикл роликов",
            color: "blue",
          },
          title: "Правильная система натяжения ленты",
          decr: "Новый механизм создан с учётом всех нюансов и не имеет аналогов. Настройка — простая и удобная.",
          list: [
            {
              title: "Экономия на расходных материалах",
              text: "Эффективное натяжение ленты способствует её равномерному стиранию. В результате срок эксплуатации абразива в 2-3 раза больше, чем у аналогов.",
            },

            {
              title: "Приводной шкив и ролики расположены строго вертикально",
              text: "Исключены неожиданные и частые смещения, обрывы ленты.",
            },

            {
              title: "Центрирование ленты без отключения гриндера",
              text: "Новый регулировочный винт позволит изменить её положение с помощью пары движений, не останавливая систему.",
            },
          ],
          video: {
            poster: "structure-3-1",
            src: "structure-3",
          },
          imgList: [
            "structure-2-4",
            "structure-3-3",
            "structure-3-2",
            // "structure-3-4",
          ],
        },

        {
          label: {
            text: "Доставка в прочном деревянном ящике",
            color: "green",
          },
          title: "Минимальное количество составных элементов",
          decr: "Вы экономите на запчастях. Конструкция гриндера настолько продуманна и проста, что ломаться там попросту нечему.",
          list: [
            {
              title: "Безопасная транспортировка",
              text: "В деревянном ящике гриндер поставляется в полной сборке. Изделие прикреплено к основанию, и ему не страшна даже длительная транспортировка.",
            },

            {
              title: "Быстрая сборка",
              text: "Чтобы приступить к работе, просто установите нужную ленту, отрегулируйте её длину и закрепите основание гриндера. Это займёт не более 5 минут!",
            },

            {
              title: "Мобильность",
              text: "Компактный гриндер не займёт много места на рабочем столе. Вес — менее 15 кг, его легко перенести или перевезти.",
            },
          ],
          imgList: [
            "structure-4-1",
            "structure-4-2",
            "structure-4-3",
            "structure-4-4",
          ],
        },
      ],
      structureModal: {
        title: "",
        decr: "",
        list: [
          {
            title: "",
            text: "",
          },
        ],
        imgList: [],
      },
    };
  },
  methods: {
    showModal(item) {
      this.structureModal.title = item.title;
      this.structureModal.decr = item.decr;
      this.structureModal.list = item.list;
      this.structureModal.imgList = item.imgList;

      setTimeout(() => {
        Fancybox.show([
          {
            src: "#structure-modal",
          },
        ]);
      }, 100);
    },
  },
};
</script>

<style lang="scss">
@import "../../scss/_global.scss";

#structure {
  @extend %padd;
  overflow: hidden;

  .structure-wrapper {
    align-items: stretch;
    display: flex;
    flex-direction: column;
    gap: 50px;
  }

  .structure-label {
    margin-top: 50px;
    padding: 30px;
    padding-left: 40px;
    position: relative;
    border-radius: 10px;
    border: 3px solid #2362b1;

    @media (max-width: 768px) {
      padding: 20px;
      padding-left: 25px;

      &__icon {
        width: 20px;
      }
    }

    &__icon {
      position: absolute;
      left: 0;
      top: 30px;
    }

    p {
      color: #323232;
      font-family: "Gilroy";
      font-size: 22px;
      font-style: normal;
      font-weight: 400;
      line-height: 131.818%;

      @include fluidFontSize(18, 22, 992, 1920);

      @media (max-width: 768px) {
        font-size: 16px;
      }
    }
  }
}

#structure-modal {
  @extend %modal;
  .structure-modal {
    display: grid;
    grid-template-columns: 1.1fr 1.05fr;
    gap: 0 30px;
    align-items: center;
    color: #323232;
    font-family: "Gilroy";
    font-style: normal;

    @media (max-width: 768px) {
      grid-template-columns: 1fr;
      gap: 20px;
    }

    &__img {
      .img-wrap {
        &:not(:last-child) {
          margin-bottom: 30px;
        }
      }
      @media (max-width: 768px) {
        display: none;
      }
    }

    &__content {
      max-width: 100%;

      h3 {
        border: none;
      }

      .decr,
      ul,
      span {
        display: flex;
      }
    }
  }
}
</style>