"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Search, Menu, X } from "lucide-react";
import logo from "@/public/logo/logo.svg";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

type Props = {};

const menuItems = [
  { label: "الرئيسية", href: "#home" },
  { label: "تطبيقنا", href: "#app" },
  { label: "من نحن", href: "#about" },
  { label: "بروفايلنا", href: "#profile" },
  { label: "انضم لفريقنا", href: "#careers" },
  { label: "عرب جت", href: "#arab-jet" },
  { label: "فروعنا", href: "#branches" },
  { label: "تواصل معنا", href: "#contact" },
];

function Navbar({}: Props) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className=" w-full absolute top-0 left-0 z-50">
      <div className="container ">
        <div className="flex items-center justify-between  h-12 sm:h-14 md:h-16">
          <div className="flex items-center gap-9 ">
            {/* Logo - Right side in RTL */}
            <div className="flex items-center gap-2 ">
              <Image
                src={logo}
                alt="Golden International Logo"
                width={60}
                height={60}
                priority
                className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16"
              />
            </div>

            {/* Menu Items - Center */}
            <div className="hidden lg:flex items-center gap-9 flex-1 justify-center">
              {menuItems.map((item, index) => (
                <Link
                  key={index}
                  href={item.href}
                  className="text-white text-18 font-medium hover:opacity-80 transition-opacity whitespace-nowrap cursor-pointer"
                  onClick={(e) => {
                    e.preventDefault();
                    const element = document.querySelector(item.href);
                    if (element) {
                      element.scrollIntoView({
                        behavior: "smooth",
                        block: "start",
                      });
                    }
                  }}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
          {/* Search Bar - Left side in RTL */}
          <div className="hidden md:flex items-center flex-1 max-w-[220px] mr-4 lg:mr-0">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-green w-4 h-4" />
              <input
                type="text"
                placeholder="ابحث في جيتا"
                className="w-full bg-white rounded-full pl-10 pr-4 py-2 text-[12px]
                 placeholder-black focus:outline-none focus:ring-0 focus:ring-none"
                dir="rtl"
              />
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-white p-2 cursor-pointer"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="lg:hidden overflow-hidden border-t border-white/20 bg-white  p-4 "
            >
              <div className="flex flex-col gap-3">
                {menuItems.map((item, index) => (
                  <motion.a
                    key={index}
                    href={item.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.15 + index * 0.05, duration: 0.3 }}
                    className="text-black text-base font-medium hover:opacity-80 transition-opacity py-1 cursor-pointer"
                    onClick={(e) => {
                      e.preventDefault();
                      setIsMobileMenuOpen(false);
                      const element = document.querySelector(item.href);
                      if (element) {
                        element.scrollIntoView({
                          behavior: "smooth",
                          block: "start",
                        });
                      }
                    }}
                  >
                    {item.label}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}

export default Navbar;
