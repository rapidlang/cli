import compile from '@rapid-lang/compiler';
import handler from 'serve-handler';
import http from 'http';
import { exist } from './io';
import watch from './watch';

const runAction = (port = 2000): void => {
  if (!exist(`${process.cwd()}/package.yml`)) {
    throw new Error('Not a Rapid project, package.yml not found.');
  }

  const server = http.createServer((request, response) => {
    return handler(request, response, { public: 'public' });
  });

  server.listen(port, () => {
    const input = {
      _: ['./src/main.rapid'],
      o: './public/main.wasm',
      p: port,
      s: true,
    };
    compile(input);
    console.log(`🚀 Rapid development server is running at http://localhost:${port}`);
    watch();
  });
};

export default runAction;
