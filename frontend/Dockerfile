FROM node:16-alpine AS deps
RUN apk add --no-cache libc6-compat
ENV NODE_ENV production
WORKDIR /app
COPY package.json .
RUN npm install
COPY . .
RUN npm run build
RUN addgroup -g 1001 -S nodejs
RUN adduser -S nextjs -u 1001
USER nextjs
EXPOSE 3000

ENV PORT 3000
CMD [ "npm", "start"]