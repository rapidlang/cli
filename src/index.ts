import prompts from 'prompts';

const questions: any[] = [];

(async (): Promise<void> => {
  const response = await prompts(questions);

  console.log(response);
})();
