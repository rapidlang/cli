import nodemon from 'nodemon';

const watch = (): void => {
  nodemon({
    script: `${__dirname}/watch.js`,
    ext: 'rapid',
  });

  nodemon
    .on('start', () => {
      console.log('🕒 Waiting for changes...');
    })
    .on('quit', () => {
      console.log('Quitting...');
      process.exit();
    })
    .on('restart', (files) => {
      console.log('Compiled: ', files);
    });
};

export default watch;
