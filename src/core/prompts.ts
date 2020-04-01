import prompts, { PromptObject, Answers } from 'prompts';

const questions: PromptObject<string>[] = [
  {
    type: 'text',
    name: 'name',
    message: 'Project name',
  },
  {
    type: 'text',
    name: 'author',
    message: 'Author',
  },
  {
    type: 'autocomplete',
    name: 'license',
    message: 'License',
    initial: 'MIT',
    choices: [
      { title: 'MIT', value: 'MIT' },
      { title: 'Apache License 2.0', value: 'Apache' },
      { title: 'GNU General Public License', value: 'GNU' },
      { title: 'Corporate', value: 'CORP' },
    ],
  },
];

const init = (): Promise<Answers<string>> => prompts(questions);

export default init;
