import { useQuery } from "@tanstack/react-query";

import CategoriesItem from "./CategoriesItem";

const Category = () => {
  const { data: products = [] } = useQuery({
    queryKey: ["productOptions"],
    queryFn: async () => {
      const res = await fetch(`http://localhost:5000/productOptions`);
      const data = await res.json();
      return data;
    },
  });

  return (
    <div>
      <h4 className="font-bold text-center text-slate-800 text-2xl ">
        All Brands
      </h4>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-6">
        {products.map((product) => (
          <CategoriesItem key={product._id} product={product}></CategoriesItem>
        ))}
      </div>
    </div>
  );
};

export default Category;
