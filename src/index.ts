import prompts from 'prompts';

const questions = [
  {
    type: 'text',
    name: 'username',
    message: 'What is your GitHub username?',
  },
  {
    type: 'number',
    name: 'age',
    message: 'How old are you?',
  },
  {
    type: 'text',
    name: 'about',
    message: 'Tell something about yourself',
    initial: 'Why should I?',
  },
];

(async (): Promise<void> => {
  const response = await prompts(questions);

  console.log(response);
})();
