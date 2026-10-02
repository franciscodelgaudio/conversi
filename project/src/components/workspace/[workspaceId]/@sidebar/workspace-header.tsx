import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { SidebarMenu, SidebarMenuButton, SidebarMenuItem } from "@/components/ui/sidebar"

type Workspace = { id: string; name: string; avatarUrl: string | null }

export function WorkspaceHeader({ workspace }: { workspace: Workspace }) {
  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <SidebarMenuButton size="lg" tooltip={workspace.name}>
          <Avatar className="size-8 rounded-lg after:rounded-lg">
            {workspace.avatarUrl && (
              <AvatarImage src={workspace.avatarUrl} alt={workspace.name} className="rounded-lg object-contain" />
            )}
            <AvatarFallback className="rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
              {workspace.name.charAt(0).toUpperCase()}
            </AvatarFallback>
          </Avatar>
          <div className="grid flex-1 text-left text-sm leading-tight">
            <span className="truncate font-medium">{workspace.name}</span>
            <span className="truncate text-xs text-muted-foreground">Workspace</span>
          </div>
        </SidebarMenuButton>
      </SidebarMenuItem>
    </SidebarMenu>
  )
}
