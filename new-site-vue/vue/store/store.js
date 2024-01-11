import { createStore } from "vuex";
import { storePHP } from "./storePHP.js";
import { DOPTYPES } from "../../js/vars/dop-types";

export default createStore({
  modules: {
    storePHP,
  },
  state() {
    return {
      user: {
        name: "",
        phone: "",
        rassrochka: false,
      },

      mobile: window.innerWidth > 769,

      main: [
        {
          id: goods.grinder,
          price: goodsJson[goods.grinder].price,
          oldPrice: goodsJson[goods.grinder].oldPrice,

          selected: false,
          nameModel: "«Удачный»",
          img: "udachniy",
          name: "Гриндер «Удачный»",
          nameBanner: "Гриндер «Удачный»",
          sale: "35%",
          lentaSize: "610 х 50 мм",
          size: "365 х 371 х 239 мм",
          weight: "14,30 кг",

          upor: {
            have: "Нет",
            rangeV: "50°",
            rangeG: "отсутствует",
          },

          showMoreModel: false,

          charList: [
            ["Длина ленты", "610 мм"],
            ["Ширина ленты", "50 мм"],
            ["Диаметр приводного шкифа", "95 мм"],
            ["Диаметр роликов", "32 мм"],
            ["Размеры опорного столика", "166 х 70 мм"],
            ["Мощность двигателя", "1,1 кВт"],
          ],
        },

        {
          id: goods.grinder_plus,
          price: goodsJson[goods.grinder_plus].price,
          oldPrice: goodsJson[goods.grinder_plus].oldPrice,

          selected: true,
          nameModel: "Удачный Плюс",
          img: "udachniy_plus",
          name: "Гриндер «Удачный Плюс»",
          nameBanner: "Гриндер «Удачный Плюс» (с транспортиром)",
          sale: "45%",
          lentaSize: "610 х 50 мм",
          size: "365 х 371 х 239 мм",
          weight: "14,45 кг",

          upor: {
            have: "Да",
            rangeV: "50°",
            rangeG: "75°",
          },

          showMoreModel: false,

          charList: [
            ["Длина ленты", "610 мм"],
            ["Ширина ленты", "50 мм"],
            ["Диаметр приводного шкифа", "95 мм"],
            ["Диаметр роликов", "32 мм"],
            ["Размеры опорного столика", "166 х 70 мм"],
            ["Мощность двигателя", "1,1 кВт"],
          ],
        },
      ],

      dops: [
        {
          id: goods.naborlen1,
          price: goodsJson[goods.naborlen1].price,
          oldPrice: goodsJson[goods.naborlen1].oldPrice,
          sale: "29%",
          selected: false,
          name: "Набор запасных лент 610 х 50 мм (Р60,&nbsp;P100,&nbsp;Р180)",
          class: "lenta_dop",
          type: DOPTYPES.material,
          count: 0,
        },

        {
          id: goods.naborlen2,
          price: goodsJson[goods.naborlen2].price,
          oldPrice: goodsJson[goods.naborlen2].oldPrice,
          sale: "12%",
          selected: false,
          name: "Набор запасных лент 610 х 50 мм (Р180,&nbsp;P320,&nbsp;Р400)",
          class: "lenta_dop",
          type: DOPTYPES.material,
          count: 0,
        },

        {
          id: goods.ugol,
          price: goodsJson[goods.ugol].price,
          oldPrice: goodsJson[goods.ugol].oldPrice,
          sale: "25%",
          selected: false,
          name: "Магнитный угол для сварки",
          class: "ugol",
          type: DOPTYPES.other,
          count: 0,
        },

        {
          id: goods.goniometer,
          price: goodsJson[goods.goniometer].price,
          oldPrice: goodsJson[goods.goniometer].oldPrice,
          sale: "29%",
          selected: false,
          name: "Угломер электронный",
          class: "goniometer",
          type: DOPTYPES.other,
          count: 0,
        },
      ],
    };
  },
  mutations: {
    setMobile(state, value) {
      state.mobile = value;
    },

    changeUserRassrochka(state, value) {
      state.user.rassrochka = value;
    },

    selectMain(state, id) {
      state.main.forEach((element) => {
        element.id == id
          ? (element.selected = true)
          : (element.selected = false);
      });
    },

    selectDop(state, id) {
      state.dops.find((el) => el.id == id).selected = !state.dops.find(
        (el) => el.id == id
      ).selected;
    },

    setCount(state, arr_oper) {
      let dop = state.dops.find((el) => el.id == arr_oper[0]);

      if (arr_oper[1] == "plus") {
        if (dop.selected == false) {
          dop.selected = true;
        } else {
          dop.count < 11 ? dop.count++ : "";
        }
      } else {
        if (arr_oper[1] == "minus") {
          dop.count == 0 ? (dop.selected = false) : "";
          dop.count > 0 ? dop.count-- : "";
        }
      }
    },
  },
  getters: {
    getMobile(state) {
      return state.mobile;
    },

    getMainId(state) {
      return state.main.find((el) => el.selected).id;
    },

    getMainItem(state) {
      return state.main.find((el) => el.selected);
    },

    getMain(state) {
      return state.main;
    },

    getMainPrices(state) {
      return [state.main[0].price, state.main[0].oldPrice];
    },

    getDops(state) {
      return state.dops;
    },

    getUser(state) {
      return state.user;
    },
    getUserRassrochka(state) {
      return state.user.rassrochka;
    },

    getLastPrice(state) {
      return state.dops.reduce(function (sum, dop) {
        return dop.selected ? sum + dop.price : sum;
      }, state.main.find((el) => el.selected).price);
    },

    getLastPriceWithCount(state) {
      return state.dops.reduce(function (sum, dop) {
        return dop.selected ? sum + dop.price * (dop.count + 1) : sum;
      }, state.main.find((el) => el.selected).price);
    },

    getLastPriceStandartVersion(state) {
      return state.dops.reduce(function (sum, dop) {
        return dop.selected ? sum + dop.price : sum;
      }, state.main[0].price);
    },

    getLastOldPrice(state) {
      return state.dops.reduce(function (sum, dop) {
        return dop.selected ? sum + dop.oldPrice : sum;
      }, state.main.find((el) => el.selected).oldPrice);
    },
  },
});
