import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import type { Product } from "@/types/Product";
import type React from "react";
import TableItem from "../TableItem/TableItem";

type Props = {
  products: Product[];
};


const ProductsTable: React.FC<Props> = ({ products }) => {
    return (
      <Table className="table-fixed w-full">
        <TableHeader className="h-18 relative w-full">
          <TableRow>
            <TableHead className="border border-t-0 border-border text-[8px] w-15 sm:w-30 uppercase font-[Unbounded] font-semibold sm:text-[16px] text-center">
              Артикул
            </TableHead>

            <TableHead className="relative sm:w-auto h-18 flex flex-col items-center justify-center font-[Unbounded]">
              <div className="uppercase font-semibold text-[12px] sm:text-[18px]">
                Назва
              </div>
              <div className="hidden sm:block text-[12px] max-w-[90%] text-wrap text-center">
                Натисніть на назву щоб переглянути інформацію про товар
              </div>
            </TableHead>

            <TableHead className="bg-[#8F9250] text-center uppercase font-[Unbounded] sm:font-semibold text-[8px] text-white w-10 p-0 sm:text-[18px] sm:w-22.5">
              РЦЦ
            </TableHead>

            <TableHead className="bg-[#6E6E49] text-center uppercase font-[Unbounded] sm:font-semibold text-[8px] text-white w-10 p-0 sm:text-[18px] sm:w-22.5">
              ОПТ
            </TableHead>

            <TableHead className="bg-[#CC8110] text-center uppercase font-[Unbounded] sm:font-semibold text-[8px] text-white w-12 p-0 sm:text-[18px] sm:w-22.5">
              ДРОП
            </TableHead>
          </TableRow>
        </TableHeader>

        <TableBody className="relative">
          {products.map((product: Product) => (
            <TableItem key={product.vendorCode} product={product} />
          ))}
        </TableBody>
      </Table>
    );
};

export default ProductsTable;
