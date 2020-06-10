const dotenv = require('dotenv');
const chalk = require('chalk');

dotenv.config();

const startServer = require('./http/index');

const PORT = process.env.PORT || 3000;

const PROD = process.env.NODE_ENV === 'production';

startServer(PORT, PROD).then(() => {
  console.log(chalk.cyan(`Application started.`));
});
