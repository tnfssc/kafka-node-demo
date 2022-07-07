import { Kafka } from "kafkajs";
import { brokerUrl } from "./config.js";

const kafka = new Kafka({
  clientId: "my-app",
  brokers: [brokerUrl],
});

export default kafka;
