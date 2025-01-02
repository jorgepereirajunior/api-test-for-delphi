FROM node:20-bookworm

RUN apt-get update && \
    apt-get install -y \
    iputils-ping
    # netcat \
    # mysql-client && \
    # apt-get clean && \
    # rm -rf /var/lib/apt/lists/*

USER node

WORKDIR /home/node/api