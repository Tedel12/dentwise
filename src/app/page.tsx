import { Button } from "@/components/ui/button";
import { SignUpButton, SignedIn, SignedOut, SignOutButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <div>
      <h1>Home page</h1>
      <SignedOut>
        <SignUpButton mode="modal">Se connecter</SignUpButton>
      </SignedOut>

      <SignedIn>
        <SignOutButton>Se déconnecter</SignOutButton>
      </SignedIn>
    </div>
  );
}