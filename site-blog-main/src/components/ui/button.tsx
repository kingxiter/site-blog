// Importação de bibliotecas essenciais
import * as React from "react";
import { Slot } from "@radix-ui/react-slot"; // Permite substituir o elemento <button> por outro via "asChild"
import { cva, type VariantProps } from "class-variance-authority"; // Utilizado para criar variantes de classes com Tailwind CSS
import { cn } from "@/lib/utils"; // Função utilitária para combinar classes condicionalmente

// Definição das variantes do botão com estilos base e modificadores
const buttonVariants = cva(
  // Estilos base aplicados a todos os botões
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      // Tipos de aparência (cores, estilos)
      variant: {
        default: "bg-blue-200 text-white hover:bg-blue-300",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "border border-gray-400 bg-gray-700 transition-colors duration-200 hover:text-blue 200 hover:border-blue-200",
        secondary: "bg-gray-100 text-gray-800 hover:bg-blue-100 rounded-full",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
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
      variant: "default",
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
