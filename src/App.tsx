import { useEffect, useState } from "react";
import type { Product } from "./types/Product";
import { getProducts } from "./api/getGoods";

const App = () => {
  const [products, setProducts] = useState<Product[]>([]);
  console.log(products);

  useEffect(() => {
    getProducts().then(data => setProducts(data));
  }, []);

  return (<>
  <h1>Products</h1>
  <div>
    {products.map(product => {
      return (
        <div key={product.id} className="flex gap-5">
          <h2>{product.name}</h2>
          <span>{product.price}</span>
          <span>{product.optPrice}</span>
          <span>{product.dropPrice}</span>
        </div>
      )
    })}
  </div>
  </>
  );
};

export default App;
