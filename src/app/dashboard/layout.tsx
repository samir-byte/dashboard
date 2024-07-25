import { Menu } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Logo from "@/components/common/logo";
import DashboardNav from "@/components/navs/nav";
import DashboardNavSm from "@/components/navs/nav-sm";
import UserMenu from "@/components/navs/user-nav";
import useAuthStore from "@/store/auth";
import { useEffect } from "react";
import { useRouter } from "@/routes/hooks/use-router";
import { ModeToggle } from "@/components/common/theme-toggle";
import { DialogDescription, DialogTitle } from "@/components/ui/dialog";
import * as VisuallyHidden from "@radix-ui/react-visually-hidden";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { user } = useAuthStore();
  const router = useRouter();

  useEffect(() => {
    if (!user) {
      return router.replace("/login");
    }
  }, [user]);

  return (
    <div className="grid overflow-hidden min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
      <div className="hidden border-r bg-muted/40 md:block">
        <div className="flex h-full max-h-screen flex-col gap-2">
          <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
            <Logo />
          </div>
          <div className="flex-1">
            <DashboardNav />
          </div>
        </div>
      </div>
      <div className="flex overflow-hidden flex-col">
        <header className="flex h-14 items-center gap-4 border-b bg-muted/40 px-4 lg:h-[60px] lg:px-6">
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="shrink-0 md:hidden"
              >
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="flex flex-col">
              <DialogTitle>
                <VisuallyHidden.Root>Menu</VisuallyHidden.Root>
              </DialogTitle>
              <DialogDescription>
                <VisuallyHidden.Root>Menu description</VisuallyHidden.Root>
              </DialogDescription>
              <DashboardNavSm />
            </SheetContent>
          </Sheet>
          <div className="w-full flex-1 text-customred">Header</div>
          <ModeToggle />
          <UserMenu />
        </header>
        <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
          {children}
        </main>
      </div>
    </div>
  );
}
