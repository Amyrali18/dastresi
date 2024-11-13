import FavCategoriesSlider from "./FavCategoriesSlider/FavCategoriesSlider";


const FavCategories = () => {
   
    return ( 
        <>
        <div className="max-w-screen-xl mx-auto p-4 mb-8 mt-8">
        <h3 className="text-2xl text-center font-bold text-black mb-4">دسته‌بندی‌های منتخب</h3>
        
        <FavCategoriesSlider/>  
        </div>
        </>
     );
}
 
export default FavCategories
