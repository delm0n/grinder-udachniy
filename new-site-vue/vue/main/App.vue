<template>
  <div>
    <header>
      <header-top :navigations="nav" :refHeader="refHeader" />
      <header-main />
    </header>

    <banner />
    <!-- <my-video /> -->
    <things />
    <comparison />
    <video-block />
    <structure />
    <complectation />
    <made />
    <model />
    <tinkoff-block />
    <video-review />
    <faq />
    <feedback />
    <photo />
    <question />
    <!-- <my-map /> -->
    <my-footer />

    <tinkoff-modal />
    <modal-call />
    <modal-success />
    <modal-order />
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
import { defineAsyncComponent } from "vue";
import HeaderTop from "../components/HeaderTopV2.vue";
import HeaderMain from "../components/HeaderMain.vue";
import Structure from "../components/Structure.vue";
import Model from "../components/Model-v2.vue";
import Banner from "../components/Banner.vue";
// import MyVideo from "../components/Video.vue";
import TinkoffModal from "../components/TinkoffModal.vue";
import Comparison from "../components/Comparison.vue";
import Things from "../components/Things-v2.vue";
import ModalCall from "../components/ModalCall.vue";
import ModalOrder from "../components/ModalOrder.vue";
import ModalSuccess from "../components/ModalSuccess.vue";

export default {
  data() {
    return {
      nav: [
        {
          name: "Комплектация и цены",
          selector: "#complectation",
        },

        {
          name: "Доставка и оплата",
          selector: "#tinkoff-block",
        },

        {
          name: "Отзывы",
          selector: "#feedback",
        },
      ],

      refHeader: "#modal-call",
    };
  },
  methods: mapMutations(["setMobile"]),

  mounted() {
    const windowbreakpoint = window.matchMedia("(max-width: 768px)");
    const breakpointChecker = () => {
      if (!windowbreakpoint.matches) {
        this.setMobile(false);
      } else {
        this.setMobile(true);
      }
    };

    windowbreakpoint.addListener(breakpointChecker);
    breakpointChecker();
  },
  components: {
    HeaderTop,
    HeaderMain,
    Banner,
    Structure,
    Things,
    Comparison,
    VideoBlock: defineAsyncComponent(() =>
      import("../components/VideoBlock.vue")
    ),
    TinkoffBlock: defineAsyncComponent(() =>
      import("../components/TinkoffBlock.vue")
    ),
    Question: defineAsyncComponent(() => import("../components/Question.vue")),
    Model,
    Faq: defineAsyncComponent(() => import("../components/FAQ.vue")),
    Photo: defineAsyncComponent(() => import("../components/Photo.vue")),
    Made: defineAsyncComponent(() => import("../components/Made.vue")),
    Complectation: defineAsyncComponent(() =>
      import("../components/Complectation.vue")
    ),

    MyFooter: defineAsyncComponent(() => import("../components/Footer.vue")),
    TinkoffModal,
    Feedback: defineAsyncComponent(() => import("../components/Feedback.vue")),
    VideoReview: defineAsyncComponent(() =>
      import("../components/VideoReview.vue")
    ),
    ModalCall,
    ModalSuccess,
    ModalOrder,
  },
};
</script>

<style lang="scss">
@import "../../scss/_fonts.scss";
@import "../../scss/_main.scss";
</style>
