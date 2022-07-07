import kafka from "./kafka.js";
import { question } from "./utils.js";

const clientName = (await question("What is your name? ")).replace(/\s/g, "");

const producer = kafka.producer();
const consumer = kafka.consumer({ groupId: `kafka-grp-${Math.random().toFixed(3)}` });
await producer.connect();
await consumer.connect();
await consumer.subscribe({ topic: "test-topic", fromBeginning: false });
consumer.run({
  eachMessage: async ({ message }) => {
    const msg = message.value?.toString();
    if (msg) {
      let data = {};
      try {
        data = JSON.parse(msg);
      } catch (e) {}
      if (data.to === clientName) {
        console.log(`${data.from} sent '${data.msg}'`);
      }
    }
  },
});

console.log(`Your username is ${clientName}`);
console.log(`Type "exit" to exit`);
console.log(`Type '<username> <message>' to send a message`);
console.log("");

while (1) {
  const msg = await question("");
  if (msg === "exit") {
    console.log("Exiting...");
    break;
  }
  await producer.send({
    topic: "test-topic",
    messages: [
      { value: JSON.stringify({ from: clientName, to: msg.split(" ")[0], msg: msg.split(" ").slice(1).join(" ") }) },
    ],
  });
}

await producer.disconnect();
console.log("Disconnected from producer");
await consumer.disconnect();
console.log("Disconnected from consumer");
console.log("Visit again!");
process.exit(0);
