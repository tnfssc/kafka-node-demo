import kafka from "./kafka.js";
import { question } from "./utils.js";

const producer = kafka.producer();

await producer.connect();
console.log("Enter a message to send: ");

while (1) {
  const msg = await question("");
  if (msg === "exit") {
    console.log("Exiting...");
    break;
  }
  await producer.send({
    topic: "test-topic",
    messages: [{ value: `${msg}` }],
  });
}

await producer.disconnect();
process.exit(0);
