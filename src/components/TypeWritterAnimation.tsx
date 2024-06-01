"use client";

import React, { useMemo, useRef, useEffect } from "react";
import Typed from "typed.js";

interface TypeWritterAnimationProps {
    stopped?: boolean;
    startWhenVisible?: boolean;
    style?: React.CSSProperties;
    className?: string;
    parseRef?: (ref: React.RefObject<any>) => HTMLElement;
    typedRef?: (typed: Typed) => void;
    children?: React.ReactElement;
    strings?: string[];
    stringsElement?: string | Element;
    typeSpeed?: number;
    startDelay?: number;
    backSpeed?: number;
    smartBackspace?: boolean;
    shuffle?: boolean;
    backDelay?: number;
    fadeOut?: boolean;
    fadeOutClass?: string;
    fadeOutDelay?: number;
    loop?: boolean;
    loopCount?: number;
    showCursor?: boolean;
    cursorChar?: string;
    autoInsertCss?: boolean;
    attr?: string;
    bindInputFocusEvents?: boolean;
    contentType?: string;
}

const TypeWritterAnimation: React.FC<TypeWritterAnimationProps> = (({ style, className, typedRef, parseRef, stopped, children, startWhenVisible, ...typedOptions }) => {
    const rootElement = useRef<any>(null);
    const shouldUpdateArgs = useMemo(
        () => [
            ...Object.values(typedOptions).filter(
                (v) =>
                    typeof v === "boolean" ||
                    typeof v === "number" ||
                    typeof v === "string"
            ),
            typedOptions.strings?.join(","),
        ],
        [typedOptions]
    );
    useEffect(() => {
        const element =
            (parseRef && parseRef(rootElement)) || rootElement.current;
        const typed = new Typed(element, { ...typedOptions });

        if (stopped || startWhenVisible) {
            typed?.stop();
        }

        if (startWhenVisible) {
            const observer = new IntersectionObserver(([entry]) => {
                if (entry.isIntersecting) {
                    typed?.start();
                    observer.disconnect();
                }
            });
            observer.observe(element);
        }

        if (typedRef && typed) {
            typedRef(typed);
        }
        return () => {
            typed.destroy();
        };
    }, shouldUpdateArgs);

    const child = !children ? (
        <span style={style} className={className} ref={rootElement} />
    ) : (
        React.cloneElement(children, {
            ref: rootElement,
        })
    );
    return child;
}
);

export default TypeWritterAnimation;