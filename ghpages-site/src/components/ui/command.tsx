import * as React from "react";
import { type DialogProps } from "@radix-ui/react-dialog";
import { MagnifyingGlassIcon } from "@radix-ui/react-icons";
import { Command as CommandPrimitive } from "cmdk";

import { cn } from "@/lib/utils";
import { Dialog, DialogContent } from "@/components/ui/dialog";

const Command = React.forwardRef<
    React.ElementRef<typeof CommandPrimitive>,
    React.ComponentPropsWithoutRef<typeof CommandPrimitive>
>(({ className, ...props }, ref) => (
    <CommandPrimitive
        ref={ref}
        className={cn(
            "tailwind.config.mjsflex tailwind.config.mjsh-full tailwind.config.mjsw-full tailwind.config.mjsflex-col tailwind.config.mjsoverflow-hidden tailwind.config.mjsrounded-md tailwind.config.mjsbg-popover tailwind.config.mjstext-popover-foreground",
            className,
        )}
        {...props}
    />
));
Command.displayName = CommandPrimitive.displayName;

interface CommandDialogProps extends DialogProps {}

const CommandDialog = ({ children, ...props }: CommandDialogProps) => {
    return (
        <Dialog {...props}>
            <DialogContent className="tailwind.config.mjsoverflow-hidden tailwind.config.mjsp-0">
                <Command className="[&_[cmdk-group-heading]]:tailwind.config.mjspx-2 [&_[cmdk-group-heading]]:tailwind.config.mjsfont-medium [&_[cmdk-group-heading]]:tailwind.config.mjstext-muted-foreground [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:tailwind.config.mjspt-0 [&_[cmdk-group]]:tailwind.config.mjspx-2 [&_[cmdk-input-wrapper]_svg]:tailwind.config.mjsh-5 [&_[cmdk-input-wrapper]_svg]:tailwind.config.mjsw-5 [&_[cmdk-input]]:tailwind.config.mjsh-12 [&_[cmdk-item]]:tailwind.config.mjspx-2 [&_[cmdk-item]]:tailwind.config.mjspy-3 [&_[cmdk-item]_svg]:tailwind.config.mjsh-5 [&_[cmdk-item]_svg]:tailwind.config.mjsw-5">
                    {children}
                </Command>
            </DialogContent>
        </Dialog>
    );
};

const CommandInput = React.forwardRef<
    React.ElementRef<typeof CommandPrimitive.Input>,
    React.ComponentPropsWithoutRef<typeof CommandPrimitive.Input>
>(({ className, ...props }, ref) => (
    <div
        className="tailwind.config.mjsflex tailwind.config.mjsitems-center tailwind.config.mjsborder-b tailwind.config.mjspx-3"
        cmdk-input-wrapper=""
    >
        <MagnifyingGlassIcon className="tailwind.config.mjsmr-2 tailwind.config.mjsh-4 tailwind.config.mjsw-4 tailwind.config.mjsshrink-0 tailwind.config.mjsopacity-50" />
        <CommandPrimitive.Input
            ref={ref}
            className={cn(
                "tailwind.config.mjsflex tailwind.config.mjsh-10 tailwind.config.mjsw-full tailwind.config.mjsrounded-md tailwind.config.mjsbg-transparent tailwind.config.mjspy-3 tailwind.config.mjstext-sm tailwind.config.mjsoutline-none placeholder:tailwind.config.mjstext-muted-foreground disabled:tailwind.config.mjscursor-not-allowed disabled:tailwind.config.mjsopacity-50",
                className,
            )}
            {...props}
        />
    </div>
));

CommandInput.displayName = CommandPrimitive.Input.displayName;

const CommandList = React.forwardRef<
    React.ElementRef<typeof CommandPrimitive.List>,
    React.ComponentPropsWithoutRef<typeof CommandPrimitive.List>
