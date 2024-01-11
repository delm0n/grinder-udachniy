<template>
  <div>
    <div v-html="getMetric"></div>

    <template v-if="rassr">
      <input
        type="hidden"
        class="comment"
        name="comment"
        :value="getUserRassrochka ? 'Покупка в рассрочку.' : ''"
      />
    </template>

    <template v-if="main">
      <template v-if="dops">
        <div :key="index" v-for="(dop, index) in getDops">
          <input
            type="hidden"
            :name="'quantity[' + dop.id + ']'"
            :value="Number(dop.active)"
          /><input type="hidden" name="id[]" :value="dop.id" />
        </div>
      </template>

      <input type="hidden" name="id[]" :value="getMainId" />
      <input type="hidden" :name="'quantity[' + getMainId + ']'" value="1" />
    </template>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: mapGetters([
    "getUserRassrochka",
    "getMetric",
    "getMainId",
    "getDops",
  ]),
  props: {
    dops: {
      type: Boolean,
      default: true,
    },
    rassr: {
      type: Boolean,
      default: false,
    },
    main: {
      type: Boolean,
      default: false,
    },
  },
};
</script>