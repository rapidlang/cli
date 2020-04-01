import fs from 'fs';

const save = (path: string, source: string): void => {
  fs.writeFileSync(`${process.cwd()}/${path}`, source);
};

export default save;
