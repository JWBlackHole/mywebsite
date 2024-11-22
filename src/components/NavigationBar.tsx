"use client";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from 'react';
import { Icon } from '@iconify/react';
import Link from 'next/link';
import Image from "next/image";

const TextLink = ({onClick, href, label}: {onClick: any, href: string, label: string}) => {
    const pathname = usePathname();
    const [isHovering, setIsHovered] = useState(false);
    const onMouseEnter = () => setIsHovered(true);
    const onMouseLeave = () => setIsHovered(false);

    const now_page: boolean = pathname === `${href}`;
    
    return (
        <div onClick={() => {onClick()}} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} className="w-full flex border-b-2 sm:border-0" style={{borderColor: "#2f2f2f"}}>
            <Link href={href} className="w-full py-3 px-3">
                <span style={{
                color: isHovering||now_page ? "#FFFFFF" : "#BBBBBB",
                fontSize: "clamp(1.2rem, 2.3vw, 1.4rem)",
                fontWeight: "600",
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
        <div onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} className="w-full flex py-3 pl-3 items-center border-b-2 sm:border-b-0" style={{borderColor: "#2f2f2f"}}>
            <Link className="w-full" href={href}>
                <Icon icon={icon} width="2.5rem" height="2.5em" color={isHovering?"FFFFFF":"BBBBBB"}/>
            </Link>
        </div>
    )
}

export default function NavigationBar() {
    const pathname = usePathname();
    const [isMenuExpand, setMenuExpand] = useState(false);
    const [windowWidth, setWindowWidth] = useState(0);

    useEffect(()=> {
        window.addEventListener('resize', ()=> {
            // console.log(window.innerHeight, window.innerWidth)
            setWindowWidth(window.innerWidth)
        })
        // console.log(window.innerHeight, window.innerWidth)
        setWindowWidth(window.innerWidth)
    }, [])

    return (
        <div className="w-full flex flex-col sm:flex-row justify-between items-center max-w-6xl mx-auto px-4 pt-3 pb-1 sm:px-6"
        style={{
            backgroundColor: "#0a0a0acc",
            backdropFilter: "blur(8px)",
            WebkitBackdropFilter: "blur(8px)"
        }}>
            <div className="w-full flex flex-row justify-between items-center">
                <Link onClick={() => {setMenuExpand(false)}} href="/">
                    {pathname == '/' ? <Image src={"/blackhole.ico"} alt="ico" width="60" height="60"/>: <span style={{fontWeight: "800", fontSize: "clamp(1.8rem , 3vw, 2rem)"}}>William·L</span>}
                </Link>
                <button onClick={() => setMenuExpand(prev => !prev)} className="visible sm:invisible">
                    <div>
                        <Icon icon="iconamoon:menu-burger-horizontal" width="2rem" height="2rem" color={isMenuExpand ? "#FFFFFF" : "#BBBBBB"}/>
                    </div>
                </button>
            </div>
            {
                windowWidth >= 640 || isMenuExpand
                ? 
                <div className="w-full sm:w-auto flex flex-col sm:flex-row items-center">
                    <TextLink onClick={() => {setMenuExpand(false)}} href="/about"    label="About"/>
                    <TextLink onClick={() => {setMenuExpand(false)}} href="/blog"     label="Blog"/>
                    <TextLink onClick={() => {setMenuExpand(false)}} href="/contact"  label="Contact"/>
                    <IconLink href="https://github.com/JWBlackHole" icon="mdi-github"/>
                </div>
                :
                ""
            }
        </div>
    )
}
