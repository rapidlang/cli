import yaml from 'js-yaml';

const generate = (name: string, author: string, licesne: string): string => {
  const data = {
    app: {
      name,
      version: '0.1.0',
      author,
      licesne,
    },
    config: {
      input: 'src/input',
      output: 'src/output',
      dependencies: null,
    },
  };

  return yaml.safeDump(data);
};

export default generate;
