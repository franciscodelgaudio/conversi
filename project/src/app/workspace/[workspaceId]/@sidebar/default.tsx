import { AppSidebar } from "@/components/workspace/[workspaceId]/@sidebar/app-sidebar"

// Único arquivo do slot: o default.tsx é renderizado para qualquer sub-rota
// de /workspace/[workspaceId], então a sidebar aparece em todas elas.
export default async function SidebarSlot({ params }: { params: Promise<{ workspaceId: string }> }) {
  const { workspaceId } = await params
  return <AppSidebar workspace={{ id: workspaceId, name: "Conversi", avatarUrl: null }} />
}
