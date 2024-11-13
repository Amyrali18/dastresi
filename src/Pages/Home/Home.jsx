import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import Slider from "../../Components/Slider/Slider";
import DailyOff from "../../Components/Header/dailyOff/DailyOff";
import FavCategories from "../../Components/FavCategories/FavCategories";
import WhyDastresi from "../../Components/WhyDastresi/WhyDastresi";
const Home = () => {
    return ( 
        <>
       <Header/>
       <Slider/>
       <DailyOff/>
       <FavCategories/>
       <WhyDastresi/>
       {/* <Footer/> */}
        </>
     );
}
 
export default Home;