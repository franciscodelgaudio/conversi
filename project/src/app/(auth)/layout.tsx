// Moldura de duas colunas do bloco login-02, compartilhada por /login e /signup.
export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="grid min-h-svh lg:grid-cols-2">
      <div className="flex flex-col gap-4 p-6 md:p-10">
        <div className="flex justify-center gap-2 md:justify-start">
          <a href="#" className="flex items-center gap-2 text-lg font-semibold tracking-tight">
            conversi
          </a>
        </div>
        <div className="flex flex-1 items-center justify-center">
          <div className="w-full max-w-xs">{children}</div>
        </div>
      </div>
      <div className="hidden bg-linear-to-br from-secondary via-accent to-muted lg:block" />
    </div>
  )
}
