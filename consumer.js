const kafka = require("./kafka");

const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

const consumer = kafka.consumer({ groupId: "test-group" });

consumer.connect().then(async () => {
  await consumer.subscribe({ topic: "test-topic", fromBeginning: true });
  await consumer.run({
    eachMessage: async ({ topic, partition, message }) => {
      console.log(message.value.toString());
    },
  });
});
