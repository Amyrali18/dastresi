import useSWR from "swr";
import WhyDastresijson from "./WhyDastresiJson/WhyDastresiJson";
import axios from "axios";

const WhyDastresi = () => {
    const fetcher = (url) => axios.get(url).then((res) => res.data);
    const { data: WhyDastresiData, error } = useSWR(
      "https://amyrali18.github.io/dastresi-git/whyDastresi.json",
      fetcher
    );
    if (error) return <div>Failed to load slider</div>;
    if (!WhyDastresiData) return <h1 className="text-center">Loading...</h1>;
    console.log()
    return ( 
        <>
        <div className="max-w-screen-xl mx-auto p-4 mb-8">
        <h3 className="text-2xl text-center font-bold text-black mb-8">چرا دسترسی رو برای خرید انتخاب کنیم؟</h3>
        <div className="flex">
            
    
       
      </div>
        <WhyDastresijson/>
                </div>
        </>
     );
}
 
export default WhyDastresi;