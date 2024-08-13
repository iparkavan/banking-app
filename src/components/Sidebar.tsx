"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import logo from "../public/icons/logo.svg";
import Home from "../public/icons/home.svg";
import { sidebarLinks } from "@/constants";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

const Sidebar = ({ user }: SiderbarProps) => {
  const pathName = usePathname();
  return (
    <section className="sidebar">
      <nav className="flex flex-col gap-4">
        <Link href={"/"} className="mb-12 cursor-pointer items-center gap-2">
          <Image
            alt="#1"
            src={logo}
            width={34}
            height={34}
            className="size-[24px] max-xl:size-14"
          />
          <h1 className="sidebar-logo">Horizon</h1>
        </Link>
        {sidebarLinks.map((item) => {
          const isActive =
            pathName === item.route || pathName.startsWith(`${item.route}/`);
          return (
            <Link
              href={item.route}
              key={item.label}
              className={cn("sidebar-link", isActive && "bg-bank-gradient")}
            >
              <div className="relative size-6">
                <Image
                  src={Home}
                  alt={item.imgURL}
                  fill
                  className={cn(isActive && "brightness-[3] invert-0")}
                />
              </div>
              <p className={cn("sidebar-label", isActive && "!text-white")}>
                {item.label}
              </p>
            </Link>
          );
        })}
      </nav>
    </section>
  );
};

export default Sidebar;
