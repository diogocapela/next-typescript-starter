import React, { useEffect } from 'react';

declare global {
  interface Window {
    adsbygoogle: any;
  }
}

const GoogleAd = (props) => {
  const {
    uniqueId = 'google-ad',
    adClient = 'ca-pub-5001783131854809',
    adSlot = '8751826711',
  } = props;

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const installGoogleAds = () => {
        const elem = document.createElement('script');
        elem.id = uniqueId;
        elem.src = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js';
        elem['data-ad-client'] = adClient;
        // elem.async = true;
        document.body.insertBefore(elem, document.body.firstChild);
      };

      if (!document.getElementById(uniqueId)) {
        installGoogleAds();
      }

      (window.adsbygoogle = window.adsbygoogle || []).push({});
    }
  }, []);

  return (
    <ins
      className="adsbygoogle"
      style={{ display: 'block' }}
      data-ad-client={adClient}
      data-ad-slot={adSlot}
      data-ad-format="auto"
      data-full-width-responsive="true"
    />
  );
};

export default GoogleAd;
