import axios from "axios";
import { createStore } from "vuex";

export default createStore({
  state: {
    //initial data
    name: "홍길동",
    counter: 0,
    weatherData: {
      icon: "icon",
      temp: 0,
      text: "text",
      location: "location",
      city: "seoul",
    },
  },
  mutations: {
    //데이터 객체 값 변형 //선언 함수명(stats,매개변수) // 함수사용 = commit이용 $store.commit('함수명', '전달인자')
    addCount(state, payload) {
      if (payload > 0) {
        state.counter += payload;
      } else {
        state.counter++;
      }
    },
    updateData(state, payload) {
      state.weatherData.icon = payload.weather[0].icon;
      state.weatherData.temp = payload.main.temp;
      state.weatherData.text = payload.weather[0].description;
      state.weatherData.location = payload.sys.country;
      state.weatherData.city = payload.name;
    },
    onSearchCity(state, payload) {
      state.weatherData.city = payload;
    },
  },
  actions: {
    //비동기 데이터 가져오기 //선언 함수명(context){} // 사용 : $store.dispatch('함수') -> 뮤테이션으로보냄
    async getWeather(context) {
      const res = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${context.state.weatherData.city}&appid=4eedfeb184dc7cb08af6c0bd529c48b9`
      );
      console.log(res.data);
      context.commit("updateData", res.data);
    },
  },
});
