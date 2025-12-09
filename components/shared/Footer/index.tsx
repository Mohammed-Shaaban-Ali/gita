import React from "react";
import Image from "next/image";
import logo from "@/public/logo/gitalogo.png";
import Link from "next/link";

type Props = {};

const links = [
  {
    label: "سياسة الخصوصية",
    href: "#",
  },
  {
    label: "الشروط والأحكام",
    href: "#",
  },
  {
    label: "بروفايل الشركة",
    href: "#profile",
  },
];
function Footer({}: Props) {
  return (
    <footer className="bg-green text-green-light px-4">
      <section className="max-w-[1380px] mx-auto">
        {/* Top Section */}
        <div className=" py-5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
            {/*  Logo and Text */}
            <div className="flex flex-col md:flex-row items-center gap-4 ">
              {/* Logo */}
              <Image src={logo} alt="logo" width={56} height={56} />
              {/* Text */}
              <p className="text-18  leading-tight max-w-lg">
                منصة واحده.. تجمع السفر، التقنية، والامتياز التجاري في
                منظومة تشغيل متقدمة{" "}
              </p>
            </div>
            {/*  Links */}
            <div className="flex gap-4 md:gap-6 mx-auto md:mx-0 md:mr-auto">
              {links.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-16 hover:text-white transition-colors hover:underline"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Dividing Line */}
        <div className="border-t border-green-light/60  "></div>

        {/* Bottom Section */}
        <div className=" py-3">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 md:gap-0">
            {/* Right Side - Copyright */}
            <div className="text-16 text-center md:text-right ">
              جميع الحقوق محفوظة لشركة الذهبية العالمية للسفر والسياحة
            </div>
            {/* Left Side - Made with love */}
            <div className="flex items-center gap-1 text-16 font-bold">
              <span>صنع بـ</span>
              <span className="text-red-500 text-xl">❤️</span>
              <span>في السعودية</span>
            </div>
          </div>
        </div>
      </section>
    </footer>
  );
}

export default Footer;
