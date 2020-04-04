import fs from 'fs';
import yargs from 'yargs';
import { ncp } from 'ncp';

export interface Args {
  [x: string]: unknown;
  _: string[];
}

export const { argv }: { argv: Args } = yargs
  .options({})
  .demandCommand(1)
  .command('init', 'Initiates Rapid project with boilerplate');

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
