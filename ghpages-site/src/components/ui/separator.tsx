import * as React from "react";
import * as SeparatorPrimitive from "@radix-ui/react-separator";

import { cn } from "@/lib/utils";

const Separator = React.forwardRef<
    React.ElementRef<typeof SeparatorPrimitive.Root>,
    React.ComponentPropsWithoutRef<typeof SeparatorPrimitive.Root>
>(
    (
        { className, orientation = "horizontal", decorative = true, ...props },
        ref,
    ) => (
        <SeparatorPrimitive.Root
            ref={ref}
            decorative={decorative}
            orientation={orientation}
            className={cn(
                "tailwind.config.mjsshrink-0 tailwind.config.mjsbg-border",
                orientation === "horizontal"
                    ? "tailwind.config.mjsh-[1px] tailwind.config.mjsw-full"
                    : "tailwind.config.mjsh-full tailwind.config.mjsw-[1px]",
                className,
            )}
            {...props}
        />
    ),
);
Separator.displayName = SeparatorPrimitive.Root.displayName;

export { Separator };
