"use client";
import { usePathname } from "next/navigation";
import React, { useState } from 'react';
import { Icon } from '@iconify/react';
import Link from 'next/link';
import Image from "next/image";

const TextLink = ({href, label}: {href: string, label: string}) => {
    const pathname = usePathname();
    const [isHovering, setIsHovered] = useState(false);
    const onMouseEnter = () => setIsHovered(true);
    const onMouseLeave = () => setIsHovered(false);

    const now_page: boolean = pathname === `${href}`;
    
    return (
        <div onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
            <Link href={href}>
                <span style={{
                color: isHovering||now_page ? "#FFFFFF" : "#CCCCCC",
                textDecoration           : now_page ? "underline solid #0066ff" : "",
                textDecorationThickness  : now_page ? "3px"      : "0px",
                WebkitTextDecorationColor: now_page ? "#0066ff"  : "",
                WebkitTextDecorationLine : now_page ? "underline": "",
                WebkitTextDecorationStyle: now_page ? "solid"    : "solid",
                }}>
                    {label}
                </span>
            </Link>
        </div>
    )
}

const IconLink = ({href, icon}: {href: string, icon: string}) => {
    const [isHovering, setIsHovered] = useState(false);
    const onMouseEnter = () => setIsHovered(true);
    const onMouseLeave = () => setIsHovered(false);
    return (
        <div onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
            <Link href={href}><Icon icon={icon} width="2rem" height="2rem" color={isHovering?"FFFFFF":"BBBBBB"}/></Link>
        </div>
    )
}

export default function NavigationBar() {
    const pathname = usePathname();

    return (
        <header className="w-full flex flex-row justify-between max-w-6xl mx-auto px-4 py-3 sm:px-6">
            <Link href="/">
                {pathname == '/' ? <Image src={"/blackhole.ico"} alt="ico" width="60" height="60"/>: <span style={{fontWeight: "800", fontSize: "2rem"}}>Blackhole Lin</span>}
            </Link>
            <div className="flex flex-row gap-4 items-center" style={{fontSize: "1.2rem", fontWeight: "600"}}>
                <TextLink href="/about"    label="About"/>
                <TextLink href="/blog"     label="Blog"/>
                <TextLink href="/contact"  label="Contact"/>
                <IconLink href="https://github.com/JWBlackHole" icon="mdi-github"/>
            </div>
        </header>
    )
}
