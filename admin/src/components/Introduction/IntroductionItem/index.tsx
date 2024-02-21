import introduction_style from "./IntroductionItem.module.scss";
import { Button } from "antd";
import { useNavigate } from 'react-router-dom'
import LazyLoadImage from '@/components/LazyLoadImage';

type IntroductionProps = {
    title: string,
    content: string,
    url: string
}


const PopularIntroduction: React.FC<IntroductionProps> = ({ title, content, url }) => {
    let navgite = useNavigate();
    const goToIntroduction = (title: string) => {
        let routePath: string = '/IntroductionDetail'
        switch (title) {
            case '小公园':
                navgite(routePath + '/park')
                break;
            case '老妈宫':
                navgite(routePath + '/palace')
                break;
            case '西堤公园':
                navgite(routePath + '/wayPark')
                break;
            default:
                break
        }
    }
    return (
        <div className={introduction_style.introduction_content}>
            <div className={introduction_style.introduction_text}>
                <div className={introduction_style.introduction_title}>{title}</div>
                <div className={introduction_style.introduction_desc}>{content}</div>
                <Button onClick={() => goToIntroduction(title)} className={introduction_style.introduction_explore}>探索更多</Button>
            </div>
            <div className={introduction_style.introduction_img}>
                <LazyLoadImage src={url} />
            </div>
            <div className={introduction_style.mask}></div>
        </div>

    )
}
export default PopularIntroduction;