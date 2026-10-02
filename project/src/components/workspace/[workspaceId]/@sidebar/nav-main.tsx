"use client"

import Link from "@/components/shared/link"
import { usePathname } from "next/navigation"
import {
  CoinsIcon,
  HomeIcon,
  MessagesSquareIcon,
  RadioTowerIcon,
  SparklesIcon,
  WorkflowIcon,
  type LucideIcon,
} from "lucide-react"
import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"

type NavItem = { title: string; href: string; icon: LucideIcon }

export function NavMain({ workspaceId }: { workspaceId: string }) {
  const pathname = usePathname()
  const base = `/workspace/${workspaceId}`
  const groups: { label?: string; items: NavItem[] }[] = [
    { items: [{ title: "Início", href: base, icon: HomeIcon }] },
    {
      label: "Atendimento",
      items: [
        { title: "Conversas", href: `${base}/inbox`, icon: MessagesSquareIcon },
        { title: "Canais", href: `${base}/channels`, icon: RadioTowerIcon },
      ],
    },
    {
      label: "ConversAI",
      items: [
        { title: "ConversAI", href: `${base}/conversai`, icon: SparklesIcon },
        { title: "URAs", href: `${base}/uras`, icon: WorkflowIcon },
        { title: "Custos de IA", href: `${base}/ai-costs`, icon: CoinsIcon },
      ],
    },
  ]

  return groups.map((group, i) => (
    <SidebarGroup key={group.label ?? i}>
      {group.label && <SidebarGroupLabel>{group.label}</SidebarGroupLabel>}
      <SidebarMenu>
        {group.items.map((item) => (
          <SidebarMenuItem key={item.href}>
            <SidebarMenuButton
              tooltip={item.title}
              // Itens com subpáginas (ex.: uma conversa aberta) seguem ativos nelas.
              isActive={pathname === item.href || (item.href !== base && pathname.startsWith(`${item.href}/`))}
              render={<Link href={item.href} />}
            >
              <item.icon />
              <span>{item.title}</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
        ))}
      </SidebarMenu>
    </SidebarGroup>
  ))
}
