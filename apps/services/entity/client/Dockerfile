# Install dependencies only when needed
FROM docker.io/node:lts-alpine as deps
RUN apk add --no-cache libc6-compat
WORKDIR /app
COPY ./package*.json ./
RUN npm install --only=production

# Production image, copy all the files and run nest
FROM docker.io/node:lts-alpine as runner
RUN apk add --no-cache dumb-init
ENV NODE_ENV production
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY --from=deps /app/package.json ./package.json
COPY dist/apps/services/entity/client .
RUN chown -R node:node .
USER node
CMD ["dumb-init", "node", "main.js"]
