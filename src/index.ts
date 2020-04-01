import init from './core/prompts';
import generate from './core/generateConfig';
import save from './core/io';

const run = async (): Promise<void> => {
  const answers = await init();
  const yamlConfig = generate(answers.name, answers.author, answers.license);
  save('package.yml', yamlConfig);
};

run();
