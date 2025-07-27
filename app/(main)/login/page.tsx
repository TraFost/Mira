const btn = ["💔 Blade Wallet", "🔥 WalletConnect"];

export default function LoginPage() {
  return (
    <div className="w-full h-screen flex justify-center items-center px-4 bg-background text-foreground">
      <div className="flex flex-col gap-10 p-8 w-full max-w-md rounded-2xl backdrop-blur-md bg-foreground/5 border border-foreground/20 shadow-xl">
        <h1 className="text-4xl font-bold text-center">Login with</h1>
        <div className="flex flex-col gap-4">
          {btn.map((b) => (
            <button
              key={b}
              className="cursor-pointer text-lg font-semibold py-3 rounded-full bg-gradient-to-r from-secondary via-foreground to-gradient text-background hover:opacity-90 transition"
            >
              {b}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
