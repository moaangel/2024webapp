<template>
  <div class="container py-3">
    <div class="row mb-5">
      <div class="col-md-6">
        <h3>User List</h3>
        <UserListView />
      </div>
      <div class="col-md-6">
        <h3>User Sign</h3>
        <UserSignView />
      </div>
    </div>
    <div class="row">
      <MapView />
    </div>
  </div>
</template>

<script setup>
import UserListView from "../components/user/UserListView.vue";
import UserSignView from "../components/user/UserSignView.vue";
import MapView from "../components/user/MapView.vue";
</script>

<style lang="scss" scoped></style>
