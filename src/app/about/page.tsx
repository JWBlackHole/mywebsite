import { HL, Title, SubTitle, RegularText } from "@/components/Texts";
import Link from "next/link";

export default function Page(){
    return (
        <div className="flex flex-col max-w-5xl mx-auto">
            <div className="flex flex-wrap mb-5 sm:mb-10">
                <Title>About</Title>
                <div className="w-full sm:w-fit sm:ml-4"><Title>William Lin</Title></div>
            </div>
            <div className="pb-3 sm:pb-8">
                <RegularText>Hello, it's <HL>William Lin</HL>, a Taiwan boy who always holds <HL>curiosity</HL> &#128526;.</RegularText>
            </div>
            <RegularText>
            I'm currently an <Link href="https://u-eecs.site.nthu.edu.tw/"><HL>NTHU EECS</HL></Link> student, passionate about Data Science and Machine Learning,
            as well as a <HL>SWE Intern</HL> at <Link href="https://www.deltaww.com/en-US/index"><HL>Delta Electronics</HL></Link> since 2024.07.
            </RegularText>



            {/* <Link href="/CV.pdf">
                <span style={{color: "#b3b3ff", textDecoration : "underline solid #b3b3ff"}}>William Lin CV</span>
            </Link> */}

        </div>  
    );
}