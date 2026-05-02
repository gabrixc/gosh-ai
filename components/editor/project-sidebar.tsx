"use client";

import { X, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface ProjectSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ProjectSidebar({ isOpen, onClose }: ProjectSidebarProps) {
  return (
    <div
      aria-hidden={!isOpen}
      className={`fixed left-0 top-12 bottom-0 z-50 flex w-64 flex-col bg-card border-r border-border transition-transform duration-200 ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } ${!isOpen ? "pointer-events-none invisible" : ""}`}
    >
      <div className="flex items-center justify-between border-b border-border px-4 py-3">
        <span className="font-medium text-foreground">Projects</span>
        <Button
          variant="ghost"
          size="icon"
          onClick={onClose}
          aria-label="Close sidebar"
          tabIndex={isOpen ? 0 : -1}
        >
          <X className="h-4 w-4" />
        </Button>
      </div>

      <Tabs defaultValue="my-projects" className="flex flex-1 flex-col overflow-hidden">
        <TabsList className="mx-4 mt-4 w-[calc(100%-2rem)]">
          <TabsTrigger value="my-projects" className="flex-1" tabIndex={isOpen ? 0 : -1}>My Projects</TabsTrigger>
          <TabsTrigger value="shared" className="flex-1" tabIndex={isOpen ? 0 : -1}>Shared</TabsTrigger>
        </TabsList>
        <TabsContent value="my-projects" className="flex flex-1 items-center justify-center">
          <p className="text-sm text-muted-foreground">No projects yet</p>
        </TabsContent>
        <TabsContent value="shared" className="flex flex-1 items-center justify-center">
          <p className="text-sm text-muted-foreground">Nothing shared yet</p>
        </TabsContent>
      </Tabs>

      <div className="border-t border-border p-4">
        <Button className="w-full" variant="secondary" tabIndex={isOpen ? 0 : -1}>
          <Plus className="h-4 w-4" />
          New Project
        </Button>
      </div>
    </div>
  );
}
