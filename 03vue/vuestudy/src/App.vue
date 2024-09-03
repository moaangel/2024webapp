<template>
   <NavbarView/>
   <div class="container">
      <h2>지금, 이 책</h2>
      <swiper :navigation="true" :modules="modules" class="mySwiper">
         <swiper-slide>
            <BookView :data="data" />
         </swiper-slide>
         <swiper-slide>
            <BookView :data="data" />
         </swiper-slide>
      </swiper>
   </div>
</template>
<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';

// Import Swiper styles
import 'swiper/css';

import 'swiper/css/navigation';

import './assets/style.css';

// import required modules
import { Navigation } from 'swiper/modules';
import bookdata from './assets/bookdata';
import BookView from './components/BookView.vue';
import NavbarView from './components/NavbarView.vue';

export default {
   components: {
      Swiper,
      SwiperSlide,
      BookView: BookView,
      NavbarView: NavbarView,
   },
   setup() {
      return {
         modules: [Navigation],
      };
   },
   data() {
      return {
         data: bookdata,
      };
   },
};
</script>
