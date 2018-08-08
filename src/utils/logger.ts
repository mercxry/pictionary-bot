import chalk from "chalk";

export const logError = (error: string) => {
  const date: string = new Date().toISOString();
  console.error(`${chalk.grey(date)} | ${chalk.bold.red("[ERROR]")} ${chalk.redBright(error)}`);
};

export const logWarning = (warning: string) => {
  const date: string = new Date().toISOString();
  console.warn(`${chalk.grey(date)} | ${chalk.bold.yellow("[WARNING]")} ${chalk.yellowBright(warning)}`);
};

export const logInfo = (info: string) => {
  const date: string = new Date().toISOString();
  console.log(`${chalk.grey(date)} | ${chalk.bold.cyan("[INFO]")} ${chalk.cyanBright(info)}`);
};
