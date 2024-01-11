<template>
  <section id="things">
    <div class="container">
      <div class="title">
        <h2>
          Откройте для себя <br />
          профессиональный станок
        </h2>
        <p class="subtitle">Который позволит вам за считанные минуты:</p>
      </div>
      <div class="things-wrapper">
        <div v-if="!getMobile" class="photo-grid">
          <div
            class="photo-grid__column"
            v-for="(photo, index) in photoList"
            :key="index"
          >
            <div class="photo-grid__item">
              <picture>
                <source
                  :srcset="
                    img
                      ? 'new-site-vue/build/images/things/' +
                        photo.up.src +
                        '.webp'
                      : ''
                  "
                  type="image/webp"
                />
                <img
                  :style="'aspect-ratio: ' + photo.up.asprat"
                  :src="
                    img
                      ? 'new-site-vue/build/images/things/' +
                        photo.up.src +
                        '.png'
                      : ''
                  "
                  alt="Фото гриндера"
                />
              </picture>
            </div>

            <div class="photo-grid__item">
              <picture>
                <source
                  :srcset="
                    img
                      ? 'new-site-vue/build/images/things/' +
                        photo.down.src +
                        '.webp'
                      : ''
                  "
                  type="image/webp"
                />
                <img
                  :style="'aspect-ratio: ' + photo.down.asprat"
                  :src="
                    img
                      ? 'new-site-vue/build/images/things/' +
                        photo.down.src +
                        '.png'
                      : ''
                  "
                  alt="Фото гриндера"
                />
              </picture>
            </div>
          </div>
        </div>

        <div v-if="getMobile" class="things-slider">
          <div class="swiper-wrapper">
            <div
              v-for="(slide, index) in photoList"
              :key="index"
              class="swiper-slide"
            >
              <div class="photo-wrapper__img">
                <picture>
                  <source
                    :srcset="
                      'new-site-vue/build/images/things/' +
                      slide.up.src +
                      '@05x.webp'
                    "
                    type="image/webp"
                  />
                  <img
                    style="aspect-ratio: 1/1"
                    :src="
                      'new-site-vue/build/images/things/' +
                      slide.up.src +
                      '@05x.png'
                    "
                    alt="Фото гриндера"
                  />
                </picture>
              </div>
            </div>

            <div
              v-for="(slide, index) in photoList"
              :key="index"
              class="swiper-slide"
            >
              <div class="photo-wrapper__img">
                <picture>
                  <source
                    :srcset="
                      'new-site-vue/build/images/things/' +
                      slide.down.src +
                      '@05x.webp'
                    "
                    type="image/webp"
                  />
                  <img
                    style="aspect-ratio: 1/1"
                    :src="
                      'new-site-vue/build/images/things/' +
                      slide.down.src +
                      '@05x.png'
                    "
                    alt="Фото гриндера"
                  />
                </picture>
              </div>
            </div>
          </div>
          <div class="things-slider-pagination"></div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapGetters } from "vuex";
import { Swiper, Pagination } from "swiper";
import uuidv4 from "../mixins/uuidv4";

export default {
  computed: mapGetters(["getWebp", "getMobile"]),
  data() {
    return {
      img: false,
      id: null,
      photoList: [
        {
          up: {
            src: "photo-1",
            asprat: "453/466",
          },

          down: {
            src: "photo-4",
            asprat: "453/371",
          },
        },

        {
          up: {
            src: "photo-2",
            asprat: "227/150",
          },

          down: {
            src: "photo-5",
            asprat: "227/270",
          },
        },

        {
          up: {
            src: "photo-3",
            asprat: "151/180",
          },

          down: {
            src: "photo-6",
            asprat: "453/293",
          },
        },
      ],
    };
  },
  mixins: [uuidv4],
  mounted() {
    this.id = this.uuidv4();

    if (this.img == false) {
      this.gsap.timeline({
        delay: 4,
        scrollTrigger: {
          id: this.id,
          once: true,
          trigger: "#things",
          start: "-60% bottom",
          onEnter: this.loadImg,
          onEnterBack: this.loadImg,
        },
      });
    }

    let myPhotoSwiper;
    const photoSwiper = () => {
      myPhotoSwiper = new Swiper(".things-slider", {
        slidesPerView: 1,
        slidesPerGroup: 1,
        spaceBetween: 20,
        grabCursor: true,
        loop: true,
        pagination: {
          el: ".things-slider-pagination",
          type: "bullets",
          clickable: true,
        },

        breakpoints: {
          0: {
            slidesPerView: 1.3,
            spaceBetween: 20,
            loop: false,
            slidesOffsetAfter: 20,
            slidesOffsetBefore: 20,
          },

          577: {
            slidesPerView: 1,
            spaceBetween: 20,
            loop: true,
            slidesOffsetAfter: 0,
            slidesOffsetBefore: 0,
          },
        },

        modules: [Pagination],
      });
    };

    const photoSwiperbreakpoint = window.matchMedia("(min-width: 769px)");
    const breakpointChecker = () => {
      if (!photoSwiperbreakpoint.matches) {
        // this.mobile = false;
        setTimeout(() => {
          return photoSwiper();
        }, 20);
      } else {
        // this.mobile = true;

        setTimeout(() => {
          if (myPhotoSwiper) {
            return myPhotoSwiper.destroy(true, true);
          }
        }, 10);
      }
    };

    photoSwiperbreakpoint.addListener(breakpointChecker);
    breakpointChecker();
  },
  methods: {
    loadImg() {
      this.img = true;
    },
  },
};
</script>

<style lang="scss">
@import "../../scss/_global.scss";

#things {
  @extend %padd;
  overflow: hidden;
  background: #f9f9f9;

  img {
    max-width: 100%;

    &[src=""] {
      opacity: 0;
    }
  }

  .title h2 {
    br {
      @media (min-width: 1281px) {
        display: none;
      }
    }
  }

  .things-wrapper {
    @media (max-width: 576px) {
      width: calc(100% + 40px);
      transform: translateX(-20px);
    }

    .photo-grid {
      grid-template-columns: repeat(3, 1fr);
      gap: 30px;
      display: grid;

      &__column {
        display: flex;
        flex-direction: column;
        gap: 20px;
      }

      &__item {
        display: block;
        border-radius: 10px;
        // border: 2px solid #b9b9b9;
        background: #e6e6e6;
        overflow: hidden;
        width: 100%;
        // cursor: zoom-in;

        &:hover {
          img {
            transform: scale(1.05);
          }
        }
      }

      img {
        transition: transform 0.4s;
        transform: scale(1);
        width: 100%;
      }
    }

    .things-slider {
      picture {
        justify-content: center;
      }
      overflow: hidden;

      &-pagination {
        @media (min-width: 769px) {
          display: none;
        }
        padding-top: 20px;
        margin: 0;
        display: flex;
        gap: 10px;
        align-items: center;
        justify-content: center;

        @media (max-width: 576px) {
          gap: 5px;
        }

        .swiper-pagination-bullet {
          width: 10px;
          height: 10px;
          @media (max-width: 576px) {
            width: 7px;
            height: 7px;
          }
          border: 1px solid #323232;
          background: #fff;
          border-radius: 100%;
          margin: 0;
          opacity: 1;

          &-active {
            background: #323232;
          }
        }
      }
    }
  }
}
</style>