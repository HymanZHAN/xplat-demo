import { IEnvironment } from '@xplat-demo/xplat/core';
import { deepMerge } from '@xplat-demo/xplat/utils';
import { environmentBase } from './environment.base';

export const environmentProd = deepMerge(environmentBase, <IEnvironment>{
  production: true,
  // customizations here...
});
