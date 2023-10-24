<template>
  <div>
    <div ref="Relation" class="w-full h-full"></div>
  </div>
</template>
  <script setup>
import { inject, ref, onMounted, getCurrentInstance, watch } from "vue";

const state = inject("state");
const Relation = ref(null);
const { proxy } = getCurrentInstance();
let myEcharts = null;
onMounted(() => {
  myEcharts = proxy.$echarts.init(Relation.value);
  rederChart();
});
const rederChart = () => {
  const option = {
    xAxis: {
      show: false,
      type: "value",
    },
    yAxis: {
      show: false,
      type: "value",
    },
    series: [
      {
        type: "graph",
        layout: "none",
        coordinateSystem: "cartesian2d",
        symbolSize: 26,
        z: 3,
        edgeLabel: {
            show: true,
            color: "#fff",
            fontSize: 14,
            formatter: function (params) {
              return params.data.speed;
            },

        },
        labels: {
          show: true,
          position: "bottom",
          color: "#fff",
        },
        edgeSymbol: ["none", "arrow"],
        edgeSymbolSize: 8,
        data: state.data.relationData.relations.map((item) => {
          if (item.id !== 0) {
            return {
              name: item.name,
              category: 0,
              active: true,
              speed: `${item.speed}kb/s`,
              value: item.value,
            };
          } else {
            return {
              name: item.name,
              category: 0,
              symbolSize: 100,
              active: true,
              itemStyle: {
                  color: {
                    colorStops: [
                      {
                        offset: 0,
                        color: "#157eff",
                      },
                      {
                        offset: 1,
                        color: "#35c2ff",
                      },
                    ],
                  },
              },
              label: {
                  fontSize: "14",
              },
              speed: `${item.speed}kb/s`,
              value: item.value,
            };
          }
        }),
        links: state.data.relationData.relations.map((item) => ({
          source: item.source,
          target: item.target,
          speed: `${item.speed}kb/s`,
          lineStyle: {
              color: "#fff",
              curveness: 0.2,
          },
          label: {
            show: true,
            position: "middle",
            offset: [10, 0],
          },
        })),
      },
      {
        type: "lines",
        coordinateSystem: "cartesian2d",
        z: 1,
        effect: {
          show: true,
          smooth: false,
          trailLength: 0,
          symbol: "arrow",
          color: "#fff",
          symbolSize: 12,
        },
        lineStyle: {
            curveness: 0.2,
        },
        data: [
            {
              coords: [[0, 300],[50, 200]]
              
            },
            {
              coords: [[0, 100],[50, 200]]
              
            },
            {
              coords: [[50, 200],[100, 100]]
              
            },
            {
              coords: [[50, 200],[100, 300]]
              
            }
        ],
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