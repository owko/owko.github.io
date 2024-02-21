import IntroductionDescStyle from './IntroductionDesc.module.scss'
import LazyLoadImage from '@/components/LazyLoadImage';

type IntroductionProps = {
    title: string,
    content: string,
    url: string,
    area: string,
}
const IntroductionDesc: React.FC<IntroductionProps> = ({ title, content, url, area }) => {
    return (
        <div className={IntroductionDescStyle.bg}>
            <div className={IntroductionDescStyle.header}>
                <div className={IntroductionDescStyle.header_left}>
                    <div className={IntroductionDescStyle.header_img}>
                        <LazyLoadImage src={url} />
                    </div>
                    <div className={IntroductionDescStyle.header_desc}>
                        <div className={IntroductionDescStyle.header_title}>{title}</div>
                        <div className={IntroductionDescStyle.header_area}>地址：{area}</div>
                    </div>
                </div>
            </div>
            <div className={IntroductionDescStyle.content}>{content}</div>
        </div>
    )
}
export default IntroductionDesc;