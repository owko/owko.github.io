// import { useSelector, useDispatch } from "react-redux";
import NavBar from "@/components/NavBar/index.tsx";
import { Carousel } from "antd";
import ParklImg from "@/assets/park.jpg";
import PalaceImg from "@/assets/palace.jpg";
import WayParklImg from "@/assets/WayPark.jpg";
import PopularActivities from "@/components/Home/PopularIntroduction/index.tsx";
import HeaderImg from "@/components/HeaderImg";
// import store from "@/store";

const Home = () => {
   // type RootState = ReturnType<typeof store.getState>;
   //获取仓库数据
   // const { num } = useSelector((state: RootState) => ({
   //    num: state.NumStatusReducer.num
   // }));
   // const dispatch = useDispatch();
   // const changeNum = () => {
   //    //修改仓库数据
   //    dispatch({ type: "add2", val: 2 })
   // }
   return (
      <>
         <div className="home">
            <NavBar />
            <Carousel speed={2000} fade={true} autoplay>
               <div>
                  <HeaderImg header='小公园' content='第三批广东省历史文化街区' url={ParklImg} />
               </div>
               <div>
                  <HeaderImg header='老妈宫' content='广东省级保护单位' url={PalaceImg} />
               </div>
               <div>
                  <HeaderImg header='西堤公园' content='世界记忆名录侨批纪念地' url={WayParklImg} />
               </div>
            </Carousel>
            <PopularActivities />
         </div>
      </>
   )
}
export default Home;