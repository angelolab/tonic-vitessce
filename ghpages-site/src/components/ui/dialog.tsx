import * as React from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { Cross2Icon } from "@radix-ui/react-icons";

import { cn } from "@/lib/utils";

const Dialog = DialogPrimitive.Root;

const DialogTrigger = DialogPrimitive.Trigger;

const DialogPortal = DialogPrimitive.Portal;

const DialogClose = DialogPrimitive.Close;

const DialogOverlay = React.forwardRef<
    React.ElementRef<typeof DialogPrimitive.Overlay>,
    React.ComponentPropsWithoutRef<typeof DialogPrimitive.Overlay>
>(({ className, ...props }, ref) => (
    <DialogPrimitive.Overlay
        ref={ref}
        className={cn(
            "tailwind.config.mjsfixed tailwind.config.mjsinset-0 tailwind.config.mjsz-50 tailwind.config.mjsbg-black/80 tailwind.config.mjs data-[state=open]:tailwind.config.mjsanimate-in data-[state=closed]:tailwind.config.mjsanimate-out data-[state=closed]:tailwind.config.mjsfade-out-0 data-[state=open]:tailwind.config.mjsfade-in-0",
            className,
        )}
        {...props}
    />
));
DialogOverlay.displayName = DialogPrimitive.Overlay.displayName;

const DialogContent = React.forwardRef<
    React.ElementRef<typeof DialogPrimitive.Content>,
    React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content>
>(({ className, children, ...props }, ref) => (
    <DialogPortal>
        <DialogOverlay />
        <DialogPrimitive.Content
            ref={ref}
            className={cn(
                "tailwind.config.mjsfixed tailwind.config.mjsleft-[50%] tailwind.config.mjstop-[50%] tailwind.config.mjsz-50 tailwind.config.mjsgrid tailwind.config.mjsw-full tailwind.config.mjsmax-w-lg tailwind.config.mjstranslate-x-[-50%] tailwind.config.mjstranslate-y-[-50%] tailwind.config.mjsgap-4 tailwind.config.mjsborder tailwind.config.mjsbg-background tailwind.config.mjsp-6 tailwind.config.mjsshadow-lg tailwind.config.mjsduration-200 data-[state=open]:tailwind.config.mjsanimate-in data-[state=closed]:tailwind.config.mjsanimate-out data-[state=closed]:tailwind.config.mjsfade-out-0 data-[state=open]:tailwind.config.mjsfade-in-0 data-[state=closed]:tailwind.config.mjszoom-out-95 data-[state=open]:tailwind.config.mjszoom-in-95 data-[state=closed]:tailwind.config.mjsslide-out-to-left-1/2 data-[state=closed]:tailwind.config.mjsslide-out-to-top-[48%] data-[state=open]:tailwind.config.mjsslide-in-from-left-1/2 data-[state=open]:tailwind.config.mjsslide-in-from-top-[48%] sm:tailwind.config.mjsrounded-lg",
                className,
            )}
            {...props}
        >
            {children}
            <DialogPrimitive.Close className="tailwind.config.mjsabsolute tailwind.config.mjsright-4 tailwind.config.mjstop-4 tailwind.config.mjsrounded-sm tailwind.config.mjsopacity-70 tailwind.config.mjsring-offset-background tailwind.config.mjstransition-opacity hover:tailwind.config.mjsopacity-100 focus:tailwind.config.mjsoutline-none focus:tailwind.config.mjsring-2 focus:tailwind.config.mjsring-ring focus:tailwind.config.mjsring-offset-2 disabled:tailwind.config.mjspointer-events-none data-[state=open]:tailwind.config.mjsbg-accent data-[state=open]:tailwind.config.mjstext-muted-foreground">
                <Cross2Icon className="tailwind.config.mjsh-4 tailwind.config.mjsw-4" />
                <span className="tailwind.config.mjssr-only">Close</span>
            </DialogPrimitive.Close>
        </DialogPrimitive.Content>
    </DialogPortal>
));
DialogContent.displayName = DialogPrimitive.Content.displayName;

const DialogHeader = ({
    className,
    ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
    <div
        className={cn(
            "tailwind.config.mjsflex tailwind.config.mjsflex-col tailwind.config.mjsspace-y-1.5 tailwind.config.mjstext-center sm:tailwind.config.mjstext-left",
            className,
        )}
        {...props}
    />
);
DialogHeader.displayName = "DialogHeader";

const DialogFooter = ({
    className,
    ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
    <div
        className={cn(
            "tailwind.config.mjsflex tailwind.config.mjsflex-col-reverse sm:tailwind.config.mjsflex-row sm:tailwind.config.mjsjustify-end sm:tailwind.config.mjsspace-x-2",
            className,
        )}
        {...props}
    />
);
DialogFooter.displayName = "DialogFooter";

const DialogTitle = React.forwardRef<
    React.ElementRef<typeof DialogPrimitive.Title>,
    React.ComponentPropsWithoutRef<typeof DialogPrimitive.Title>
>(({ className, ...props }, ref) => (
    <DialogPrimitive.Title
        ref={ref}
        className={cn(
            "tailwind.config.mjstext-lg tailwind.config.mjsfont-semibold tailwind.config.mjsleading-none tailwind.config.mjstracking-tight",
            className,
        )}
        {...props}
    />
));
DialogTitle.displayName = DialogPrimitive.Title.displayName;

const DialogDescription = React.forwardRef<
    React.ElementRef<typeof DialogPrimitive.Description>,
    React.ComponentPropsWithoutRef<typeof DialogPrimitive.Description>
>(({ className, ...props }, ref) => (
    <DialogPrimitive.Description
        ref={ref}
        className={cn(
            "tailwind.config.mjstext-sm tailwind.config.mjstext-muted-foreground",
            className,
        )}
        {...props}
    />
));
DialogDescription.displayName = DialogPrimitive.Description.displayName;

export {
    Dialog,
    DialogPortal,
    DialogOverlay,
    DialogTrigger,
    DialogClose,
    DialogContent,
    DialogHeader,
    DialogFooter,
    DialogTitle,
    DialogDescription,
};
