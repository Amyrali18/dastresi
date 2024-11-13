import axios from "axios";
import useSWR from "swr";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./Categstyles.css"
// ایمپورت ماژول‌های مورد نیاز
import { Navigation,Autoplay} from "swiper/modules";

const FavCategoriesSlider = () => {
    const fetcher = (url) => axios.get(url).then((res) => res.data);
    const { data: CategoriesSliderData, error } = useSWR(
      "https://amyrali18.github.io/dastresi-git/favCategories.json",
      fetcher
    );
    if (error) return <div>Failed to load slider</div>;
  if (!CategoriesSliderData) return <h1 className="text-center">Loading...</h1>;
    return ( 
        <>
        <Swiper
  slidesPerView={6}
  spaceBetween={10}
  navigation={true}
  autoplay={{ delay: 3000, disableOnInteraction: false }}
  modules={[Navigation, Autoplay]}
  className="mySwiper2"
>
  {CategoriesSliderData.map((item) => (
    <SwiperSlide key={item.id}>
      <a href="#"><img src={item.url} alt={item.alt} /></a>
    </SwiperSlide>
  ))}
</Swiper>
        </>
     );
}
 
export default FavCategoriesSlider