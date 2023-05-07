FROM node:alpine

COPY ./ ./

# Install all dependencies (with dev ones)
RUN npm install

# Build app
RUN npm run build

# Expose the listening port
EXPOSE 3000

# Run npm start script when container starts
CMD [ "npm", "run", "start" ]
