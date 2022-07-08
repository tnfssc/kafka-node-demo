# [Kafka](https://kafka.apache.org/) chat demo using [KafkaJS](https://kafka.js.org/)

```sh
node chat.js          # Start the chat client
node consumer.js      # Start the logging client
docker-compose up -d  # Start the Kafka cluster
```

## Instructions

- Edit `.env` to set the Kafka cluster details (the default `localhost:9092` is fine if using the same machine)
- Start the Kafka cluster
- Start the chat client
- Start the chat client in another terminal
- Enter different names to each of the sessions
- Enter `exit` to exit a session
- Type `<username> <message>` to send a message to a user
- The messages will be logged in the consumer if that is running in another terminal

## Known issues

A ton. Won't fix any.
