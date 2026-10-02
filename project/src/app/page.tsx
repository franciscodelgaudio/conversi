import { redirect } from "next/navigation"

// Sem workspaces ainda: abre direto um workspace de exemplo (o proxy já exige login).
export default function Home() {
  redirect("/workspace/demo")
}
