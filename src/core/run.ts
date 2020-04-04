import compile from '@rapid-lang/compiler';
import handler from 'serve-handler';
import http from 'http';
import { exist } from './io';

const runAction = (): void => {
  if (!exist(`${process.cwd()}/package.yml`)) {
    throw new Error('Not a Rapid project, package.yml not found.');
  }

  const server = http.createServer((request, response) => {
    return handler(request, response, { public: 'public' });
  });

  server.listen(2000, () => {
    const input = {
      _: ['./src/main.rapid'],
      o: './public/main.wasm',
      s: true,
    };
    compile(input);
    console.log('🚀 Rapid development server is running at http://localhost:2000');
    console.log('🕒 Waiting for changes...');
  });
};

export default runAction;
