import AMap from "@/components/AMap";
import IntroductionMapStyle from "./IntroductionMap.module.scss";
import {Button} from "antd";
import { useState } from "react";
type IntroductionProps = {
    axis: number[];
};
const IntroductionMap: React.FC<IntroductionProps> = ({ axis }) => {
    const [load,seTtest] = useState(false);
    return (
        <>
        <div className={IntroductionMapStyle.bg}>
        <div className={IntroductionMapStyle.title}>
            游览地址
        </div>
        {load?  <Button onClick={()=>seTtest(false)}>关闭路线规划</Button>:<Button onClick={()=>seTtest(true)}>开启路线规划</Button>}
        <AMap axis={axis} load={load}/>
        </div>

        </>
    )
};
export default IntroductionMap;
