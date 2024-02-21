import HeaderImg from "@/components/HeaderImg";
import IntroductionDesc from "@/components/Introduction/IntroductionDesc";
import IntroductionMap from "@/components/Introduction/IntroductionMap";
import ParklImg from "@/assets/park.jpg";
import PalaceImg from "@/assets/palace.jpg";
import WayParklImg from "@/assets/WayPark.jpg";
import NavBar from "@/components/NavBar";
import { useParams } from "react-router-dom";
const IntroductionDetail = () => {
    const params = useParams()
    let content: string = '',
        url: string = '',
        title: string = '',
        descContent: string = '',
        area: string = '',
        axis: number[] = [],
        header: string = ''
        switch (params.header) {
            case 'park':
                header = '小公园'
                url = ParklImg
                content = '第三批广东省历史文化街区'
                title = '汕头小公园开埠区'
                descContent = '汕头小公园开埠区的结构分为一轴、两核、三区。一轴即潮人精神家园轴，是以小公园中山纪念亭为核心、以安平路为轴线，通过标志性建筑的改造、公共空间的塑造、交通的梳理、文化的凸显等手法打造。两核包括百载商埠文化核心，以中山纪念亭、南生百货大楼等形成；骑楼风情文化核心则是展示传统骑楼建筑的文化核心。三区包括小公园片区、安平西片区和现代居住片区。 清咸丰十年（1860年），汕头作为通商口岸正式开埠。是近代开埠的34个城市中唯一保留下来的较为完好的开埠区和中国保留较为完整的骑楼建筑群，汕头小公园开埠区不仅记录着城市的历史文脉，也承载着不少海内外潮人的乡土记忆，是“潮人精神文化家园”。'
                area = '广东省汕头市金平区国平路、升平路、安平路交汇处'
                axis = [116.674378, 23.354019]
                break;
            case 'palace':
                header = '老妈宫'
                url = PalaceImg
                content = '广东省级文物保护单位'
                title = '老妈宫'
                descContent = '老妈宫，位于广东省汕头市区升平路口，始建于清嘉庆年间，是汕头开埠前留存下来的古迹，在文革期间遭到严重破坏，1991年重建。老妈宫占地面积约400平方米，包括天后宫、天帝庙，是一座具有古建筑和民间工艺特色的庙宇。被列为广东省级文物保护单位。'
                area = '广东省汕头市外马路头'
                axis = [116.675366, 23.354757]
                break;
            case 'wayPark':
                header = '西堤公园'
                url = WayParklImg
                content = '世界记忆名录侨批纪念地'
                title = '西堤公园'
                descContent = '西堤公园，位于汕头老市区西南角，西面为西港河入海处，南面为礐石海，面积约5.2万平方米。公园见证了汕头从渔村、码头，到港口、商埠的时代变迁，承载了汕头几百年历史风云，是百载商埠繁荣的发祥地，也是南粤古驿道出海口纪念地。如今公园西南边的海岸线与一百多年前的岸线形状仍基本保持一致。'
                area = '广东省汕头市老市区西南角镇邦路与安平路之间'
                axis = [116.664791, 23.34778]
                break;
        }
    return (
        <div style={{ backgroundColor: "#f8f8f8" }}>
            <NavBar />
            <div style={{ position: 'relative' }}>
                <HeaderImg header={header} content={content} url={url} />
            </div>
            <IntroductionDesc title={title} content={descContent} url={url} area={area} />
            <IntroductionMap axis={axis} />
        </div>
    )
}
export default IntroductionDetail;