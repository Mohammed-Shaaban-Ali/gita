import Image from "next/image";
import whatsappImage from "@/public/images/whatsapp.png";

type Props = {};

function Whatsapp({}: Props) {
  return (
    <section className="h-12 sm:h-14 md:h-16 bg-white flex items-center justify-center px-4 ">
      <a
        href="https://wa.me/966599999999"
        target="_blank"
        className="flex items-center gap-2"
      >
        <Image
          src={whatsappImage}
          alt="whatsappImage"
          width={30}
          height={30}
          className="object-contain w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8"
        />
        <span className="text-18 font-medium">تواصل عبر ااواتس اب</span>
      </a>
    </section>
  );
}

export default Whatsapp;
