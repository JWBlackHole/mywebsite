import { HL, Title, SubTitle, RegularText, Supplement } from "@/components/Texts";
import Link from "next/link";

const Employment = ({title, employer, date}: {title: string, employer: string, date: string}) => {
    return (
        <div className="mb-2">
            <div className="flex flex-wrap justify-between items-center">
                <RegularText>{title}</RegularText>
                <div className="flex flex-row gap-2 w-full lg:w-auto justify-between">
                    <Supplement>{employer}</Supplement>
                    <div className="flex-none">
                        <Supplement>{date}</Supplement>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default function Page(){
    return (
        <div className="flex flex-col max-w-5xl mx-auto md:mx-10c">
            <div className="flex md:justify-center mb-5 sm:mb-10">
                <Title>About Me</Title>
                {/* <div className="w-full md:w-auto md:ml-4"><Title>William Lin</Title></div> */}
            </div>

            <div className="mb-6 sm:mb-10">
                <div className="mb-4 sm:mb-8">
                    <RegularText>
                        Hello, it's <HL>William Lin</HL>, a Taiwan boy who always holds <HL>curiosity</HL> &#128526;.
                    </RegularText>
                </div>
                <div>
                    <RegularText>
                        I'm currently an <Link href="https://u-eecs.site.nthu.edu.tw/"><HL>NTHU EECS</HL></Link> student, passionate about Data Science and Machine Learning,
                        as well as a <HL>SWE Intern</HL> at <Link href="https://www.deltaww.com/en-US/index"><HL>Delta Electronics</HL></Link> since 2024.07.
                    </RegularText>
                </div>
            </div>
            
            <div className="mb-6 sm:mb-10">
                <div className="mb-2 sm:mb-4">
                    <SubTitle>Employment</SubTitle>
                </div>
                <Employment title="Software Engineer Intern" employer="Delta Electronics, Inc."    date="2024.07 ~ present"/>
                <Employment title="Full-stack Developer"     employer="NTHU Garage, Sport JioJio" date="2023.09 ~ 2024.08"/>
            </div>

            <div>
                <div className="mb-2 sm:mb-4">
                    <SubTitle>Project</SubTitle>
                </div>
                <div>
                    <RegularText>Decoding MEG Brain Waves: A Comparative Analysis of ML Model Performance</RegularText>
                </div>
            </div>

            {/* <Link href="/CV.pdf">
                <span style={{color: "#b3b3ff", textDecoration : "underline solid #b3b3ff"}}>William Lin CV</span>
            </Link> */}

        </div>  
    );
}