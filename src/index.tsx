import React from 'react';
import {createRoot} from 'react-dom/client';
import App from './App';
import {I18nextProvider} from "react-i18next";
import i18n from './lib/i18next'
import {QueryClient, QueryClientProvider} from "react-query";

const queryClient = new QueryClient();

const container = document.getElementById('root');
const root = createRoot(container!);
root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <I18nextProvider i18n={i18n}>
        <App/>
      </I18nextProvider>
    </QueryClientProvider>

  </React.StrictMode>
);
