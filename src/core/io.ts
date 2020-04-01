import fs from 'fs';
import { ncp } from 'ncp';

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
