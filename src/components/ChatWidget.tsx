'use client';

import { useEffect } from 'react';

export default function ChatWidget() {
  useEffect(() => {
    // Defer loading the chat widget until after page hydration
    const timer = setTimeout(() => {
      const script = document.createElement('script');
      script.src = 'https://widgets.leadconnectorhq.com/loader.js';
      script.setAttribute(
        'data-resources-url',
        'https://widgets.leadconnectorhq.com/chat-widget/loader.js'
      );
      script.setAttribute('data-widget-id', '699917be6e600940d84ff5d6');
      script.async = true;
      document.body.appendChild(script);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  return null;
}
