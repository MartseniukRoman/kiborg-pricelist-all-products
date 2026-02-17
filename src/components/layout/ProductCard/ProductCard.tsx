import CloseIcon from "@/assets/icons/CloseIcon";
import { Badge } from "@/components/ui/badge";
import {
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import type { Product } from "@/types/Product";

export const ProductCard = ({ product }: { product: Product }) => {
  return (
    <DialogContent
      className="max-w-[95%] font-[Unbounded] overflow-hidden border-0 p-0"
      showCloseButton={false}
    >
      <DialogHeader className="flex flex-row items-center justify-between gap-3 bg-[#434343] px-3 py-4 text-white">
        <DialogTitle className="text-left  text-[15px] ">
          {product.name}
        </DialogTitle>
        <DialogClose>
          <CloseIcon className="size-8" />
        </DialogClose>
      </DialogHeader>
      <div className="no-scrollbar max-h-[70vh] px-6 mb-6 overflow-y-auto">
        <div className="relative mb-5 pt-5 flex flex-col">
          <img
            src={product.pictures}
            alt={product.name}
            className="mb-2  md:w-80 aspect-square object-cover m-auto"
          />
          <div className="flex gap-2 flex-wrap items-center">
            <Badge className="bg-[#8F9250]">РРЦ: {product.price} грн</Badge>
            {product.optPrice && (
              <Badge className="bg-[#6E6E49]">
                ОПТ: {product.optPrice} грн
              </Badge>
            )}
            <Badge className="bg-[#CC8110]">
              ДРОП: {product.dropPrice} грн
            </Badge>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <div className="text-[12px]">Артикул - {product.vendorCode}</div>
          <a
            href={product.url}
            className="block text-[12px] px-3 py-2.5 rounded text-white font-semibold bg-[#8f9250] text-center"
          >
            Переглянути товар
          </a>
        </div>
        {/* <div className="whitespace-pre-line">{product.description}</div> */}
      </div>
    </DialogContent>
  );
};
