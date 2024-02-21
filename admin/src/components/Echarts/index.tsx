import React, { useEffect, useRef } from "react";
import * as echarts from "echarts";
type Echart = {
    option:{}
}
const Echart:React.FC<Echart> =({option})=> {
    const chartRef = useRef(null);
    useEffect(() => {
        let chartInstance = echarts.init(chartRef.current);
        chartInstance.setOption(option);
    }, []);

    return (
        <div style={{ textAlign: "center" }}>
            <div ref={chartRef} style={{ height: "400px" }}></div>
        </div>
    );
}

export default Echart;