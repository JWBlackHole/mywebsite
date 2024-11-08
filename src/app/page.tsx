"use client";

import { useState } from "react";
import { Icon } from "@iconify/react/dist/iconify.js";
import Link from "next/link";
import Image from "next/image";

import { HL } from "@/components/Texts";

const LinkedButton = ({icon, text, href, color, colorHovered}: {icon: string, text: string, href: string, color: string, colorHovered: string}) => {
  const [isHovering, setIsHovered] = useState(false);
  const onMouseEnter = () => setIsHovered(true);
  const onMouseLeave = () => setIsHovered(false);

  return (
    <Link href={href}>
      <div onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}
      className="flex items-center gap-2 px-5 py-4 justify-center" style={{backgroundColor: isHovering ? colorHovered : color, borderRadius: "50px"}}>
        <Icon icon={icon} width="2rem" height="2rem"/>
        <span style={{fontSize: "1.2rem"}}>{text}</span>
      </div>
    </Link>
  )
}

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-between max-w-5x sm:w-11/12 md:w-10/12">
      <div className="mb-8" style={{borderRadius: '100px', overflow: 'hidden'}}>
        <Image src={"/square_pic.jpg"} alt={"My Pic"} width={180} height={180} />
      </div>
      <div className="mb-2">
        <span style={{fontWeight: "800", fontSize: "clamp(2rem , 5vw, 3rem)"}}>William Lin</span>
      </div>
      <div className="mx-0 sm:mx-5 md:mx-10 mb-5">
        <span style={{fontSize: "clamp(1.3rem , 3vw, 1.8rem)"}}>
          Dedicated <HL>EECS</HL> student at <Link href="https://www.nthu.edu.tw/"><HL>NTHU</HL></Link> with expertise in <HL>Data Processing</HL> and <HL>Machine Learning</HL>.
          Would like to share some news and cool techniques.&#128521;
        </span>
      </div>
      <div className="w-4/5 md:w-3/5 flex flex-col sm:flex-row gap-5 justify-center">
        <LinkedButton icon="charm:github" text="Github"   href="https://github.com/JWBlackHole"                                      color="#333333" colorHovered="#555555"/>
        <LinkedButton icon="uil:linkedin" text="LinkedIn" href="https://www.linkedin.com/in/%E6%99%89%E6%9A%90-%E6%9E%97-1b3a29261/" color="#003380" colorHovered="#0047b3"/>
      </div>
    </div>
  );
}
