import init from './prompts';
import generateConfig from './generateConfig';
import generateSchema from './generateSchema';
import { save } from './io';

const initAction = async (): Promise<void> => {
  try {
    const answers = await init();
    const yamlConfig = generateConfig(answers.name, answers.author, answers.license);
    generateSchema();
    save('package.yml', yamlConfig);
  } catch (err) {
    console.log(err); // eslint-disable-line
  }
};

export default initAction;
