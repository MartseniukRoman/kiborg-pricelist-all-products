import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../ui/accordion";
import React, { useEffect, useState } from "react";
import ProductsTable from "../ProductsTable/ProductsTable";
import type { Category } from "@/types/Category";
import { cn } from "@/lib/utils";
import type { Product } from "@/types/Product";
import { productsService } from "@/api/services/productsService";
import { Loader } from "../Loader";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";

type Props = {
  categories: Category[];
};

export const ProductsAccordion: React.FC<Props> = ({ categories }) => {
  const [opened, setOpened] = useState<string[]>([]);

  const [productsByCategory, setProductsByCategory] = useState<
    Record<number, Product[]>
  >({});
  const [loadingByCategory, setLoadingByCategory] = useState<
    Record<number, boolean>
  >({});

  useEffect(() => {
    if (!opened.length) return;

    opened.forEach((value) => {
      const categoryId = Number(value.replace("item-", ""));
      if (productsByCategory[categoryId]) return;

      setLoadingByCategory((p) => ({ ...p, [categoryId]: true }));

      productsService.getByCategoryId(categoryId).then((products) => {
        setProductsByCategory((p) => ({ ...p, [categoryId]: products }));
        setLoadingByCategory((p) => ({ ...p, [categoryId]: false }));
      });
    });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [opened]);

  return (
    <>
      <Accordion
        type="multiple"
        value={opened} // <- controlled
        onValueChange={(val) => setOpened(val || "")}
        className="max-w-300 m-auto"
      >
        {categories.map((category, id) => {
          return (
            <AccordionItem
              value={`item-${category.id}`}
              key={category.id}
              disabled={category.isEmpty}
            >
              {!category.isEmpty ? (
                <AccordionTrigger
                  className={cn(
                    "flex items-center w-full h-22.5 cursor-pointer rounded-none text-[18px] sm:text-[26px] font-[Unbounded] uppercase pl-7.5 pr-5 sm:pr-12.5 text-[#3c3c3c] hover:no-underline transition-colors hover:bg-[#babe62]",
                    {
                      "bg-[#EBE9DE]": Math.floor(id % 2) === 0,
                      "bg-[#DEDFBF]": Math.floor(id % 2) !== 0,
                    },
                  )}
                >
                  {category.name}
                </AccordionTrigger>
              ) : (
                <Tooltip>
                  <TooltipTrigger disabled={false} asChild>
                    <div className="w-full">
                      <AccordionTrigger
                        className={cn(
                          "flex items-center w-full h-22.5 cursor-pointer rounded-none text-[18px] sm:text-[26px] font-[Unbounded] uppercase pl-7.5 pr-5 sm:pr-12.5 text-[#3c3c3c] hover:no-underline transition-colors hover:bg-[#babe62]",
                          {
                            "bg-[#EBE9DE]": Math.floor(id % 2) === 0,
                            "bg-[#DEDFBF]": Math.floor(id % 2) !== 0,
                          },
                        )}
                      >
                        {category.name}
                      </AccordionTrigger>
                    </div>
                  </TooltipTrigger>
                  <TooltipContent bgColor="#6E6E49">
                    Дана категорія на даний момент порожня...
                  </TooltipContent>
                </Tooltip>
              )}
              <AccordionContent>
                {loadingByCategory[category.id] ? (
                  <Loader />
                ) : productsByCategory[category.id] ? (
                  <ProductsTable products={productsByCategory[category.id]} />
                ) : null}
              </AccordionContent>
            </AccordionItem>
          );
        })}
      </Accordion>
    </>
  );
};
