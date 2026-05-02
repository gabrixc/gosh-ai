"use client";

import { PanelLeftClose, PanelLeftOpen } from "lucide-react";
import { UserButton } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";

interface EditorNavbarProps {
  isSidebarOpen: boolean;
  onToggleSidebar: () => void;
}

export function EditorNavbar({ isSidebarOpen, onToggleSidebar }: EditorNavbarProps) {
  return (
    <nav className="h-12 fixed top-0 left-0 right-0 z-40 flex items-center px-3 bg-background border-b border-border">
      <div className="flex flex-1 items-center">
        <Button variant="ghost" size="icon" onClick={onToggleSidebar} aria-label={isSidebarOpen ? "Close sidebar" : "Open sidebar"}>
          {isSidebarOpen ? (
            <PanelLeftClose className="h-5 w-5" />
          ) : (
            <PanelLeftOpen className="h-5 w-5" />
          )}
        </Button>
      </div>
      <div className="flex flex-1 justify-center" />
      <div className="flex flex-1 justify-end">
        <UserButton />
      </div>
    </nav>
  );
}
