import { Separator } from "./ui/separator";
import Icon from "./icon";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="flex flex-col border-t-[1px] border-white bg-[#181818] pb-6 pt-4 dark:bg-black lg:px-[600px]">
      <div className="self-center">
        <Image src="/logo-dark.png" alt="Logo" width={110} height={110} />
      </div>

      <div className="mt-8 flex flex-row justify-around">
        <a target="_blank" href="https://www.instagram.com/marcusvinicius2i/">
          <Icon src="/instagram-icon.png" />
        </a>

        <a target="_blank" href="https://www.facebook.com/marcus.nonato.1/">
          <Icon src="/facebook-icon.png" />
        </a>

        <a target="_blank" href="https://wa.me/5592995263569">
          <Icon src="/whatsapp-icon.png" />
        </a>
        <a target="_blank" href="https://maps.app.goo.gl/aiHG8tVXLcTqAGU8A">
          <Icon src="/pin-icon.png" />
        </a>
      </div>
      <div className="px-6">
        <Separator className="my-6" />
      </div>
      <div className="flex flex-col gap-1 px-6 pt-6 text-center text-white">
        <h1>Todos os direitos reservados</h1>
        <h1>Sua moto 0km é nossa prioridade</h1>
      </div>
    </div>
  );
};

export default Footer;
