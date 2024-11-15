import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./styles.css";

// import required modules
import { Autoplay, Pagination } from "swiper/modules";
import useSWR from "swr";
import axios from "axios";
const Slider = () => {
  const fetcher = (url) => axios.get(url).then((res) => res.data);
  const { data: sliderData, error } = useSWR(
    "https://amyrali18.github.io/dastresi-git/slider.json",
    fetcher
  );

  if (error) return <div>Failed to load slider</div>;
  if (!sliderData) return <h1 className="text-center">Loading...</h1>;

  return (
    <>
      <div className="w-full">
        <Swiper
          speed={1000}
          pagination={{ clickable: true, type: 'bullets', dynamicBullets: true }}
          autoplay={{ delay: 3000, disableOnInteraction: true }}
          modules={[Pagination, Autoplay]}
          className="mySwiper mt-44 w-4/5 rounded-2xl mx-auto z-10 overflow-hidden"
        >
          {sliderData.map((item) => (
            <SwiperSlide key={item.id}>
              <a href="#">
                <img src={item.url} alt={item.alt} />
              </a>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default Slider;
