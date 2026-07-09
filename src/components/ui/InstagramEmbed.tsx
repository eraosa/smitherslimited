import { useEffect } from 'react';

// Extend Window to include Instagram's embed API
declare global {
  interface Window {
    instgrm?: {
      Embeds: {
        process: () => void;
      };
    };
  }
}

interface InstagramEmbedProps {
  permalink: string;
}

export default function InstagramEmbed({ permalink }: InstagramEmbedProps) {
  useEffect(() => {
    const processEmbed = () => {
      window.instgrm?.Embeds.process();
    };

    // Script already loaded — just reprocess
    if (window.instgrm) {
      processEmbed();
      return;
    }

    // Avoid injecting the script more than once
    if (document.querySelector('script[src*="instagram.com/embed.js"]')) {
      const id = setInterval(() => {
        if (window.instgrm) {
          processEmbed();
          clearInterval(id);
        }
      }, 100);
      return () => clearInterval(id);
    }

    // First load — inject the script
    const script = document.createElement('script');
    script.src = '//www.instagram.com/embed.js';
    script.async = true;
    script.onload = processEmbed;
    document.body.appendChild(script);
  }, [permalink]);

  return (
    <blockquote
      className="instagram-media"
      data-instgrm-permalink={`${permalink}?utm_source=ig_embed&utm_campaign=loading`}
      data-instgrm-version="14"
      style={{
        background: '#FFF',
        border: 0,
        borderRadius: '3px',
        boxShadow: '0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15)',
        margin: '0 auto',
        maxWidth: '540px',
        minWidth: '326px',
        padding: 0,
        width: '100%',
      }}
    />
  );
}
