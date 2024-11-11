import styles from "./Header.module.css"
import Navbar from "./Navbar/Navbar";
const HeaderDesktop = () => {
    return ( 
        <>
        <div className="mx-auto px-4 mt-6 max-w-screen-xl flex flex-col">
        <div className="headerTop flex flex-row justify-between gap-4 items-center">
          <div className="flex flex-row gap-8 items-center w-2/3">
            <a href="#">
              <img
                className="w-24"
                src="https://www.dastresi.com/images/logo/logo.png"
                alt="logo"
              />
            </a>
            <div className="search relative flex-1" id="main-search">
              <div className={`${styles.shadow} bg-[#F7F8FA] flex items-center justify-center pr-2 rounded-xl `}>
                <label htmlFor="search-decoy">
                  <i className="icon icon-search-normal text-xl text-[#A3A3A3]"></i>
                </label>
                <input
                  className="w-full bg-transparent pr-1 pl-3 py-2 outline-none text-[#757575]"
                  value=""
                  id="search-decoy"
                  type="search"
                  placeholder="جستجو محصولات"
                ></input>
              </div>
            </div>
            <div className="flex  gap-4">
                <a href="#" className={`${styles.links} text-sm text-[#A3A3A3] hover-icon` }>باشگاه مشتریان</a>
                <a href="#" className={`${styles.links} text-sm text-[#A3A3A3] hover-icon`}>بلاگ</a>
                <a href="#" className={`${styles.links} text-sm text-[#A3A3A3] hover-icon`}>ارتباط ما</a>
                <a href="#" className={`${styles.links} text-sm text-[#A3A3A3] hover-icon`}>درباره ما</a>
            </div>
          </div>
          <div className="flex gap-4 items-center">
          <a href="#" className={`${styles.shadow}  flex items-center justify-center hover-icon relative text-[#FE5F55] rounded-xl text-sm w-[42px] h-[42px] bg-[#F7F8FA]`}>
                                <i className="text-xl icon-basket"></i>
                                <span className={`${styles.basketCount} cursor-pointer absolute bg-[#FE5F55] flex items-center justify-center rounded-full text-white font-medium font-[shabnam] `}>۰</span>                             
                            </a>
                            <a href="٫" className={`${styles.shadow} flex items-center relative text-sm rounded-xl bg-[#0a5abd] text-white hover-btn h-[42px] px-3 `}>
                                <span>ورود و ثبت‌نام</span>
                            </a>
          </div>
        </div>
        <Navbar/>
      </div>
        </>
     );
}
 
export default HeaderDesktop;