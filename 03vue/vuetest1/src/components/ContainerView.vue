<template>
   <div class="container">
      <h2>HOT & NEW</h2>
      <div class="cardWrap">
         <div class="card" v-for="(item, i) in data" v-bind:key="i">
            <div class="imgWrap">
               <img :src="`./images/${item.img}`" alt="`${item.img}`" />
               <div class="hot" v-if="item.like >= 5 ? true : false">HOT</div>
            </div>
            <div class="cardBody">
               <h4>{{ item.title }}</h4>
               <p>❤️ {{ item.num }}</p>
               <p>대여 : {{ item.won }}</p>
               <p>👍 {{ item.like }} <button @:click="$emit('likeUp', i)">클릭</button></p>
            </div>
            <div class="btn btn-primary" @:click="$emit('openModal', i)">상세보기</div>
         </div>
      </div>
   </div>
</template>

<script>
export default {
   name: 'containerView',
   props: {
      data: Array,
   },
};
</script>

<style lang="scss" scoped></style>
