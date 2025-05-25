import { cn } from "@/lib/utils";
import { CircleX, SearchIcon } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import { useCallback } from "react";


export const Search = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const query = searchParams?.get('q') ??'';


  console.log(query);

 
  const handleSearch = useCallback(
    (event: React.FormEvent) => {
      event.preventDefault(); // Evita recarregar a página
      if (query.trim()) {
        // Redireciona para a rota /blog com o parâmetro da busca
        router.push(`/blog?q=${encodeURIComponent(query)}`);
      }
    },
    [query, router] // Gatilhos para recriar a função caso query ou router mudem
  );

  // Função chamada a cada alteração no campo de busca
  const handleQueryChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newQuery = event.target.value;
    // Atualiza a URL com o novo valor de forma "shallow" (sem reload de dados) e sem scroll
    router.push(`/blog?q=${encodeURIComponent(newQuery)}`, {
      scroll: false,
    });
  };

  const resetSearch = () => {
    router.push("/blog", {
      scroll: false,
    });
  };

  return (
    // Formulário com evento de submit
    <form onSubmit={handleSearch} className="relative group w-full md:w-60">
      {/* Ícone de busca posicionado à esquerda do campo */}
      <SearchIcon
        className={cn(
          "text-gray-300 absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 transition-colors duration-200 group-focus-within:text-blue-300",
          query ? " text-blue-300" : "" // Muda a cor do ícone se houver texto na busca
        )}
      />

      {/* Campo de texto para busca */}
      <input
        type="text"
        placeholder="Buscar" // Placeholder visível enquanto vazio
        value={query}
        onChange={handleQueryChange} // Atualiza a URL conforme o usuário digita
        className="w-full h-10 md:w-60 bg-transparent border border-gray-400 pl-9 text-gray-100 rounded-md text-body-sm outline-none transition-all duration-200 focus-within:border-blue-300 focus-within:ring-1 focus-within:ring-blue-300 placeholder:text-gray-300 placeholder:text-body-sm"
      />
      {query && (
        <CircleX
          className="absolute w-4 h-4 top-1/2 -translate-y-1/2 right-3 text-gray-300 "
          onClick={resetSearch} 
        />
        //icone X e config de sumir ao clicar
      )}
    </form>
  );
};
