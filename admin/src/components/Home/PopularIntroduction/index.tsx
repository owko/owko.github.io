import IntroductionStyle from "./Introduction.module.scss";
import { Button } from 'antd'
import ParklImg from "@/assets/park.jpg";
import PalaceImg from "@/assets/palace.jpg";
import WayParklImg from "@/assets/WayPark.jpg";
import LazyLoadImage from '@/components/LazyLoadImage';

const IntroductionItem = (title:string,desc:string,url:string) => {
    return (
       <>
       <div className={IntroductionStyle.introduction_item}>
       <div className={IntroductionStyle.introduction_item_head}>
        <div className={IntroductionStyle.introduction_item_title}>{title}</div>
        <div className={IntroductionStyle.introduction_item_desc}>{desc}</div>
       </div>
       <div className={IntroductionStyle.introduction_item_img}>
       <LazyLoadImage  src={url} />
       </div>
       </div>
       </>
    )
 }
const PopularIntroduction: React.FC = () => {
    return (
        <div className={IntroductionStyle.introduction_bg}>
            <div className={IntroductionStyle.introduction_header}>
                <div className={IntroductionStyle.introduction_header_title}>
                热门景点
                </div>
                <Button className={IntroductionStyle.introduction_header_button}>发现更多汕头景区</Button>
            </div>
            <div className={IntroductionStyle.introduction_content}>
                    {IntroductionItem('小公园','第三批广东省历史文化街区',ParklImg)}
                    {IntroductionItem('老妈宫','广东省级保护单位',PalaceImg)}
                    {IntroductionItem('西堤公园','世界记忆名录侨批纪念地',WayParklImg)}
            </div>
        </div>
    )
}
export default PopularIntroduction;