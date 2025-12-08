import { Loader } from "lucide-react";
import logo from "@/public/logo/gitalogo.svg";
import Image from "next/image";

function Loading() {
  return (
    <div className="w-screen h-screen flex justify-center items-center ">
      <div className="flex-col gap-4 w-full flex items-center justify-center">
        <div className="relative w-28 h-28 flex items-center justify-center">
          <div className="absolute w-28 h-28 border-4 border-transparent border-t-[#c2971b] rounded-full animate-spin"></div>
          <Image
            src={logo}
            alt="logo"
            width={100}
            height={100}
            className="object-contain relative z-10"
          />
        </div>
      </div>
    </div>
  );
}

export default Loading;
