#!/bin/bash -e

CMD="kafka-consumer-groups --bootstrap-server kafka-1:9091 --group $@ --describe"
echo "COMMAND: $CMD"
docker-compose exec kafka-1 sh -c "$CMD"
