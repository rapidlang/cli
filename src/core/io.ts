import fs from 'fs';
import yargs from 'yargs';
import { ncp } from 'ncp';

export interface Args {
  [x: string]: unknown;
  _: string[];
  port?: number;
}

export const { argv }: { argv: Args } = yargs
  .demandCommand(1)
  .command('init', 'Initiates Rapid project with boilerplate')
  .command('run', 'Runs a development server', (y) => {
    return y.option('port', {
      description: 'Port to run server on',
      nargs: 1,
      alias: 'p',
      type: 'number',
    });
  })
  .alias('v', 'version')
  .alias('h', 'help')
  .alias('r', 'run');

export const save = (path: string, source: string): void => {
  fs.writeFileSync(`${process.cwd()}/${path}`, source);
};

export const copy = (source: string, destination: string): Promise<void> => {
  return new Promise((resolve, reject) => {
    ncp(source, destination, (err) => {
      if (err) {
        reject(err);
      }
      resolve();
    });
  });
};

export const exist = (path: string): boolean => {
  return fs.existsSync(path);
};
