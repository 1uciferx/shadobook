import TagManager from 'react-gtm-module';

export const initializeTagManager = () => {
  TagManager.initialize({ gtmId: 'AW-11024057905' });
};

export const logPageView = () => {
  TagManager.dataLayer({
    dataLayer: {
      event: 'pageview',
      pagePath: window.location.pathname,
    },
  });
};