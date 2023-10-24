<template>
  <div>
    <div ref="MapChart" class="w-full h-full"></div>
  </div>
</template>
  <script setup>
import { inject, ref, onMounted, getCurrentInstance, watch } from "vue";
import mapJson from "@/assets/MapData/china.json";
const state = inject("state");
const MapChart = ref(null);
const { proxy } = getCurrentInstance();
let myEcharts = null;
onMounted(() => {
  proxy.$echarts.registerMap("china", mapJson);
  myEcharts = proxy.$echarts.init(MapChart.value);
  rederChart();
});
const rederChart = () => {
  const option = {
    timeline: {
      data: state.data.mapData.voltageLevel,
      axisType: "category",
      autoPlay: false,
      playInterval: 1000,
      left: "10%",
      right: "10%",
      bottom: "0%",
      width: "80%",
      label: {
        color: "#fff",
      },
      emphasis: {
        label: {
          color: "#555",
        },
        controlStyle: {
          borderColor: "#555",
          color: "#555",
        }
      },
      symbolSize: 10,
      lineStyle: {
        color: "#555",
      },
      checkpointStyle: {
        borderColor: "#888",
        borderWidrth: 2,
      },
      controlStyle: {
        color: "#888",
        borderColor: "#888",
      },
    },
    baseOption: {
      grid: {
        right: "10%",
        top: "10%",
        bottom: "10%",
        width: "20%",
      },
      geo: {
        show: true,
        map: "china",
        roam: true,
        zoom: 0.8,
        center: [113.83531246, 34.0267395887],
        itemStyle: {
          borderColor: "rgba(147,235,258,1)",
          borderWidrth: 1,
          areaColor: {
            type: "radial",
            x: 0.5,
            y: 0.5,
            r: 0.5,
            colorStops: [
              {
                offset: 0,
                color: "rgba(147,235,248,0)",
              },
              {
                offset: 1,
                color: "rgba(147,235,248,.2)",
              },
            ],
          },
        },
        emphasis:{
          itemStyle:{
          areaColor: "#389bb7",
        }
        }
      },
    },
    options: [],
    series: [],
  };
  state.data.mapData.voltageLevel.map((item, index) => {
    option.options.push({
      title: [
        {
          text: "2019~2023的时间线",
          textStyle:{
            color:"#888",
            fontSize:20
          }
        },
        {
          text: item + "年度报告",
          top: "5%",
          right: "10%",
          textStyle:{
            color:"#888",
            fontSize:14
          }
        },
      ],
      xAxis: {
        type: "value",
        splitLine: false,
        // axisTick:{
        //   show:false
        // },
      },
      yAxis: {
        type: "category",
        axisTick: {
          show: false,
        },
        data: state.data.mapData.categoryData[item].map((item) => {
          return item.name;
        }),
      },
      series: [
        {
          type: "bar",
          data: state.data.mapData.categoryData[item].map((item) => {
            return item.value;
          }),
          itemStyle: {
            color: state.data.mapData.colors[index],
          },
        },
        {
          type: "effectScatter",
          coordinateSystem: "geo",
          data: state.data.mapData.topData[item],
          symbolSize: (val) => {
            return val[2] / 4;
          },
          showEffectOn: "render",
          rippleEffect: {
            brushType: "stroke",
          },
          label: {
            formatter: "{b}",
            position: "right",
            show: true,
          },
          itemStyle:{
            color: state.data.mapData.colors[index],
            shadowBlur: 10,
            shadowColor: state.data.mapData.colors[index]
          }
        },
      ],
    });
  });
  myEcharts.setOption(option);
};
</script>