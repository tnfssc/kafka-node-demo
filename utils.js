import { createInterface } from "readline";

const readline = createInterface({
  input: process.stdin,
  output: process.stdout,
});

/**
 * @param {string} msg
 * @returns {Promise<string>}
 */
export const question = msg => new Promise((resolve, reject) => readline.question(msg, str => resolve(str)));
