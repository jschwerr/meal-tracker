FROM mhart/alpine-node:8.11.4

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
COPY package*.json ./
RUN npm install

# Copy app source code
COPY . .

#Expose port and start application
EXPOSE 9000
CMD [ "npm", "start" ]
