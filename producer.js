const kafka = require("./kafka");

const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

const producer = kafka.producer();

const handleMsg = async () => {
  readline.question("", async msg => {
    await producer.send({
      topic: "test-topic",
      messages: [{ value: `${msg}` }],
    });
    handleMsg();
  });
};

producer.connect().then(() => {
  console.log("Enter a message to send: ");
  handleMsg();
});

// producer.disconnect()
