import { copy } from './io';

const generateSchema = (): void => {
  copy(`${__dirname}/../../schema`, process.cwd());
};

export default generateSchema;
