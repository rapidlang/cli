#!/usr/bin/env node

import { argv } from './core/io';
import initAction from './core/init';
import runAction from './core/run';

switch (argv._[0]) {
  case 'init':
    initAction();
    break;
  case 'run':
    runAction();
    break;
  default:
    break;
}
