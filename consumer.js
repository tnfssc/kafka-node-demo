import kafka from "./kafka.js";

const consumer = kafka.consumer({ groupId: "test-group" });

consumer.connect().then(async () => {
  await consumer.subscribe({ topic: "test-topic", fromBeginning: true });
  await consumer.run({
    eachMessage: async ({ topic, partition, message }) => {
      console.log(message.value?.toString());
    },
  });
});
