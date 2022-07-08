import { app } from './modules/rest';

const port = 3777;
export const server = app.listen(port, () => console.log('server started on port  ' + port));

//Error handling
server.on('error', (err: NodeJS.ErrnoException) => {
   console.log(err.code);
   if(err.code == 'EADDRINUSE'){
      console.log('Address in use');
      server.close();
   }
});

//Gracefully shut down on SIGTERM
process.on('SIGTERM', () => {
   server.close();
});