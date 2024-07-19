import * as React from "react";
import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { CheckIcon } from "@radix-ui/react-icons";

import { cn } from "@/lib/utils";

const Checkbox = React.forwardRef<
    React.ElementRef<typeof CheckboxPrimitive.Root>,
    React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>
>(({ className, ...props }, ref) => (
    <CheckboxPrimitive.Root
        ref={ref}
        className={cn(
            "tailwind.config.mjspeer tailwind.config.mjsh-4 tailwind.config.mjsw-4 tailwind.config.mjsshrink-0 tailwind.config.mjsrounded-sm tailwind.config.mjsborder tailwind.config.mjsborder-primary tailwind.config.mjsshadow focus-visible:tailwind.config.mjsoutline-none focus-visible:tailwind.config.mjsring-1 focus-visible:tailwind.config.mjsring-ring disabled:tailwind.config.mjscursor-not-allowed disabled:tailwind.config.mjsopacity-50 data-[state=checked]:tailwind.config.mjsbg-primary data-[state=checked]:tailwind.config.mjstext-primary-foreground",
            className,
        )}
        {...props}
    >
        <CheckboxPrimitive.Indicator
            className={cn(
                "tailwind.config.mjsflex tailwind.config.mjsitems-center tailwind.config.mjsjustify-center tailwind.config.mjstext-current",
            )}
        >
            <CheckIcon className="tailwind.config.mjsh-4 tailwind.config.mjsw-4" />
        </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
));
Checkbox.displayName = CheckboxPrimitive.Root.displayName;

export { Checkbox };
