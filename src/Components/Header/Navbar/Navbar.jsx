import { data } from "autoprefixer";
import axios from "axios";
import useSWR from "swr";

const Navbar = () => {
    const fetcher = (url) => axios.get(url).then(res => res.data);
    const { data: navbarData, error } = useSWR('https://amyrali18.github.io/dastresi-git/navbarData.json', fetcher);
    if (error) return <div>Failed to load navigation</div>;
  if (!navbarData) return <div>Loading...</div>;
  
  
    return ( 
        <>
         <nav className="">
      <ul className="flex justify-between space-x-4 ">
        {navbarData.map((item) => (
          <li key={item.id} className="relative group py-4 border-b-2 border-transparent hover:border-[#FE5F55] transition duration-300 ">
            <a
              href={item.link}
              className="text-gray-500 text-sm hover:text-[#FE5F55]   transition-colors duration-300"
            >
              {item.title}
            </a>
            {item.submenu && (
              <ul className="absolute right-0 top-full mt-1 pt-2 !z-[10000] w-40 bg-white rounded-md shadow-lg opacity-0 transition-opacity duration-300 invisible group-hover:visible group-hover:opacity-100 hover:visible hover:opacity-100">
                {item.submenu.map((subItem) => (
                  <li key={item.id} className="px-1 py-2 w-full hover:bg-gray-200 !z-[10000] hover:text-blue-950 hover:opacity-100">
                    <a href={subItem.link} className="text-gray-500 text-xs text-right w-full !z-[10000] hover:text-blue-950 transition-colors duration-300">
                      {subItem.title}
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </nav>
        </>
     );
}
 
export default Navbar;