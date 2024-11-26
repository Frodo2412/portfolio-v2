import TypewriterEffect from "@/components/Typewriter";

export default function Home() {
    return (
        <div className={'flex flex-col w-full items-center p-20'}>
            <div className="w-full h-fit flex flex-col items-start justify-center md:p-20">
                <h1 className={'text-7xl'}>Hi, I&#39;m <b>Bruno</b>.</h1>
                <h2 className={'text-2xl'}>
                    <TypewriterEffect values={['And I\'m a Software <em>Engineer</em>.', ' Nice to meet you.']}/>
                </h2>
            </div>
        </div>
    )
        ;
}
