const btn = ["💔 Blade Wallet", "🔥 WalletConnect"];

export default function LoginPage() {
  return (
    <div className="w-full h-screen flex justify-center items-center px-4">
      <div className="flex flex-col gap-10 border-4 p-4 w-full md:w-lg lg:w-xl h-fit bg-[#DAF7DC]">
        <h1 className="text-4xl font-bold">Login with</h1>
        <div className="flex flex-col gap-4 mb-6">
          {btn.map((b) => (
            <button
              key={b}
              className="border-2 font-bold bg-[#8390FA] text-xl cursor-pointer py-3"
            >
              {b}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
