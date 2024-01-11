<template>
  <section id="things">
    <div class="container">
      <div class="title">
        <h2>«УДАЧНЫЙ» — ГРИНДЕР БОЛЬШИХ ВОЗМОЖНОСТЕЙ</h2>
        <p class="subtitle">
          С профессиональным станком любая задача станет проще
        </p>
      </div>
      <div class="things-wrapper">
        <div class="things-slider">
          <div class="swiper-wrapper">
            <div
              v-for="(item, index) in photoList"
              :key="index"
              class="swiper-slide"
            >
              <my-image
                :alt="item.tltle"
                :floder="'things'"
                :media="577"
                :imgName="item.img"
              />
            </div>
          </div>
          <div class="things-pagination"></div>
        </div>
        <div class="things-offer">
          <p>от 16 990 РУБ.</p>
          <button @click="openModal" class="button">
            {{ !getMobile ? "Оставить заявку" : "Заказать" }}
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
import MyImage from "../UI/MyImage.vue";
import { Swiper, Pagination } from "swiper";

export default {
  computed: mapGetters(["getMobile"]),
  components: {
    MyImage,
  },
  data() {
    return {
      photoList: [
        {
          tltle: "Затачивать",
          img: "thing-1",
        },

        {
          tltle: "Торцевать",
          img: "thing-2",
        },

        {
          tltle: "Торцевать",
          img: "thing-3",
        },

        {
          tltle: "Торцевать",
          img: "thing-4",
        },
      ],
    };
  },
  methods: {
    ...mapMutations(["changeUserRassrochka"]),

    openModal() {
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
  mounted() {
    let myPhotoSwiper;
    const photoSwiper = () => {
      myPhotoSwiper = new Swiper(".things-slider", {
        slidesPerView: 4,
        slidesPerGroup: 1,
        spaceBetween: 20,
        grabCursor: true,
        loop: false,
        pagination: {
          el: ".things-pagination",
          type: "progressbar",
        },
        modules: [Pagination],
        breakpoints: {
          0: {
            slidesPerView: "auto",
            spaceBetween: 10,
            loop: false,
          },

          577: {
            slidesPerView: 2.2,
            spaceBetween: 20,
          },

          768: {
            slidesPerView: 3.2,
            spaceBetween: 20,
          },

          993: {
            slidesPerView: 4,

            slidesOffsetAfter: 0,
            slidesOffsetBefore: 0,
          },
        },
      });
    };
    photoSwiper();
  },
};
</script>

<style lang="scss">
@import "../../scss/_global.scss";

#things {
  @extend %padd;
  overflow: hidden;

  .things-wrapper {
    .swiper-slide {
      @include aspect() {
        aspect-ratio: 110/189;

        @media (max-width: 576px) {
          aspect-ratio: 250/289;
        }
      }

      @media (max-width: 576px) {
        max-width: 250px;
      }
    }

    .things-offer {
      display: flex;
      align-items: center;
      gap: 30px;
      justify-content: center;
      margin-top: 50px;
      flex-wrap: wrap;

      @media (max-width: 576px) {
        flex-direction: column;
        gap: 10px;
        margin-top: 30px;
      }

      p {
        color: #323232;
        font-family: "Gilroy";
        font-size: 27px;
        font-style: normal;
        font-weight: 600;
        line-height: normal;
        white-space: nowrap;

        @media (max-width: 576px) {
          font-size: 18px;
        }
      }
    }
  }

  .things-pagination {
    @media (min-width: 993px) {
      display: none;
    }

    margin-top: 10px;
    height: 2px;
    position: relative;
    background: #cecece;
    .swiper-pagination-progressbar-fill {
      background: #047dd9;
    }
  }
}
</style>