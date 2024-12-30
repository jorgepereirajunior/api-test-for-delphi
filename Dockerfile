FROM node:20-slim

RUN apt update -y && apt install -y procps

USER node

WORKDIR /home/node/api