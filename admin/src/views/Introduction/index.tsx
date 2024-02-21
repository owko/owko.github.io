import IntroductionItem from "@/components/Introduction/IntroductionItem";
import NavBar from "@/components/NavBar/index.tsx";
import ParklImg from "@/assets/park.jpg";
import PalaceImg from "@/assets/palace.jpg";
import WayParklImg from "@/assets/WayPark.jpg";
const Introduction = () => {
    return (
        <>
        <NavBar></NavBar>
        <div style={{paddingTop:'160px'}}></div>
        <IntroductionItem title='小公园' content="第三批广东省历史文化街区" url={ParklImg}></IntroductionItem>
        <IntroductionItem title='老妈宫' content="广东省级保护单位" url={PalaceImg}></IntroductionItem>
        <IntroductionItem title='西堤公园' content="世界记忆名录侨批纪念地" url={WayParklImg}></IntroductionItem>
        
        </>
    )
}
export default Introduction;