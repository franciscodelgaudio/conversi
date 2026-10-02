import type { LucideIcon } from "lucide-react"
import { Empty, EmptyDescription, EmptyHeader, EmptyMedia, EmptyTitle } from "@/components/ui/empty"

type Props = { title: string; icon: LucideIcon; description: string }

// Página do workspace que ainda não tem conteúdo: título e um aviso no lugar da lista.
export function UnderConstruction({ title, icon: Icon, description }: Props) {
  return (
    <div className="flex flex-1 flex-col gap-4 p-4">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <h2 className="text-2xl font-semibold tracking-tight">{title}</h2>
      </div>
      <Empty className="border">
        <EmptyHeader>
          <EmptyMedia variant="icon">
            <Icon />
          </EmptyMedia>
          <EmptyTitle>Em construção</EmptyTitle>
          <EmptyDescription>{description}</EmptyDescription>
        </EmptyHeader>
      </Empty>
    </div>
  )
}