>(({ className, ...props }, ref) => (
    <CommandPrimitive.List
        ref={ref}
        className={cn(
            "tailwind.config.mjsmax-h-[300px] tailwind.config.mjsoverflow-y-auto tailwind.config.mjsoverflow-x-hidden",
            className,
        )}
        {...props}
    />
));

CommandList.displayName = CommandPrimitive.List.displayName;

const CommandEmpty = React.forwardRef<
    React.ElementRef<typeof CommandPrimitive.Empty>,
    React.ComponentPropsWithoutRef<typeof CommandPrimitive.Empty>
>((props, ref) => (
    <CommandPrimitive.Empty
        ref={ref}
        className="tailwind.config.mjspy-6 tailwind.config.mjstext-center tailwind.config.mjstext-sm"
        {...props}
    />
));

CommandEmpty.displayName = CommandPrimitive.Empty.displayName;

const CommandGroup = React.forwardRef<
    React.ElementRef<typeof CommandPrimitive.Group>,
    React.ComponentPropsWithoutRef<typeof CommandPrimitive.Group>
>(({ className, ...props }, ref) => (
    <CommandPrimitive.Group
        ref={ref}
        className={cn(
            "tailwind.config.mjsoverflow-hidden tailwind.config.mjsp-1 tailwind.config.mjstext-foreground [&_[cmdk-group-heading]]:tailwind.config.mjspx-2 [&_[cmdk-group-heading]]:tailwind.config.mjspy-1.5 [&_[cmdk-group-heading]]:tailwind.config.mjstext-xs [&_[cmdk-group-heading]]:tailwind.config.mjsfont-medium [&_[cmdk-group-heading]]:tailwind.config.mjstext-muted-foreground",
            className,
        )}
        {...props}
    />
));

CommandGroup.displayName = CommandPrimitive.Group.displayName;

const CommandSeparator = React.forwardRef<
    React.ElementRef<typeof CommandPrimitive.Separator>,
    React.ComponentPropsWithoutRef<typeof CommandPrimitive.Separator>
>(({ className, ...props }, ref) => (
    <CommandPrimitive.Separator
        ref={ref}
        className={cn(
            "tailwind.config.mjs-mx-1 tailwind.config.mjsh-px tailwind.config.mjsbg-border",
            className,
        )}
        {...props}
    />
));
CommandSeparator.displayName = CommandPrimitive.Separator.displayName;

const CommandItem = React.forwardRef<
    React.ElementRef<typeof CommandPrimitive.Item>,
    React.ComponentPropsWithoutRef<typeof CommandPrimitive.Item>
>(({ className, ...props }, ref) => (
    <CommandPrimitive.Item
        ref={ref}
        className={cn(
            "tailwind.config.mjsrelative tailwind.config.mjsflex tailwind.config.mjscursor-default tailwind.config.mjsselect-none tailwind.config.mjsitems-center tailwind.config.mjsrounded-sm tailwind.config.mjspx-2 tailwind.config.mjspy-1.5 tailwind.config.mjstext-sm tailwind.config.mjsoutline-none data-[disabled=true]:tailwind.config.mjspointer-events-none data-[selected=true]:tailwind.config.mjsbg-accent data-[selected=true]:tailwind.config.mjstext-accent-foreground data-[disabled=true]:tailwind.config.mjsopacity-50",
            className,
        )}
        {...props}
    />
));

CommandItem.displayName = CommandPrimitive.Item.displayName;

const CommandShortcut = ({
    className,
    ...props
}: React.HTMLAttributes<HTMLSpanElement>) => {
    return (
        <span
            className={cn(
                "tailwind.config.mjsml-auto tailwind.config.mjstext-xs tailwind.config.mjstracking-widest tailwind.config.mjstext-muted-foreground",
                className,
            )}
            {...props}
        />
    );
};
CommandShortcut.displayName = "CommandShortcut";

export {
    Command,
    CommandDialog,
    CommandInput,
    CommandList,
    CommandEmpty,
    CommandGroup,
    CommandItem,
    CommandShortcut,
    CommandSeparator,
};
