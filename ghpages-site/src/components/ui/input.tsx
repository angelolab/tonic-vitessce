import * as React from "react";

import { cn } from "@/lib/utils";

export interface InputProps
    extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
    ({ className, type, ...props }, ref) => {
        return (
            <input
                type={type}
                className={cn(
                    "tailwind.config.mjsflex tailwind.config.mjsh-9 tailwind.config.mjsw-full tailwind.config.mjsrounded-md tailwind.config.mjsborder tailwind.config.mjsborder-input tailwind.config.mjsbg-transparent tailwind.config.mjspx-3 tailwind.config.mjspy-1 tailwind.config.mjstext-sm tailwind.config.mjsshadow-sm tailwind.config.mjstransition-colors file:tailwind.config.mjsborder-0 file:tailwind.config.mjsbg-transparent file:tailwind.config.mjstext-sm file:tailwind.config.mjsfont-medium placeholder:tailwind.config.mjstext-muted-foreground focus-visible:tailwind.config.mjsoutline-none focus-visible:tailwind.config.mjsring-1 focus-visible:tailwind.config.mjsring-ring disabled:tailwind.config.mjscursor-not-allowed disabled:tailwind.config.mjsopacity-50",
                    className,
                )}
                ref={ref}
                {...props}
            />
        );
    },
);
Input.displayName = "Input";

export { Input };
