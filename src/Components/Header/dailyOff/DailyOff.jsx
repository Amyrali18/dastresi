import axios from "axios";
import useSWR from "swr";
import Countdown from "./Countdown/Countdown";
import "./dailyOff.css"
const DailyOff = () => {
  const fetcher = (url) => axios.get(url).then((res) => res.data);
  const { data, error, isLoading } = useSWR(
    "https://amyrali18.github.io/dastresi-git/dailyOff.json",
    fetcher
  );

  return (
    <>
      <div className="mt-20 w-full max-w-screen-xl mx-auto rounded-xl px-12 bg-[#E2E2E2]">
        <div className="offTop flex flex-row justify-between">
          <div className="flex items-center gap-2 font-bold text-4xl">
            <i className="icon-percent text-[#FE5F55] "></i>
            <span className="text-[#757575]">تخفیف‌های روزانه دسترسی</span>
          </div>
          <Countdown />
        </div>
        <div className="daily-off bg-[#E2E2E2] gap-5 pb-12 pt-5">
          {isLoading ? <div>loading today off's</div> : error ? <div>failed to load daily off's</div> : data && data.map((item) => {
            const { id, url, title, oldPrice, off, newPrice } = item
            return (
              <div key={id} className="daily-off-box bg-white rounded-xl overflow-hidden justify-between" style={{ gridRow: id === "100" || id === "200" ? "1 / 4" : "", display: "flex", flexDirection: id === "100" || id === "200" ? "column" : "row", alignItems: id === "100" || id === "200" ? "center" : "" }} >
                <div className="image-card">
                  <img src={url} alt="" />
                </div>
                <div className="flex flex-col justify-between">
                  <div className="title-card">
                    <h2>{title}</h2>
                  </div>
                  <div className="old-off-price">
                    <p className="old-price">{oldPrice}</p>
                    <p className="off-count">{off} تومان تخفیف </p>
                  </div>
                  <div className="new-price">
                    <p>{newPrice}</p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </>
  );
};

export default DailyOff;
