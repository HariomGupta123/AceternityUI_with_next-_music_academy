
"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "../component/ui/navbar-menu";
import { cn } from "./utils/cn";
import Link from "next/link";
function Navbar({ className }: { className?: string }) {
    const [active, setActive] = useState<string | null>(null);
    return (
        <div className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}>
            <Menu setActive={setActive}>
                <Link href={"/#"}> <MenuItem setActive={setActive} active={active} item="home">
                 

                </MenuItem>
                </Link>
                <MenuItem setActive={setActive} active={active} item="our courses">
                    <div className="  flex flex-col space-y-4 text-sm">
                        <HoveredLink href={"/allcourses"}> all courses</HoveredLink>
                        <HoveredLink href={"/Basic"}> Basic Music</HoveredLink>
                        <HoveredLink href={"/advancedcomposition"}> advanced Composition</HoveredLink>
                        <HoveredLink href={"/Songwriting"}> Songwriting</HoveredLink>
                        <HoveredLink href={"/Musicproduction"}> Music Production</HoveredLink>
                    </div>

                </MenuItem>
                <MenuItem setActive={setActive} active={active} item="contact">
                

                </MenuItem>
            </Menu>

        </div>
    )
}

export default Navbar
