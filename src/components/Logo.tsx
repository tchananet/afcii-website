
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  light?: boolean;
}

export function Logo({ className, light = false }: LogoProps) {
  const textColor = light ? "text-white" : "text-accent";
  const dotColor = light ? "text-white" : "text-primary";
  const borderColor = light ? "border-white/40" : "border-accent/20";

  return (
    <div className={cn("flex flex-col items-start select-none leading-none", className)}>
      <div className="flex items-baseline relative">
        {/* Le point initial */}
        <span className={cn("text-3xl font-black mr-1", dotColor)}>.</span>
        
        {/* Le texte afcii */}
        <span className={cn("text-4xl font-black tracking-tighter", textColor)}>
          afcii
        </span>

        {/* Les deux points au dessus du ii */}
        <div className="absolute right-0 -top-1 flex gap-0.5">
          <div className={cn("w-2 h-2 rounded-full bg-current", dotColor)} />
          <div className={cn("w-2 h-2 rounded-full bg-current", dotColor)} />
        </div>
      </div>

      {/* La ligne de séparation */}
      <div className={cn("w-full border-t mt-0.5", borderColor)} />

      {/* Le sous-titre */}
      <span className={cn("text-[7px] font-bold uppercase tracking-[0.1em] mt-1 whitespace-nowrap", textColor)}>
        african centre for innovation and incubation
      </span>
    </div>
  );
}
