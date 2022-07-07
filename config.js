import { config } from "dotenv";

config();

export const brokerUrl = process.env.BROKER_URL ?? "localhost:9092";
