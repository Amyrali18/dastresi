const FooterDesktop = () => {
  return (
    <>
      <div className="w-full bg-[#e2e2e2]  ">
        <div className="flex flex-row p-6 mx-auto justify-between max-w-screen-xl text-sm text-[#000000de]">
          <div className="lg:mb-0 flex items-center">
            <span className="flex gap-2 items-center text-[#757575]">
              <i className="icon-phone text-lg"></i>
              <span>۰۲۱-۳۳۹۰۲۶۴۶</span>
            </span>
          </div>
          <div className="flex items-center lg:mb-0 leading-7">
            <span className="flex gap-2 items-center text-[#757575]">
              <i className="icon-clock text-xl"></i>
              <span>شنبه تا پنج شنبه از ساعت ۱۰ صبح الی ساعت ۱۸</span>
            </span>
          </div>
          <div className="flex items-center gap-2 leading-7 lg:items-center text-[#757575]">
            <i className="icon-location text-xl lg:mt-0"></i>
            <span>
              تهران - میدان امام خمینی - پاساژ لباف - همکف - پلاک 3 - فروشگاه
              بدیع
            </span>
          </div>
          <a
            href="#"
            className="hidden xl:flex bg-white text-xs text-[#757575] rounded-xl p-2 pr-2 pl-1 cursor-pointer hover:text-black items-center w-24 justify-around leading-5 shadow-md"
          >
            <span>برو بالا</span>
            <i class="icon-up-open text-xs text-[#757575] align-middle p-2"></i>
          </a>
        </div>
      </div>
      <div className="FooterMain w-full bg-[#F5F5F5] ">
        <div className="flex flex-row mx-auto max-w-screen-xl px-4 py-8 gap-8">
          <div className=" justify-center items-center flex flex-col gap-8 pt-8 lg:pt-0">
            <img
              className="max-w-[190px]"
              src="https://www.dastresi.com/images/logo/logo.png"
            />

            <div class="flex flex-row flex-wrap gap-4 justify-center">
              <div class="flex text-sm">با ما در ارتباط باشید:</div>
              <a href="#" class="px-2">
                <img src="https://www.dastresi.com/images/icons/instagram.png" />
              </a>
            </div>
          </div>
          <div className="mt-0">
            <h1 className="font-bold text-xl text-black mb-4">
              فروشگاه اینترنتی دسترسی
            </h1>
            <div className="text-gray-500 leading-7">
              <div className="w-full">
                فروشگاه دسترسی فعالیت خود را از سال 1389 به صورت فروش فیزیکی
                کالا در حوزه لوازم جانبی کامپیوتر و موبایل در تهران شروع کرد و
                از سال 1398 از طریق پیج اینستاگرام وارد فروش آنلاین شد و به خاطر
                ارائه کالای اصلی و مشاوره های دقیق در بازه بسیار کوتاهی توانست
                اعتماد بسیاری از مشتریانش را جلب کند و سرانجام در سال 1399 فروش
                از طریق سایت را هم به فعالیت های خود اضافه کرد تا اینکه بتواند
                با بررسی دقیق کالاها انتخاب صحیح شما را به ارمغان آورد. و امروز
                دسترسی فعالیت خود را در زمینه آداپتور موبایل، کابل شارژ،
                پاوربانک، ساعت هوشمند، هندزفری و هدست، لوازم گیمینگ، باتری و
                شارژر، لوازم شبکه، تجهیزات ذخیره سازی، گیرنده دیجیتال و هزاران
                گجت جذاب ادامه میدهد.
              </div>
            </div>
          </div>
          <div className="w-full">
            <h3 className="font-bold text-xl mb-4 text-right">دسترسی سریع</h3>
            <div className="flex flex-row gap-16 justify-between">
              <div className="flex flex-col">
                <a
                  href="#"
                  className="text-sm text-gray-500 hover:text-black mb-4"
                >
                  باشگاه مشتریان
                </a>
                <a
                  href="#"
                  className="text-sm text-gray-500 hover:text-black mb-4"
                >
                  سوالات متداول
                </a>
                <a
                  href="#"
                  className="text-sm text-gray-500 hover:text-black mb-4"
                >
                  بلاگ
                </a>
                <a
                  href="#"
                  className="text-sm text-gray-500 hover:text-blackblack mb-4"
                >
                  شرایط و قوانین
                </a>
                <a
                  href="#"
                  className="text-sm text-gray-500 hover:text-black mb-4"
                >
                  ارتباط ما
                </a>
                <a
                  href="#"
                  className="text-sm text-gray-500 hover:text-black mb-4"
                >
                  درباره ما
                </a>
              </div>
              <div class="flex flex-col"> </div>
            </div>
          </div>
          <div className="mt-0 w-full flex items-center justify-center">
            <a href="#">
              <img
                src="https://trustseal.enamad.ir/Content/Images/Star2/81.png?v=5.0.0.3777"
                alt=""
                className="cursor-pointer"
              />
            </a>
          </div>
        </div>
      </div>
      <div className="font-medium text-sm text-center bg-[#0a5abd] text-white py-3">تمامی حقوق این سایت محفوظ و متعلق به امیرعلی نیازی دسترسی می‌باشد.</div>
    </>
  );
};

export default FooterDesktop;
