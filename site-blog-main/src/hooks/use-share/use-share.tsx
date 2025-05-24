import { useMemo, useCallback } from "react";
import { Link2 } from "lucide-react";
import {
  ShareConfig,
  SocialProvider,
  SOCIAL_PROVIDERS,
} from "./social-providers";
import { useClipboard } from "../use-clipboard";

type UseShareProps = ShareConfig & {
  clipboardTimeout?: number;
};

export const useShare = ({
  url,
  title,
  text,
  clipboardTimeout = 2000,
}: UseShareProps) => {
  const { isCopied, handleCopy } = useClipboard({ timeout: clipboardTimeout });

  // Memoiza a configuração de compartilhamento
  const shareConfig = useMemo(
    () => ({
      url,
      ...(title && { title }),
      ...(text && { text }),
    }),
    [url, title, text]
  );

  // Função de compartilhamento para um provedor específico
  const share = useCallback(
    async (provider: SocialProvider) => {
      try {
        if (provider === "clipboard") {
          return await handleCopy(url);
        }

        const providerConfig = SOCIAL_PROVIDERS[provider];
        if (!providerConfig) {
          throw new Error(`Provider não suportado: ${provider}`);
        }

        const shareUrl = providerConfig.shareUrl(shareConfig);
        const shareWindow = window.open(
          shareUrl,
          "_blank",
          "width=600,height=600,location=yes,status=yes"
        );

        return !!shareWindow;
      } catch (error) {
        console.error(error);
        return false;
      }
    },
    [shareConfig, handleCopy, url]
  );

  // Cria os botões de compartilhamento dinamicamente
  const shareButtons = useMemo(
    () => [
      ...Object.entries(SOCIAL_PROVIDERS).map(([key, provider]) => ({
        provider: key,
        name: provider.name,
        icon: provider.icon,
        action: () => share(key as SocialProvider),
      })),
      {
        provider: "clipboard",
        name: isCopied ? "Link copiado!" : "Copiar Link",
        icon: <Link2 className="h-4 w-4" />,
        action: () => share("clipboard"),
      },
    ],
    [isCopied, share]
  );

  return {
    shareButtons,
  };
};
