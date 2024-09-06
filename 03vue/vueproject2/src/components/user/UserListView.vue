<template>
  <div
    v-for="(item, i) in $store.state.userData"
    :key="i"
    class="d-flex gap-2 border rounded p-3 mb-3"
  >
    <div class="avata">
      <img :src="item.image" alt="" />
    </div>
    <div class="w-100 d-flex justify-content-between">
      <div class="textWrap">
        <h5 class="mb-0">{{ item.franname }}</h5>
        <p class="mb-0">{{ item.addr }}</p>
      </div>
      <div class="btnWrap d-flex gap-1">
        <button>수정</button>
        <button @click="$store.commit('deleteUser', item.franname)">
          삭제
        </button>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.avata {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  overflow: hidden;
}
</style>
