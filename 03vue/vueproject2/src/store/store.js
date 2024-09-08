import { createStore } from "vuex";

export default createStore({
  state: {
    mapMove: {
      moveLat: 0,
      moveLng: 0,
    },
    isModal: false,
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
    mapMoveSet(state, { lat, lng }) {
      state.mapMove.moveLat = lat;
      state.mapMove.moveLng = lng;
    },
    addUser(state, payload) {
      state.userData.push(payload);
    },
    deleteUser(state, payload) {
      state.userData = state.userData.filter((el) => el.franname !== payload);
    },
    updateUser(state, { index, updatedItem }) {
      if (index !== -1) {
        state.userData.splice(index, 1, updatedItem); 
      }
    },
  },
  getters: {
    positions(state) {
      return state.userData.map((user) => ({
        title: user.franname,
        latlng: new kakao.maps.LatLng(user.latitude, user.longitude),
        image: user.image, 
      }));
    },
    moveLat: (state) => state.moveLat,
    moveLng: (state) => state.moveLng,
  },
  actions: {
    mapMoveAct({ commit }, { lat, lng }) {
      commit('mapMoveSet', { lat, lng });
    },
  },
});
