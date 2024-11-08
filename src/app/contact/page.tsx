import { HL, Title, SubTitle, RegularText, Supplement } from "@/components/Texts";
import Link from "next/link";

export default function Page(){
    return (
        <div className="w-100 flex-col sm:w-11/12 md:w-10/12 w-flex max-w-5xl mx-auto">
            <div className="flex md:justify-center mb-5 sm:mb-10">
                <Title>Contact</Title>
            </div>
            <div className="flex flex-col gap2 sm:gap-4">
                <RegularText>Now I am a <HL>NTHU</HL> student, so maybe you can find me on compus &#128541;</RegularText>
                <RegularText>Or you can just reach me out through this email <Link href="mailto:10williamlin@gmail.com"><HL>williamlin@gmail.com</HL></Link></RegularText>
            </div>
        </div>
    );
}