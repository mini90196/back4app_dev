# # Stage 1: Build the React application 
# FROM node:18 as build

# WORKDIR /app

# # COPY package*.json ./

# RUN rm -rf node_modules
# RUN npm install

# COPY . .

# RUN npm run build

# # Stage 2: Serve the React application using Nginx
# FROM nginx:stable-alpine

# COPY --from=build /app/build /usr/share/nginx/html

# # Copy the default nginx.conf provided by the docker image
# COPY nginx/nginx.conf /etc/nginx/conf.d/default.conf

# EXPOSE 80

# CMD ["nginx", "-g", "daemon off;"]

FROM node:18

# Working directory
WORKDIR /app

# Copy package.json and package-lock.json and install dependencies
COPY package*.json ./
RUN npm ci

# Copy the rest of the project files
COPY . .

# Expose the server port
EXPOSE 8000

# Command to start the server
CMD ["npm", "run", "server"]