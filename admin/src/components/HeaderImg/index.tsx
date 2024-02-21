import HeaderImgStyle from "./HeaderImg.module.scss";
import LazyLoadImage from "@/components/LazyLoadImage";

type HeaderImgProps = {
  header: string;
  content: string;
  url: string;
};

const HeaderImg: React.FC<HeaderImgProps> = ({ header, content, url }) => {
  return (
    <>
      <div className={HeaderImgStyle.header}>{header}</div>
      <div className={HeaderImgStyle.content}>{content}</div>
      <div className={HeaderImgStyle.HeaderImg}>
        <LazyLoadImage src={url} />
      </div>
    </>
  );
};
export default HeaderImg;
