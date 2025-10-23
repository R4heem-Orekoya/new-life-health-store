import Image from "next/image";
import LogoImage from "~/public/logo.jpg";

export default function Logo() {
   return (
      <div className="flex items-center gap-2">
         <div className="relative size-10 object-contain">
            <Image src={LogoImage} fill unoptimized alt="logo image" />
         </div>
         <span className=" font-medium tracking-tight text-primary leading-0">New Life Health Store</span>
      </div>
   );
}
