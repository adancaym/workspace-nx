# Install dependencies only when needed
FROM docker.io/node:lts-alpine AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app
COPY ./package*.json ./
RUN npm install --ignore-scripts

# Production image, copy all the files and run nest
FROM docker.io/node:lts-alpine AS runner
RUN apk add --no-cache dumb-init
ENV NODE_ENV production
ENV PORT 3000
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY --from=deps /app/package.json ./package.json
COPY dist/apps/services/bff/authentication .
RUN chown -R node:node .
USER node
EXPOSE 3000
CMD ["dumb-init", "node", "main.js"]

