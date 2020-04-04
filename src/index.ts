#!/usr/bin/env node

import { argv } from './core/io';
import initAction from './core/init';

switch (argv._[0]) {
  case 'init':
    initAction();
    break;
  default:
    break;
}
