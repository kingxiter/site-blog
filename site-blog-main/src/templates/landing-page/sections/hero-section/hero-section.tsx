import { ArrowRight, Clock, Store } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '../../../../components/ui/button';

export const HeroSection = () => {
  return (
    // Seção principal do hero com espaçamento superior
    // OBS: A classe "container" aplica largura máxima, mas não garante espaçamento lateral (use px-* se necessário)
    <section className="container relative flex items-center justify-center mt-16">
      
      {/* Grid responsivo com duas colunas no desktop */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 min-h-[20rem] md:h-[36rem] items-center">
        
        {/* Coluna da esquerda com o conteúdo textual */}
        <div className="flex flex-col items-center justify-center gap-4 md:items-start lg:items-start">
          
          {/* Título principal da seção */}
          <h1 className="text-gray-100 text-heading-hg font-sans">
            Sites e aplicativos que falam a linguagem da sua marca
          </h1>

          {/* Bloco de benefícios com ícones e texto */}
          <div className="flex flex-col items-center justify-center gap-4 md:items-start lg:items-start">
            <div>
              {/* Benefício 1 */}
              <div className="flex items-center gap-2">
                <Clock className="text-cyan-100 h-4 w-4" />
                <span className="text-body-md text-gray-200">
                  Crie o seu site em menos de 5 minutos!
                </span>
              </div>

              {/* Benefício 2 */}
              <div className="flex items-center gap-2">
                <Store className="text-cyan-100 h-4 w-4" />
                <span className="text-body-md text-gray-200">
                  Responsivos e prontos para escalar
                </span>
              </div>
            </div>

            {/* Botão de ação principal e observação */}
            <div className="text-white flex flex-col gap-2 mt-5 items-center md:items-start ls:items-start">
              
              {/* Botão com ícone e redirecionamento usando asChild */}
              <Button className="rounded-full w-fit" asChild>
                <Link href="/criar-loja">
                  Saber mais
                  <ArrowRight />
                </Link>
              </Button>

              {/* Texto auxiliar abaixo do botão */}
              <p className="text-gray-300 text-body-xs">
                Sua presença digital em alto nível
              </p>
            </div>
          </div>
        </div>

        {/* Coluna da direita com imagem, visível apenas em telas médias para cima */}
        <div className="relative h-[20rem] hidden md:h-full order-first md:order-last items-center justify-center md:flex lg:flex">
          <Image
            src="/hero-section.svg"
            alt="Ilustração com ícones de store, tag e sacola"
            width={200}
            height={400}
            className="h-full w-auto object-contain"
          />
        </div>
      </div>
    </section>
  );
};
