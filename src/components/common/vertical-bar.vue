<template>
  <div>
    <div ref="VerticalBar" class="w-full h-full"></div>
  </div>
</template>
<script setup>
import { inject, ref, onMounted, getCurrentInstance, watch } from "vue";

const state = inject("state");
const VerticalBar = ref(null);
const { proxy } = getCurrentInstance();
let myEcharts = null;
onMounted(() => {
  myEcharts = proxy.$echarts.init(VerticalBar.value);
  rederChart();
});
const rederChart = () => {
  const option = {
    xAxis: {
      type: "category",
      data: state.data.serverData.servers.map((item) => item.name),
      axisLabel: {
        color: "#9eb1c8",
      },
    },
    yAxis: {
      type: "value",
      show: false,
      max: function (value) {
        return parseInt(value.max * 1.2);
      },
    },
    grid: {
      top: 16,
      right: 0,
      bottom: 26,
      left: 0,
      containLavel: true,
    },
    series: [
      {
        type: "bar",
        data: state.data.serverData.servers.map((item) => ({
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
          position: "top",
          directly: {
            color: "#fff",
          },
          formatter: "{c}%",
        },
      },
    ],
  };
  myEcharts.setOption(option);
};
watch(
  () => state,
  () => {
    rederChart();
  },
  { deep: true }
);
</script>