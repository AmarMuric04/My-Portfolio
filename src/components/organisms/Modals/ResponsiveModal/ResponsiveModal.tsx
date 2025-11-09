import { useMediaQuery } from "usehooks-ts";
import React from "react";

import { DialogContent, DialogTitle, Dialog } from "@/components/ui/dialog";
import { DrawerContent, Drawer } from "@/components/ui/drawer";
import { cn } from "@/lib/utils";

const ResponsiveModal: React.FC<{
  children: React.ReactNode;
  classNameDrawer?: string;
  classNameDialog?: string;
  isDrawerOnly?: boolean;
  onClose?: () => void;
  open: boolean;
}> = ({
  isDrawerOnly = false,
  classNameDialog,
  classNameDrawer,
  children,
  onClose,
  open,
}) => {
  const isDesktop = useMediaQuery("(min-width: 768px)");

  if (!isDesktop && !isDrawerOnly) {
    return (
      <Drawer onClose={onClose} open={open}>
        <DrawerContent className={cn("px-6 pb-6", classNameDrawer)}>
          <div className="max-h-9/10 h-120 overflow-auto">{children}</div>
        </DrawerContent>
      </Drawer>
    );
  }
  return (
    <Dialog onOpenChange={onClose} open={open}>
      <DialogContent className={classNameDialog}>
        {/* To prevent accessibility errors by Radix */}
        <DialogTitle className="sr-only">Dialog Title</DialogTitle>
        <div className="max-h-[80vh] h-150 overflow-auto">{children}</div>
      </DialogContent>
    </Dialog>
  );
};

export { ResponsiveModal };
