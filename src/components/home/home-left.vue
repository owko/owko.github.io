<template>
  <div class="flex-1 bg-opacity-50 mr-5 bg-slate-800 p-3 flex flex-col">
    <HorizontalBar  class="h-1/3 box-border pb-4"></HorizontalBar>
    <RadarBar class="h-1/3 box-border pb-4"></RadarBar>
    <Relation class="h-1/3"></Relation>
  </div>
</template>
<script setup>
import Relation from "@/components/common/relation.vue";
import HorizontalBar from "@/components/common/horizontal-bar.vue";
import RadarBar from "@/components/common/radar-bar.vue";


</script>