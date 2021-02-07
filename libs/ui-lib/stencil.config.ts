import { Config } from '@stencil/core';
import {
  angularOutputTarget,
  ValueAccessorConfig,
} from '@stencil/angular-output-target';
import { postcss } from '@stencil/postcss';
import autoprefixer from 'autoprefixer';
import cssnano from 'cssnano';
import tailwindcss from 'tailwindcss';

const angularValueAccessorBindings: ValueAccessorConfig[] = [];

export const config: Config = {
  namespace: 'ui-lib',
  taskQueue: 'async',
  globalStyle: './src/global/app.css',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
      dir: '../../dist/libs/ui-lib/dist',
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      dir: '../../dist/libs/ui-lib/www',
      serviceWorker: null,
    },
    angularOutputTarget({
      componentCorePackage: '@xplat-demo/ui-lib',
      directivesProxyFile:
        '../../../libs/ui-lib-angular/src/generated/directives/proxies.ts',
      valueAccessorConfigs: angularValueAccessorBindings,
    }),
  ],
  plugins: [
    postcss({
      plugins: [tailwindcss('tailwind.config.js'), autoprefixer(), cssnano()],
    }),
  ],
};
