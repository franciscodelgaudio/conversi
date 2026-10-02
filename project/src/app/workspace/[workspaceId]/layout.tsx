import { cookies } from "next/headers"
import { NavigationProgressBar, NavigationProgressProvider } from "@/components/shared/navigation-progress"
import { SidebarInset, SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"

export default async function WorkspaceLayout({ children, sidebar }: LayoutProps<"/workspace/[workspaceId]">) {
  // Mesmo cookie que o SidebarProvider grava ao abrir/fechar.
  const defaultOpen = (await cookies()).get("sidebar_state")?.value !== "false"

  return (
    <NavigationProgressProvider>
      <SidebarProvider defaultOpen={defaultOpen}>
        {sidebar}
        <SidebarInset>
          <SidebarTrigger className="fixed bottom-4 left-4 z-20 bg-background shadow-sm md:hidden" />
          <NavigationProgressBar />
          {children}
        </SidebarInset>
      </SidebarProvider>
    </NavigationProgressProvider>
  )
}
