import React, { FC, ReactElement } from 'react';
import { render, RenderOptions} from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import I18nProvider from 'next-translate/I18nProvider';
import themes from '@/styles/themes';
import common from '@/locales/en/common.json';

const Providers: FC<{children: React.ReactNode}> = ({children}) => {
  return (
    <ThemeProvider theme={themes}>
      <I18nProvider lang='en' namespaces={{ common }}>
        {children}
      </I18nProvider>
    </ThemeProvider>
  )
}

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>,
) => render(ui, {wrapper: Providers, ...options});

export * from '@testing-library/react';
export {customRender as render}
