import { cn } from "@/lib/utils";
import { PhoneIcon } from "lucide-react";
import type React from "react";

export const Footer: React.FC<{ classNames?: string }> = ({
  classNames = "",
}) => {
  return (
    <div
      className={cn(
        "flex flex-col justify-center items-center py-5 font-[Unbounded] font-semibold",
        classNames,
      )}
    >
      <h2 className="mb-2.5">Контакти</h2>
      <div className="flex flex-col sm:flex-row items-center justify-center gap-6.25 mb-3.75">
        <a
          href="tel:+380952055505"
          className="flex items-center justify-center gap-1.25 transition-colors hover:text-[#8F9250]"
        >
          <PhoneIcon className="text-[#6E6E49]" /> <p>+38 095 205 55 05</p>
        </a>
        <a
          href="tel:+380955077707"
          className="flex items-center justify-center gap-1.25 transition-colors hover:text-[#8F9250]"
        >
          <PhoneIcon className="text-[#6E6E49]" /> <p>+38 095 507 77 07</p>
        </a>
      </div>
      <p className="opacity-70 text-[14px]">
        © 2025 Kiborg. Всі права захищені.
      </p>
    </div>
  );
};
