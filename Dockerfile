# Use official Cypress image
FROM cypress/included:14.3.2

# Set working directory inside container
WORKDIR /app

# Copy project files
COPY . .

# Install dependencies
RUN npm install

# Run all tests (optional — can be overridden by CMD)
CMD ["npm", "run", "test:chrome"]
