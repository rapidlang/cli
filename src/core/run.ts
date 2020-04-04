import handler from 'serve-handler';
import http from 'http';
import { exist } from './io';

const runAction = (): void => {
  if (!exist(`${process.cwd()}/package.yml`)) {
    throw new Error('Not a Rapid project, package.yml not found.');
  }

  const server = http.createServer((request, response) => {
    return handler(request, response);
  });

  server.listen(2000, () => {
    console.log('🚀 Rapid development server is running at http://localhost:2000');
  });
};

export default runAction;
