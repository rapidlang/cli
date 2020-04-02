#!/usr/bin/env node
import init from './core/prompts';
import generateConfig from './core/generateConfig';
import generateSchema from './core/generateSchema';
import { save } from './core/io';

const run = async (): Promise<void> => {
  try {
    const answers = await init();
    const yamlConfig = generateConfig(answers.name, answers.author, answers.license);
    generateSchema();
    save('package.yml', yamlConfig);
  } catch (err) {
    console.log(err); // eslint-disable-line
  }
};

run();
