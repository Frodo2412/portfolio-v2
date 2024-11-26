'use client'

import Typewriter from 'typewriter-effect';

export default function Hero() {

    return (
        <div className="w-full h-fit flex flex-col items-start justify-center md:p-20">
            <h1 className={'text-7xl'}>Hi, I&#39;m <b>Bruno</b></h1>
            <h2 className={'text-2xl'}>
                <Typewriter
                    onInit={(typewriter) => {
                        typewriter.typeString('And I\'m a Software <em>Engineer</em>')
                            .pause()
                            .start();
                    }}
                />
            </h2>
        </div>
    );

}
