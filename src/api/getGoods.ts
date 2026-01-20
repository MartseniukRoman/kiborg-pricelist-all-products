import type { Product } from "../types/Product";
import { parseProducts } from "../utils/parseProducts";

const productsYmlFile = "/data/products.xml";

const optYmlFile =
  "https://kiborg.salesdrive.me/export/yml/export.yml?publicKey=kMkMQtPoiHXLUiVC1ywksAJsBS_shaRrMpzxfXI-vBhV-1snCToX0P0GOtryZgAUcZ2Yx1I";

const dropYmlFile =
  "https://kiborg.salesdrive.me/export/yml/export.yml?publicKey=h8cPQVcAs6jlGCoOYEKgyjCxZ2pHk1f5C5NHWssLfTLf__wnp9MuT_WgKW-b3";

const rrpYmlFile =
  "https://kiborg.salesdrive.me/export/yml/export.yml?publicKey=JAvWTZJQXYHA15-Adae5O-JRlHOuDA97l1SBWVXpy_Okn3WEsPjQKZmcbiOGYCfWYNC6_M42GBn5";

async function getOptPrices() {
  const res = await fetch(optYmlFile);
  const xml = await res.text();
  const products = parseProducts(xml);

  const prices = products.map((product) => ({
    id: product.vendorCode,
    price: product.price,
  }));
  return prices;
}

async function getDropPrices() {
  const res = await fetch(dropYmlFile);
  const xml = await res.text();
  const products = parseProducts(xml);
  const prices = products.map((product) => ({
    id: product.vendorCode,
    price: product.price,
  }));

  return prices;
}

async function getRrpPrices() {
  const res = await fetch(rrpYmlFile);
  const xml = await res.text();
  const products = parseProducts(xml);
  const prices = products.map((product) => ({
    id: product.vendorCode,
    price: product.price,
  }));
  return prices;
}

export async function getProducts(): Promise<Product[]> {
  const res = await fetch(productsYmlFile);
  const xml = await res.text();

  const optPrices = await getOptPrices();
  const dropPrices = await getDropPrices();
  const rrpPrices = await getRrpPrices();

  let products = parseProducts(xml);

  products = products.map((product) => {
    const optPriceObj = optPrices.find((p) => p.id === product.vendorCode);
    const dropPriceObj = dropPrices.find((p) => p.id === product.vendorCode);
    const rrpPriceObj = rrpPrices.find((p) => p.id === product.vendorCode);

    return {
      ...product,
      price: rrpPriceObj ? rrpPriceObj.price : product.price,
      optPrice: optPriceObj ? optPriceObj.price : undefined,
      dropPrice: dropPriceObj ? dropPriceObj.price : undefined,
    };
  });

  const resProducts = products.filter(
    (product) =>
      product.optPrice !== undefined &&
      product.dropPrice !== undefined 
   //   && product.available === "true",
  );

  return resProducts;
}
