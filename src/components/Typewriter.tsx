'use client';

import Typewriter from "typewriter-effect";

export default function TypewriterEffect(props: { values: string[] }) {

    return (
        <Typewriter
            onInit={(typewriter) => {
                let writer = typewriter
                props.values.forEach(s => writer = writer.typeString(s).pauseFor(500))
                writer.pause().start();
            }}
        />
    )

}