"use client";

import { useRouter } from "next/navigation";

import {
  Credenza,
  CredenzaBody,
  CredenzaContent,
  CredenzaHeader,
  CredenzaTitle,
  CredenzaTrigger,
} from "~/components/ui/dialog/credenza.dialog";

import { useWallet } from "~/hooks/use-wallet.hook";

const LoginModalPage = () => {
  console.log("✅ Login modal rendered");
  const { connect, status } = useWallet();
  const router = useRouter();

  const handleOpenChange = (open: boolean) => {
    if (!open) {
      router.back();
    }
  };

  return (
    <Credenza open={true} onOpenChange={handleOpenChange}>
      <CredenzaTrigger className="hidden">Open Login Modal</CredenzaTrigger>

      <CredenzaContent>
        <CredenzaHeader>
          <CredenzaTitle className="text-2xl sm:text-3xl md:text-4xl">
            Login
          </CredenzaTitle>
        </CredenzaHeader>

        <CredenzaBody className="px-8 pt-4 pb-8">
          <div className="flex flex-col gap-4">
            <button
              onClick={connect}
              disabled={status === "connecting"}
              className="cursor-pointer text-lg font-semibold py-3 rounded-full bg-gradient-to-r from-secondary via-foreground to-gradient text-background hover:opacity-90 transition"
            >
              Connect to your Wallet
            </button>
          </div>
        </CredenzaBody>
      </CredenzaContent>
    </Credenza>
  );
};

export default LoginModalPage;
