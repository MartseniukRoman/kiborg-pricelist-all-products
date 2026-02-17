import logo from "@/assets/images/logo.png";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import avatar from "@/assets/images/avatar.png";
import TelegramIcon from "@/assets/icons/TelegramIcon";
import ViberIcon from "@/assets/icons/ViberIcon";

export const Header = () => {
  return (
    <>
      <header className="py-2 pt-12.5 lg:pt-25 flex flex-col sm:flex-row sm:items-center sm:justify-between md:justify-center md:gap-15 mb-12.5 lg:mb-18">
        <h1 className="flex flex-col items-center gap-3.5 mb-4 lg:flex-row">
          <p className="text-[64px] font-semibold font-[Unbounded] text-[#6E6E49] uppercase">
            ПРАЙС
          </p>
          <img className="h-16" src={logo} alt="KIBORG" />
        </h1>

        <div className="flex flex-col items-center gap-5">
          <a
            href="https://kiborg.com.ua/"
            className="block font-[Unbounded] uppercase font-[16px] bg-[#434343] text-white rounded-[15px] w-75 py-3.75 text-center transition-all hover:-translate-y-1 hover:bg-[#525252]"
          >
            ПЕРЕЙТИ НА САЙТ
          </a>
          <Dialog>
            <DialogTrigger asChild>
              <div className="block font-[Unbounded] uppercase font-[16px] bg-[#8F9250] text-white rounded-[15px] w-75 py-3.75 text-center cursor-pointer transition-all hover:-translate-y-1 hover:bg-[#6E6E49]">
                ЗАМОВЛЕННЯ ТА ПИТАННЯ
              </div>
            </DialogTrigger>
            <DialogContent className="">
              <DialogTitle className="text-center font-[Unbounded] text-[#6E6E49]">
                ЗАМОВЛЕННЯ ТА ПИТАННЯ
              </DialogTitle>
              <hr className="border-black opacity-80" />
              <p className="font-[Unbounded] text-center">
                Щоб дізнатися інформацю про наявність товару та оформити
                замовлення, зв’яжіться з нашим менеджером за вказаними
                контактами – ми з радістю допоможемо вам оформити замовлення!
              </p>
              <hr className="border-black opacity-80" />
              <div className="flex flex-col m-auto sm:items-center justify-center sm:flex-row sm:justify-between sm:w-full font-[Unbounded] gap-5 sm:gap-0">
                <div className="sm:w-55">
                  <div className="flex items-center gap-2 mb-2">
                    <img
                      className="w-20 aspect-square"
                      src={avatar}
                      alt="Avatar"
                    />
                    <div>
                      <p className="opacity-90 text-[16px]">Менеджер</p>
                      <p className="text-[24px]">Кіборг</p>
                    </div>
                  </div>
                  <a
                    className="flex items-center gap-1 transition-colors hover:text-[#8F9250] text-[14px]"
                    href="https://t.me/@Kiborg_drop_manager"
                  >
                    <TelegramIcon className="size-6" />
                    <p>@Kiborg_drop_manager</p>
                  </a>
                  <a
                    className="flex items-center gap-1 transition-colors hover:text-[#8F9250] text-[14px]"
                    href="viber://chat?number=%2B380952055505"
                  >
                    <ViberIcon className="size-6" />
                    <p>+38 095 205 55 05</p>
                  </a>
                </div>
                <div className="sm:w-55">
                  <div className="flex items-center gap-2 mb-2">
                    <img
                      className="w-20 aspect-square"
                      src={avatar}
                      alt="Avatar"
                    />
                    <div>
                      <p className="opacity-90 text-[16px]">Менеджер</p>
                      <p className="text-[24px]">Кіборг</p>
                    </div>
                  </div>
                  <a
                    className="flex items-center gap-1 transition-colors hover:text-[#8F9250] text-[14px]"
                    href="https://t.me/@Kiborg_opt"
                  >
                    <TelegramIcon className="size-6" />
                    <p>@Kiborg_opt</p>
                  </a>
                  <a
                    className="flex items-center gap-1 transition-colors hover:text-[#8F9250] text-[14px]"
                    href="viber://chat?number=%2B380955077707"
                  >
                    <ViberIcon className="size-6" />
                    <p>+38 095 507 77 07</p>
                  </a>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </header>
    </>
  );
};
