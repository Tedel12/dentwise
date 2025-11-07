import { SignUpButton } from "@clerk/nextjs";
import React from "react";
import { Button } from "../ui/button";
import { CalendarIcon, MicIcon } from "lucide-react";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden pt-2 bg-background">
      {/* GRID BACKGROUND */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-muted/5 to-primary/5">
        <div
          className="absolute inset-0 
          [background-image:linear-gradient(to_right,#d1d5db_1px,transparent_1px),_linear-gradient(to_bottom,#d1d5db_1px,transparent_1px)]
          [background-size:4rem_4rem]
          [mask-image:radial-gradient(ellipse_60%_60%_at_50%_10%,#000_70%,transparent_110%)]
          opacity-20"
        ></div>
      </div>

      {/* GRADIENT ORBS */}
      <div className="absolute top-20 left-1/4 w-72 h-72 bg-gradient-to-r from-primary/20 to-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-gradient-to-r from-primary/15 to-primary/5 rounded-full blur-3xl"></div>

      <div className="relative z-10 w-full px-20">
        <div className="">
          <div className="grid lg:grid-cols-2 gap-6 items-center">
            {/* LEFT CONTENT */}
            <div className="space-y-4">
              <div className="space-y-3">
                {/* BADGE */}
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-primary/10 to-primary/5 rounded-full border border-primary/20 backdrop-blur-sm">
                  <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium text-primary">IA d'assistance dentaire</span>
                </div>

                {/* MAIN HEADING */}
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
                  <span className="bg-gradient-to-br from-foreground via-foreground to-foreground/70 bg-clip-text text-transparent">Les réponses</span>
                  <br />
                  <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">à vos</span>
                  <br />
                  <span className="bg-gradient-to-br from-foreground via-foreground to-foreground/70 bg-clip-text text-transparent">questions</span>
                </h1>

                {/* SUBITTLE */}
                <p className="text-lg text-muted-foreground leading-relaxed max-w-xl font-medium">Discutez avec notre assistant dentaire pour obtenir des conseils, prenez rendez-vous en toute simplicité et recevez des recommendations de soins personnalisées. Disponible 24h/24 et 7j/7</p>
              </div>

              {/* CTA BUTTONS */}
              <div className="flex flex-col sm:flex-row gap-5">
                <SignUpButton mode="modal">
                  <Button className='cursor-pointer' size={"lg"}>
                    <MicIcon className="mr-2 size-5" />
                    Essayer l'agent vocal
                  </Button>
                </SignUpButton>

                <SignUpButton mode='modal'>
                  <Button className='cursor-pointer' size={"lg"} variant={"outline"}>
                    <CalendarIcon className="mr-2 size-5" />
                    Prendre rendez-vous
                  </Button>
                </SignUpButton>
              </div>

            </div>

            {/* RIGHT CONTENT - HERO IMAGE */}
            <div className="relative">
              {/* GRADIENT ORBS */}
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-gradient-to-r from-primary/20 to-primary/10 rounded-2xl rotate-45 blur-xl" />
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-r from-primary/15 to-primary/5 rounded-full blur-2xl"></div>

              <Image src={"/hero.png"} alt="dentwise ai" width={400}  height={400}  />

            </div>

          </div>

        </div>
      </div>

    </section>
  );
};

export default Hero;
