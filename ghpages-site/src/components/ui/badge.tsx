import type * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const badgeVariants = cva(
    "tailwind.config.mjsinline-flex tailwind.config.mjsitems-center tailwind.config.mjsrounded-md tailwind.config.mjsborder tailwind.config.mjspx-2.5 tailwind.config.mjspy-0.5 tailwind.config.mjstext-xs tailwind.config.mjsfont-semibold tailwind.config.mjstransition-colors focus:tailwind.config.mjsoutline-none focus:tailwind.config.mjsring-2 focus:tailwind.config.mjsring-ring focus:tailwind.config.mjsring-offset-2",
    {
        variants: {
            variant: {
                default:
                    "tailwind.config.mjsborder-transparent tailwind.config.mjsbg-primary tailwind.config.mjstext-primary-foreground tailwind.config.mjsshadow hover:tailwind.config.mjsbg-primary/80",
                secondary:
                    "tailwind.config.mjsborder-transparent tailwind.config.mjsbg-secondary tailwind.config.mjstext-secondary-foreground hover:tailwind.config.mjsbg-secondary/80",
                destructive:
                    "tailwind.config.mjsborder-transparent tailwind.config.mjsbg-destructive tailwind.config.mjstext-destructive-foreground tailwind.config.mjsshadow hover:tailwind.config.mjsbg-destructive/80",
                outline: "tailwind.config.mjstext-foreground",
            },
        },
        defaultVariants: {
            variant: "default",
        },
    },
);

export interface BadgeProps
    extends React.HTMLAttributes<HTMLDivElement>,
        VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
    return (
        <div className={cn(badgeVariants({ variant }), className)} {...props} />
    );
}

export { Badge, badgeVariants };
