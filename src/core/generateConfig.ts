import yaml from 'js-yaml';

const generateConfig = (name: string, author: string, licesne: string): string => {
  const data = {
    app: {
      name,
      version: '0.1.0',
      author,
      licesne,
    },
    config: {
      input: 'src/main.rapid',
      output: 'bin/main.wasm',
    },
  };

  return yaml.safeDump(data);
};

export default generateConfig;
