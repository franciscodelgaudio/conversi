import { HomeIcon } from "lucide-react"
import { UnderConstruction } from "@/components/workspace/[workspaceId]/shared/under-construction"

export default function WorkspaceHomePage() {
  return <UnderConstruction title="Início" icon={HomeIcon} description="Visão geral do atendimento do workspace." />
}
