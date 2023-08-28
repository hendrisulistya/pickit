# Use an official Node.js runtime as the base image
FROM node:16 AS build

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code to the container
COPY . .

# Build the application
RUN npm run build

# Use a lightweight Node.js runtime for serving the application
FROM node:16-alpine

# Set the working directory in the container
WORKDIR /app

# Copy the built application from the previous stage
COPY --from=build /app/dist ./dist
COPY package.json ./

# Install serve to run the application
RUN npm install -g serve

# Expose the port the application will run on
EXPOSE 3000

# Start the application
CMD ["serve", "-s", "dist", "-p", "3000"]

