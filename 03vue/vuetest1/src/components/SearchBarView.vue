<template>
   <div class="container">
      <!-- <input type="search" @input="inputText = $event.target.value" placeholder="검색어를 입력하세요" /> -->
      <!-- <input type="search" v-model="inputText" placeholder="검색어를 입력하세요" /> -->
      <!-- <input
         type="search"
         @change="
            $emit('searchMove')
            inputText = $event.target.value;
            $event.target.value = '';
         "
      /> -->

      <input type="search" @change="handleSearch" placeholder="검색어를 입력하세요" />
      <button>검색</button>

      <p>{{ inputText }}</p>
      <!-- <p>{{ data }}</p> -->
   </div>
</template>

<script>
export default {
   name: 'SearchComp',
   props: {
      data: Object,
   },
   data() {
      return {
         inputText: 'test',
      };
   },
   methods: {
      handleSearch(event) {
         this.$emit('searchMovie', event.target.value);
         this.inputText = event.target.value;
         event.target.value = '';
      },
   },
   watch: {
      inputText(name) {
         console.log('watch' + name);
         const findName = this.data.filter(movie => {
            return movie.title.includes(name);
         });
         console.log(findName);

         if (findName.length == 0) {
            alert('영화자료가 없습니다.');
         }
      },
   },
};
</script>

<style lang="scss" scoped></style>
