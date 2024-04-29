#-----------Stage 1: Compile and Build angular codebase-----------------

# Use official node image as the base image
FROM node:18-alpine as builder

# Create a directory
RUN mkdir -p /app

# Set the working directory
WORKDIR /app

# Copy package file from host
COPY ["package*.json", "/app/"]

# Install All dependencies
RUN npm install

# Copy everything from host to /ng-app in the container
COPY . /app

# Generate the build of the application
ARG BUILD_ENV
RUN npm run build:web;

#----------Stage 2: Serve app with nginx server-------------

# Use official nginx image as the base image
FROM nginx:stable-alpine

# Remove default nginx website
RUN rm -rf /usr/share/nginx/html/*

# Copy the build output to replace the default nginx
COPY --from=builder /app/dist/web /usr/share/nginx/html

# Copy the built app from the builder stage to the NGINX directory
COPY nginx/default.conf /etc/nginx/conf.d/default.conf

# Expose port 80
EXPOSE 80

# Start NGINX
CMD ["nginx", "-g", "daemon off;"]
