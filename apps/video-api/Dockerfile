# Build Dist file
FROM node:20-bullseye-slim as builder

WORKDIR /usr/src/app

COPY package*.json pnpm-lock.yaml tsconfig*.json ./

RUN apt-get update \
  && apt-get install -y openssl python3 build-essential \
  && npm i -g pnpm

COPY . .

RUN pnpm install \
    && pnpm run prisma:video-data \
    && pnpm run build:video-api \
    && pnpm pkg delete scripts.prepare \
    && pnpm prune --prod

# Remove devDependencies Package.json
FROM node:20-bullseye-slim as remover

WORKDIR /usr/src/app

COPY --from=builder /usr/src/app/package*.json /usr/src/app/pnpm-lock.yaml ./
COPY --from=builder /usr/src/app/dist ./dist
COPY --from=builder /usr/src/app/node_modules ./node_modules

# Running Image
FROM node:20-bullseye-slim as running

WORKDIR /usr/src/app

COPY --from=remover /usr/src/app ./

EXPOSE 3005

CMD ["node", "dist/apps/video-api/main.js"]
