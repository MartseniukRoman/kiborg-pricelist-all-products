import { TableCell, TableRow } from "@/components/ui/table";
import type { Product } from "@/types/Product";
import { VendorCell } from "../VendorCell";
import type React from "react";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import { ProductCard } from "../ProductCard";

type Props = {
  product: Product;
};

const TableItem: React.FC<Props> = ({ product }) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <TableRow key={product.id} className="text-center cursor-pointer">
          <TableCell className="border border-border font-[Unbounded] font-medium text-[10px] sm:text-[14px] truncate">
            <VendorCell value={product.vendorCode} />
          </TableCell>

          <TableCell className="border border-border font-[Unbounded] w-[40%] text-[12px] sm:text-[16px] sm:max-w-[60%] truncate text-left">
            {product.name}
          </TableCell>

          <TableCell className="m-0! p-0! border border-border font-[Unbounded] text-center text-[7px] sm:text-[14px]">
            {Math.round(product.price)}
          </TableCell>

          <TableCell className="m-0! p-0! border border-border font-[Unbounded] text-center text-[7px] sm:text-[14px]">
            {product.optPrice ? Math.round(product.optPrice) : "-"}
          </TableCell>

          <TableCell className="m-0! p-0! border border-border font-[Unbounded] text-center text-[7px] sm:text-[14px]">
            {Math.round(product.dropPrice)}
          </TableCell>
        </TableRow>
      </DialogTrigger>
      <ProductCard product={product} />
    </Dialog>
  );
};

export default TableItem;
