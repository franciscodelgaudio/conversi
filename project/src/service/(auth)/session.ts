import { redirect } from "next/navigation";
import { isObjectIdOrHexString } from "mongoose";
import { auth } from "@/auth";

// Para páginas e layouts: sem sessão válida, manda para o login.
export async function requireUser() {
  const user = (await auth())?.user;
  if (!user?.id || !isObjectIdOrHexString(user.id)) redirect("/login");
  return { ...user, id: user.id };
}

// Para server actions: retorna null em vez de redirecionar, e a action
// decide a mensagem de erro.
export async function getSessionUserId() {
  const id = (await auth())?.user?.id;
  return id && isObjectIdOrHexString(id) ? id : null;
}
