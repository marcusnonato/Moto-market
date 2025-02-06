import Image from "next/image";

interface IconProps {
  src: string;
}

function Icon({ src }: IconProps) {
  return (
    <div className="relative h-[22px] w-[22px] hover:cursor-pointer">
      <Image src={src} fill alt="Icon" />
    </div>
  );
}

export default Icon;
