<template>
  <InformationView />
  <div>
    <button class="btn">
      <div class="infoWrap">
        <p>{{ inforData.title }}</p>
        <p>{{ inforData.issuedDate }}</p>
        <p>{{ inforData.category1 }}</p>
        <p>{{ inforData.information }}</p>
        <p>{{ inforData.address }}</p>
      </div>
    </button>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import InformationView from "./components/informationView.vue";
import axios from "axios";

const inforData = ref({
  title: "title",
  issuedDate: "0000",
  category1: "string",
  information: "string",
  address: "string",
});

const getInfor = async () => {
  const res = await axios.get(
    `http://api.kcisa.kr/openapi/API_TOU_052/request?serviceKey=d5237ed0-b813-4eb5-b0b8-0c796a75848d&numOfRows=10&pageNo=1`
  );
  console.log(res.data.response.body.items.item[0]);
  const data1 = res.data.response.body.items.item[0];
  inforData.value = {
    title: data1.title,
    issuedDate: data1.issuedDate,
    category1: data1.category1,
    information: data1.information,
    address: data1.address,
  };
};

onMounted(() => {
  getInfor();
});
</script>

<style lang="scss" scoped></style>
