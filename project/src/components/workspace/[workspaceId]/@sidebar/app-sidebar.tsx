import { Sidebar, SidebarContent, SidebarHeader, SidebarRail } from "@/components/ui/sidebar"
import { NavMain } from "@/components/workspace/[workspaceId]/@sidebar/nav-main"
import { WorkspaceHeader } from "@/components/workspace/[workspaceId]/@sidebar/workspace-header"

type Props = {
  workspace: React.ComponentProps<typeof WorkspaceHeader>["workspace"]
}

export function AppSidebar({ workspace }: Props) {
  return (
    <Sidebar collapsible="icon">
      <SidebarHeader>
        <WorkspaceHeader workspace={workspace} />
      </SidebarHeader>
      <SidebarContent>
        <NavMain workspaceId={workspace.id} />
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  )
}
