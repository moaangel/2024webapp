import { createStore } from "vuex";

export default createStore({
  state: {
    userData: [
      {
        franname: "스타벅스 종로점",
        addr: "서울 종로구",
        latitude: 37.5707451369668,
        longitude: 126.983611410428,
        image: "https://picsum.photos/100",
      },
      {
        franname: "스타벅스 부산역점",
        addr: "부산 동구",
        latitude: 35.116562771472,
        longitude: 129.042034211943,
        image: "https://picsum.photos/100",
      },
      {
        franname: "스타벅스 고양점",
        addr: "경기도 고양시",
        latitude: 37.6584289395157,
        longitude: 126.831977751081,
        image: "https://picsum.photos/100",
      },
    ],
    isModal: false,
  },
  mutations: {
    addUser(state, payload) {
      state.userData.push(payload);
    },
    deleteUser(state, payload) {
      state.userData = state.userData.filter((el) => el.franname !== payload);
    },
  },
  actions: {},
});
