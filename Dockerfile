FROM node:26-alpine

WORKDIR /app

# Use the same locked, lifecycle-disabled install as CI.
COPY package.json package-lock.json ./
RUN npm ci --ignore-scripts

COPY . ./

EXPOSE 3000

# The development server must listen on the container interface for Compose.
CMD ["npm", "run", "start", "--", "--host", "0.0.0.0", "--port", "3000"]
