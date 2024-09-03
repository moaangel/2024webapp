<template>
   <div class="cardWrap">
      <div class="card" v-for="(item, i) in data" v-bind:key="i">
         <div class="imgWrap">
            <img :src="`./images/${item.img}`" alt="`${item.img}`" />
         </div>
         <div class="cardBody">
            <p>{{ item.review }}</p>
            <h4>{{ item.title }}</h4>
            <p>{{ item.writer }} | {{ item.publ }}</p>
            <h4>{{ item.price }}</h4>
         </div>
         <div class="btn btn-primary" @:click="$emit('openModal', i)">상세보기</div>
      </div>
   </div>
</template>

<script>
export default {
   props: {
      data: Array,
   },
};
</script>

<style lang="scss" scoped></style>
