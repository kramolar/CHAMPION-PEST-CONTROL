import { useEffect, useRef } from 'react';
import SplitType from 'split-type';
import { gsap } from 'gsap';

export const TextAnimation = ({ text, animationDelay  }) => {
    const textRef = useRef(null);

    useEffect(() => {
        if (textRef.current) {
            const splitText = new SplitType(textRef.current, { types: 'words, chars' });

            gsap.from(splitText.chars, {
                opacity: 0,
                y: 20,
                duration: 0.7,
                stagger: { amount: 1 },
                delay: animationDelay
            });
        }
    }, [animationDelay]);

    return (
        <div ref={textRef}>
            {text}
        </div>
    );
};
