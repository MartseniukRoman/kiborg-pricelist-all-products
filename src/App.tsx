import { useEffect, useState } from "react";
import { Header } from "./components/layout/Header";
import { Footer } from "./components/layout/Footer";
import { ProductsAccordion } from "./components/layout/ProductsAccordion";
import type { Category } from "./types/Category";
import { categoriesService } from "./api/services/categoriesService";
import { cn } from "./lib/utils";
import { Loader } from "./components/layout/Loader";

const App = () => {
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    categoriesService.get().then((data) => {
      const cats = data.map((cat: Category) => {
        return {...cat, isEmpty: cat.isEmpty ? cat.isEmpty : false}
      });
      setCategories(cats);
    });
  }, []);

  return (
    <div className="m-auto">
      <Header />
      <div className="max-w-300 m-auto rounded-t-[10px] overflow-hidden">
        {categories.length ? (
          <div>
            <ProductsAccordion categories={categories} />
            <Footer
              classNames={cn({
                "bg-[#EBE9DE]": Math.floor(categories.length % 2) === 0,
                "bg-[#DEDFBF]": Math.floor(categories.length % 2) !== 0,
              })}
            />
          </div>
        ) : (
          <Loader />
        )}
      </div>
    </div>
  );
};

export default App;
