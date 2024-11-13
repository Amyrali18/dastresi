import axios from "axios";
import useSWR from "swr";

const WhyDastresijson = () => {
  const fetcher = (url) => axios.get(url).then((res) => res.data);
  const { data: WhyDastresiData, error } = useSWR(
    "https://amyrali18.github.io/dastresi-git/whyDastresi.json",
    fetcher
  );
  if (error) return <div>Failed to load slider</div>;
  if (!WhyDastresiData) return <h1 className="text-center">Loading...</h1>;
  return ( 
    <>
    
        <div className="flex">
          {WhyDastresiData.map((item) => {
            return (
              <div
                key={item.id}
                className="flex flex-col h-full flex-1 justify-center items-center p-4"
              >
                <img src={item.url} className="w-16 mb-2" alt={item.alt} />
                <p className="flex-1 text-center font-bold text-gray-500 mb-2">
                  {item.title}
                </p>
                <p className="text-center text-sm text-black leading-7">
                  {item.text}
                </p>
              </div>
            );
          })}
        </div>
      
    </>
  );
};

export default WhyDastresijson;
