<template>
  <div>
    <div
      v-for="(item, i) in $store.state.userData"
      :key="i"
      class="d-flex gap-2 border rounded p-3 mb-3 col-md-12"
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
          <button class="btn btn-outline-secondary" @click="openEditModal(i, item)">수정</button>
          <button class="btn btn-outline-secondary" @click="$store.commit('deleteUser', item.franname)">삭제</button>
        </div>
      </div>
    </div>

    <ModalEdit
    v-if="isModalOpen"
      :index="selectedIndex"
      :item="selectedItem"
      @close="isModalOpen = false"
      @save="saveChanges"
    />
  </div>
</template>
<script setup>
import { ref } from 'vue';
import { useStore } from 'vuex';
import ModalEdit from '../../views/ModalEdit.vue'; 

const store = useStore();
const isModalOpen = ref(false);
const selectedItem = ref(null);
const selectedIndex = ref(null);

const openEditModal = (index, item) => {
  selectedItem.value = { ...item }; 
  selectedIndex.value = index;
  isModalOpen.value = true; 
};

const saveChanges = (updatedItem) => {
  store.commit('updateUser', { index: selectedIndex.value, updatedItem }); 
  isModalOpen.value = false; 
};
</script>

<style lang="scss" scoped>
.avata {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  overflow: hidden;
}
</style>