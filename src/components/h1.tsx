import React from "react";
import { twMerge } from "tailwind-merge";

type TH1Props = {
    className: string;
    children: React.ReactNode;
};

export default function H1({ className, children }: TH1Props) {
    return (
        <h1
            className={twMerge(
                "text-3xl lg:text-6xl font-bold tracking-tight",
                className
            )}
        >
            {children}
        </h1>
    );
}
