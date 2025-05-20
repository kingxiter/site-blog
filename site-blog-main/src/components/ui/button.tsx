import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils"; 

// Definição das variantes do botão com estilos base e modificadores
const buttonVariants = cva(
  // Estilos base aplicados a todos os botões
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      // Tipos de aparência (cores, estilos)
      variant: {
        primary: "bg-blue-200 text-white hover:bg-blue-300 rounded-full",
        secondary: "bg-gray-100 text-gray-800 hover:bg-blue-100 rounded-full",
      },
      // Tamanhos do botão
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    // Valores padrões aplicados se não forem passados como props
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  }
);

// Interface para os tipos de propriedades que o botão aceita
export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>, // Todas as props padrões de <button>
    VariantProps<typeof buttonVariants> {
  // Permite usar os tipos "variant" e "size"
  asChild?: boolean; // Se true, permite usar outro componente no lugar do <button>
}

// Componente Button com suporte a ref e variantes de estilo
const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"; // Usa outro componente se "asChild" for true
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))} // Aplica as classes corretas de acordo com as props
        ref={ref}
        {...props}
      />
    );
  }
);

// Nome exibido no React DevTools
Button.displayName = "Button";

// Exporta o componente e as variantes para uso externo
export { Button, buttonVariants };
