<template>
  <div>
    <div ref="HorizontalBar" class="w-full h-full"></div>
  </div>
</template>
<script setup>
import { ref, onMounted, watch, inject, getCurrentInstance } from "vue";
const state = inject("state");
const HorizontalBar = ref(null);
let myEcharts = null;
const { proxy } = getCurrentInstance();
onMounted(() => {
  myEcharts = proxy.$echarts.init(HorizontalBar.value);
  rederChart();
});
const rederChart = () => {
  const option = {
    xAxis: {
      show: false,
      type: "value",
      max: function (value) {
        return parseInt(value.max * 1.2);
      },
    },
    yAxis: {
      type: "category",
      data: state.data.regionData.regions.map((item) => item.name),
      inverse: true,
      axisLine: {
        show: false,
      },
      axisTick: {
        show: false,
      },
      axisLabel: {
        color: "#9eb1c8",
      },
    },
    grid: {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
      containLavel: true,
    },
    series: [
      {
        type: "bar",
        data: state.data.regionData.regions.map((item) => ({
          name: item.name,
          value: item.value,
        })),
        showBackground: true,
        backgroundStyle: {
          color: "rgba(100,145,230,0.2)",
        },
        itemStyle: {
          color: "#5D98CE",
          borderRadius: 5,
          shadowColor: "rgba(0,0,0,0.5)",
          shadowBlur: 5,
        },
        barWidth: 12,
        label: {
          show: true,
          position: "right",
          directly: {
            color: "#fff",
          },
        },
      },
    ],
  };
  myEcharts.setOption(option);
  console.log(myEcharts, state);
};
watch(
  () => state,
  () => {
    rederChart();
  },
  { deep: true }
);
</script>