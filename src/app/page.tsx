import TypewriterEffect from "@/components/Typewriter";
import Image from "next/image";

function Arrow() {
    return (
        <div className="animate-bounce">
            <div
                className="w-8 h-8 bg-transparent border-b-4 border-r-4 border-solid border-transparent border-b-amber-950 border-r-amber-950 rotate-45"></div>
        </div>
    );
}

export default function Home() {
    return (
        <div className="flex flex-col w-full items-center p-20 overflow-clip">
            <div className="flex flex-row items-center w-full m-10 mb-20 relative">
                <div className="w-1/2 flex flex-col items-start justify-center p-20">
                    <h1 className="text-7xl">Hi, I&#39;m <b>Bruno</b>.</h1>
                    <h2 className="text-2xl">
                        <TypewriterEffect values={['And I\'m a Software <em>Engineer</em>.', ' Nice to meet you.']}/>
                    </h2>
                    <div>
                        <div className="text-5xl mt-20">Or keep scrolling...</div>
                        <div className="flex flex-col items-center justify-center self-center gap-0 mt-20">
                            <Arrow/>
                            <Arrow/>
                            <Arrow/>
                        </div>
                    </div>
                </div>
                <div className="relative w-1/2 flex flex-col items-center justify-center">
                    <div
                        className="absolute -bottom-40 -left-40 w-[120vh] h-[120vh] bg-amber-950 rounded-full z-[-1]"></div>
                    <div className="relative w-96 h-96">
                        <Image
                            src="/images/self.jpeg"
                            alt="me"
                            fill={true}
                            objectFit="cover"
                            style={{borderRadius: '50%'}}
                        />
                    </div>
                    <button className="text-amber-950 bg-amber-50 text-lg rounded-full p-2 mt-10">Book a call</button>
                </div>
            </div>
        </div>
    );
}