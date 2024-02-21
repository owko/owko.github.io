import Echarts from "@/components/Echarts";
import NavBar from "@/components/NavBar";
import AboutStyle from "./About.module.scss";
const About = () => {
    return (
        <>
            <NavBar />
            <div style={{padding:'52px', paddingTop: '160px' ,backgroundColor:'rgb(248, 248, 248)'}}>
                <div className={AboutStyle.title}>客流量统计</div>
                <Echarts option={{
                    legend: {
                        data: [
                            "客流量",
                        ],
                    },
                    xAxis: {
                        data: ['2010', '2015', '2020', '2021', '2022']
                    },
                    yAxis: {
                        show: true,
                        position: 'right',
                        splitNumber: 6
                    },
                    series: [
                        {
                            name: '客流量',
                            data: [7822027, 14474577, 4964091, 4931519, 3836240],
                            type: 'bar',
                            smooth: true,
                            label: {
                                show: true,
                                position: 'top'
                            }
                        }
                    ]
                }} />
                <div className={AboutStyle.title}>客流量比例</div>
                <Echarts option={{
                    tooltip: {
                        trigger: 'item'
                    },
                    legend: {
                        orient: 'vertical',
                        left: 'left'
                    },
                    series: [
                        {
                            type: 'pie',
                            data: [
                                {
                                    value: 984,
                                    name: '国内游客'
                                },
                                {
                                    value: 5,
                                    name: '港澳同胞'
                                },
                                {
                                    value: 1,
                                    name: '台湾同胞'
                                },
                                {
                                    value: 10,
                                    name: '外国人'
                                }
                            ],
                            center: ['50%', '50%'],
                            label: {
                                normal: {
                                    show: true,
                                    position: 'outter', // 数值显示在内部
                                    formatter: '{d}%', // 格式化数值百分比输出
                                },
                            },
                            emphasis: {
                                itemStyle: {
                                    shadowBlur: 10,
                                    shadowOffsetX: 0,
                                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                                }
                            }

                            // roseType: 'area'
                        }
                    ]
                }} />
            </div>

        </>
    )
}
export default About;