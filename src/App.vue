<script setup>
import HomeLeft from "@/components/home/home-left.vue";
import HomeMiddle from "@/components/home/home-middle.vue";
import HomeRight from "@/components/home/home-right.vue";
import { provide, reactive } from "vue";
import { getVisualization } from "@/api/visualization.js";
const state = reactive({
  data: null,
});
const loadData = async () => {
  const { data } = await getVisualization();
  state.data = data.data;
};

setInterval(() => {
  loadData();
}, 3000);
loadData();
provide("state", state);
</script>

<template>
  <div
    v-if="state.data"
    class="bg-[url('assets/imgs/bg.jpg')] bg-cover bg-center h-screen text-whhite p-5 flex overflow-hidden"
  >
    <HomeLeft></HomeLeft>
    <HomeMiddle></HomeMiddle>
    <HomeRight></HomeRight>
  </div>
</template>
<style scoped lang="less">
</style>
