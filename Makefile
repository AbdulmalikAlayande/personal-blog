# Variables
NODE_MODULES_BIN = ./node_modules/.bin

# Install dependencies
install:
	npm install

# Start development server
start:
	$(NODE_MODULES_BIN)/react-scripts start

# Build production-ready code
build:
	$(NODE_MODULES_BIN)/react-scripts build

# Run tests
test:
	$(NODE_MODULES_BIN)/react-scripts test

# Lint code
lint:
	$(NODE_MODULES_BIN)/eslint src

# Format code
format:
	$(NODE_MODULES_BIN)/prettier --write "src/**/*.js"

# Clean build artifacts
clean:
	rm -rf build

# Run development server with hot reloading
dev:
	$(NODE_MODULES_BIN)/nodemon --exec $(NODE_MODULES_BIN)/react-scripts start

# Run development server with HTTPS
https:
	HTTPS=true $(NODE_MODULES_BIN)/react-scripts start

# Run development server on a specific port
port:
	PORT=3001 $(NODE_MODULES_BIN)/react-scripts start