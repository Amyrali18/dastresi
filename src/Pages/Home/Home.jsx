import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import Slider from "../../Components/Slider/Slider";
import DailyOff from "../../Components/Header/dailyOff/DailyOff";
const Home = () => {
    return (
        <>
            <Header />
            <Slider />
            <DailyOff />
            <Footer/>
        </>
    );
}

export default Home;