<template>
  <div>
    <div ref="RadarBar" class="w-full h-full"></div>
  </div>
</template>
  <script setup>
import { inject, ref, onMounted, getCurrentInstance, watch } from "vue";

const state = inject("state");
const RadarBar = ref(null);
const { proxy } = getCurrentInstance();
let myEcharts = null;
onMounted(() => {
    console.log(state);
  myEcharts = proxy.$echarts.init(RadarBar.value);
  rederChart();
});
const rederChart = () => {
  const option = {
    //坐标系
    radar: {
      axisName: {
          color: "#05D5FF",
          fontSize: 14,
      },
      shape: "polygon",
      center: ["50%", "50%"],
      radius: "80%",
      startAngle: 120,
      axisLine: {
        lineStyle: {
          color: "rgba(5,213,255,.8)",
        },
      },
      splitLine: {
        show: true,
        lineStyle: {
          width: 1,
          color: "rgba(5,213,255,.8)",
        },
      },
      splitArea: {
        show: false,
      },
      indicator: state.data.riskData.risks.map((item) => ({
        name: item.name,
        max: 100,
      })),
    },
    //坐标极点
    polar: {
      center: ["50%", "50%"],
      radius: "0%",
    },
    //坐标角度
    angleAxis: {
      min: 0,
      interval: 5,
      clockwise: false,
    },
    //径向图
    radiusAxis: {
      min: 0,
      interval: 10,
      splitLine: {
        show: true,
      },
    },
    series: {
      type: "radar",
      symbol: "circle",
      symbolSize: 10,
      itemStyle: {
        color: "#05D5FF" ,
      },
      areaStyle: {
        color: "#05D5FF", 
        opacity: 0.5 ,
      },
      lineStyle: {
        width: 2,
        color: "#05D5FF",
      },
      label: {
          show: true,
          color: "#fff",
      },
      data: [
        {
          value: state.data.riskData.risks.map(item => item.value),
          name : '预算分配（Allocated Budget）'

        },
      ],
    },
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