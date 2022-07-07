import { Kafka, logLevel } from "kafkajs";
import { brokerUrl } from "./config.js";

const kafka = new Kafka({
  clientId: `kafka-js-client-${Math.random().toFixed(3)}`,
  brokers: [brokerUrl],
  logLevel: logLevel.ERROR,
});

export default kafka;
