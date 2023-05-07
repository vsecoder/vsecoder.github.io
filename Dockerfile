FROM node:16-alpine3.11 AS base

# Install all dependencies (with dev ones)
RUN npm install

# Build app
RUN npm run build

# Expose the listening port
EXPOSE 3000

# Run npm start script when container starts
CMD [ "npm", "run", "start" ]
