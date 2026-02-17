import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { useEffect, useRef, useState } from "react";

export const VendorCell = ({ value }: { value: string }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isOverflow, setIsOverflow] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (el) {
      setIsOverflow(el.scrollWidth > el.clientWidth);
    }
  }, [value]);

  const content = (
    <div ref={ref} className="truncate w-full">
      {value}
    </div>
  );

  if (!isOverflow) {
    return content;
  }

  return (
    <Tooltip>
      <TooltipTrigger asChild>{content}</TooltipTrigger>
      <TooltipContent bgColor="#6E6E49">{value}</TooltipContent>
    </Tooltip>
  );
}
