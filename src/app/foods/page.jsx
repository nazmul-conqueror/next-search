import { LuGalleryHorizontal } from "react-icons/lu";
import CategoryFilter from "../components/foods/category-filter";
import FoodCard from "../components/foods/FoodCard";
import NoFood from "../components/foods/no-food";
import SearchFood from "../components/foods/search-food";

const getFoods = async(category = "", search = "") =>{
    const res =await fetch(`https://phi-lab-server.vercel.app/api/v1/lab/foods?category=${category}&search=${search}`)
    const data =await res.json()
    return data.data

}


const FoodsPage = async({ searchParams}) => {
    const sp =await  searchParams;
    console.log(sp);
    
    const foods =await getFoods(sp.category, sp.search)
  console.log(foods);
  
    return (
       <div className="container mx-auto mb-5">
      <h1 className="text-center mt-10 font-bold text-4xl">Foods</h1>

      <div>
        <SearchFood />
        <CategoryFilter />
      </div>

      {!foods || foods.length === 0 ? (
        <NoFood />
      ) : (
        <div className="grid grid-cols-4 mt-10 gap-5">
          {foods.map((food) => (
            <FoodCard key={food.id} food={food} />
          ))}
        </div>
      )}
    </div>
    );
};

export default FoodsPage;