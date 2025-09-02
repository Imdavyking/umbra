import { logger } from "../main";

export const wait = async (seconds: number) => {
  logger.info(`Waiting for ${seconds} seconds...`);
  return new Promise((resolve) => setTimeout(resolve, seconds * 1000));
};
