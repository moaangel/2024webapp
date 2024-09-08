<template>
  <div class="container py-3">
    <div class="row mb-5">
      <div class="col-md-6">
        <h3>위시플레이스</h3>
        <UserListView />
      </div>
      <div class="col-md-6">
        <h3>플레이스 등록하기</h3>
        <UserSignView />
      </div>
    </div>
  </div>
  <div class="full-width-bg">
    <div class="container py-5">
      <div class="row">
        <MapView />
      </div>
    </div>
  </div>
</template>

<script setup>
import UserListView from "../components/user/UserListView.vue";
import UserSignView from "../components/user/UserSignView.vue";
import MapView from "../components/user/MapView.vue";
import { ref } from 'vue';
import { useStore } from 'vuex';

const store = useStore();

</script>

<style lang="scss" scoped>
.full-width-bg {
  width: 100%; 
  background-color: rgba(219, 219, 219, 0.3);
  padding: 20px 0;
}
</style>
