import { IEnvironment } from '@xplat-demo/xplat/core';
import { deepMerge } from '@xplat-demo/xplat/utils';
import { environmentBase } from './environment.base';

export const environmentDev = deepMerge(environmentBase, <IEnvironment>{
  // customizations here...
});
