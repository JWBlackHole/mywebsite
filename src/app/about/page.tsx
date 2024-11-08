import { HL, Title, SubTitle, RegularText, Supplement } from "@/components/Texts";
import Link from "next/link";

const Employment = ({title, employer, date}: {title: string, employer: string, date: string}) => {
    return (
        <div>
            <div className="flex flex-wrap justify-between items-center">
                <RegularText>{title}</RegularText>
                <div className="flex flex-row gap-2 w-full xl:w-auto justify-between">
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
        <div className="w-100 flex-col sm:w-11/12 md:w-10/12 lg:w-8/12 w-flex max-w-2xl mx-auto">
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
                <div className="mb-2 sm:mb-3">
                    <SubTitle>EMPLOYMENT</SubTitle>
                </div>
                <div className="flex flex-col gap-2">
                    <Employment title="Software Engineer Intern" employer="Delta Electronics, Inc."    date="2024.07 ~ present"/>
                    <Employment title="Full-stack Developer"     employer="NTHU Garage, Sport JioJio" date="2023.09 ~ 2024.08"/>
                </div>
            </div>

            <div className="mb-6 sm:mb-10">
                <div className="mb-2 sm:mb-3">
                    <SubTitle>PROJECT</SubTitle>
                </div>
                <div className="flex flex-col gap-2">
                    <RegularText>Decoding MEG Brain Waves: A Comparative Analysis of ML Model Performance</RegularText>
                    <Supplement>{`- Explored the comparative performance of various machine learning models in decoding magnetoencephalography (MEG) brain wave data, provideing insights into model selection for neural decoding tasks.`}</Supplement>
                </div>
            </div>

            <div className="mb-6 sm:mb-10">
                <div className="mb-2 sm:mb-3">
                    <SubTitle>CLUBS</SubTitle>
                </div>
                <div className="flex flex-col gap-2">
                    <RegularText>{`NTHU Google Developer Student Club`}</RegularText>
                    <RegularText>{`NTHU Garage`}</RegularText>
                    <RegularText>{`NTHU Blockchain Club`}</RegularText>
                </div>
            </div>

            <div className="mb-6 sm:mb-10">
                <div className="mb-2 sm:mb-3">
                    <SubTitle>SKILLS</SubTitle>
                </div>
                <div className="flex flex-col gap-2">
                    <RegularText>{`Python, Javascript, C/C++`}</RegularText>
                    <RegularText>{`Pytorch, Tensorflow`}</RegularText>
                    <RegularText>{`Git, Conda, Docker, Linux/Unix`}</RegularText>
                </div>
            </div>

            {/* <Link href="/CV.pdf">
                <span style={{color: "#b3b3ff", textDecoration : "underline solid #b3b3ff"}}>William Lin CV</span>
            </Link> */}

        </div>  
    );
}