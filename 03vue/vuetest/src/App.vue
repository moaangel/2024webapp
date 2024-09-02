<template>
   <div class="container secWrap">
      <img src="./assets/images/hansome.jpg" alt="" />
      <div class="card">
         <h1>{{ title }}</h1>
         <p>❤️ {{ num }}</p>
         <p>대여 : {{ won }}</p>
      </div>
      {{ todos[1] }}
      <div v-for="(item, index) in todos" v-bind:key="index">{{ item }}</div>
      <div v-for="(item, i) in todos" :key="i">{{ item }}</div>
   </div>
</template>

<script>
export default {
   name: 'App',
   data() {
      return {
         title: '핸섬가이즈',
         num: '8.6',
         won: '11,000',
         todos: ['서울', '부산', '대구'],
      };
   },
};
</script>

<style lang="scss" scoped>
@import '@/assets/css/style.scss';
.secWrap {
   padding: 5px 16px;
}
</style>
