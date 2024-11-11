import axios from "axios";
import useSWR from "swr";

const DailyOff = () => {
    const fetcher = (url) => axios.get(url).then((res) => res.data);
    const { data: dailyOffData, error } = useSWR(
      "https://amyrali18.github.io/dastresi-git/dailyOff.json",
      fetcher
    );
   
    
    return ( 
        <>
        <div className="mt-20 max-w-screen-xl mx-auto rounded-xl px-4 bg-[#E2E2E2]">
            <div className="offTop flex flex-row justify-between">
            <div className="flex items-center gap-2 font-bold text-4xl">
                <i className="icon-percent text-[#FE5F55] "></i>
                <span className="text-[#757575]">تخفیف‌های روزانه دسترسی</span>

            </div>
            <div>timer</div>
            </div>
            <div className="bottom flex flex-row">
                <a href="#" className="flex flex-col"></a>
                
            </div>
        </div>
        </>
     );
}
 
export default DailyOff;