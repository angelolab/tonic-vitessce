import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
    "tailwind.config.mjsinline-flex tailwind.config.mjsitems-center tailwind.config.mjsjustify-center tailwind.config.mjswhitespace-nowrap tailwind.config.mjsrounded-md tailwind.config.mjstext-sm tailwind.config.mjsfont-medium tailwind.config.mjstransition-colors focus-visible:tailwind.config.mjsoutline-none focus-visible:tailwind.config.mjsring-1 focus-visible:tailwind.config.mjsring-ring disabled:tailwind.config.mjspointer-events-none disabled:tailwind.config.mjsopacity-50",
    {
        variants: {
            variant: {
                default:
                    "tailwind.config.mjsbg-primary tailwind.config.mjstext-primary-foreground tailwind.config.mjsshadow hover:tailwind.config.mjsbg-primary/90",
                destructive:
                    "tailwind.config.mjsbg-destructive tailwind.config.mjstext-destructive-foreground tailwind.config.mjsshadow-sm hover:tailwind.config.mjsbg-destructive/90",
                outline:
                    "tailwind.config.mjsborder tailwind.config.mjsborder-input tailwind.config.mjsbg-background tailwind.config.mjsshadow-sm hover:tailwind.config.mjsbg-accent hover:tailwind.config.mjstext-accent-foreground",
                secondary:
                    "tailwind.config.mjsbg-secondary tailwind.config.mjstext-secondary-foreground tailwind.config.mjsshadow-sm hover:tailwind.config.mjsbg-secondary/80",
                ghost: "hover:tailwind.config.mjsbg-accent hover:tailwind.config.mjstext-accent-foreground",
                link: "tailwind.config.mjstext-primary tailwind.config.mjsunderline-offset-4 hover:tailwind.config.mjsunderline",
            },
            size: {
                default:
                    "tailwind.config.mjsh-9 tailwind.config.mjspx-4 tailwind.config.mjspy-2",
                sm: "tailwind.config.mjsh-8 tailwind.config.mjsrounded-md tailwind.config.mjspx-3 tailwind.config.mjstext-xs",
                lg: "tailwind.config.mjsh-10 tailwind.config.mjsrounded-md tailwind.config.mjspx-8",
                icon: "tailwind.config.mjsh-9 tailwind.config.mjsw-9",
            },
        },
        defaultVariants: {
            variant: "default",
            size: "default",
        },
    },
);

export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement>,
        VariantProps<typeof buttonVariants> {
    asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant, size, asChild = false, ...props }, ref) => {
        const Comp = asChild ? Slot : "button";
        return (
            <Comp
                className={cn(buttonVariants({ variant, size, className }))}
                ref={ref}
                {...props}
            />
        );
    },
);
Button.displayName = "Button";

export { Button, buttonVariants };
