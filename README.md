# Rapido Working System

A modular backend codebase for distributed ride-hailing or mobility services, with a focus on decoupled architecture, message-driven workflows, and scalable service boundaries.

---

## Features

- **Service-Oriented Structure:** Clean separation for components—Gateway, User, Ride, Captain—ready for scaling and independent deployment.
- **API Gateway Pattern:** The `gateway` module centralizes entry points for clients and handles communication with core services.
- **Domain Services:** Dedicated `user`, `ride`, and `captain` modules, each managing its own logic, storage, and business flows.
- **Message Queue Integration:** RabbitMQ integration (`rabitnq` config/sample) for decoupled background processing and event-driven interactions.
- **Ease of Extension:** New services or features can be added by creating new folders/services, each with independent responsibility.

---

## Tech Stack

| Purpose            | Technology              |
|--------------------|------------------------|
| Gateway/API        | Node.js (likely Express or similar) |
| Services           | Node.js/JavaScript     |
| Messaging/Queue    | RabbitMQ               |
| Monorepo Structure | Classic multi-folder   |

---

## Project Structure

```
rapido-working-system-/
  gateway/      # Main API entry point, routes, client interface
  user/         # User management service (registration, auth, etc.)
  ride/         # Ride management service (bookings, status, etc.)
  captain/      # Driver ("captain") service (assignment, etc.)
  rabitnq       # RabbitMQ config/example (integration for messaging)
```

---

## Quick Start (Local)

> **Prerequisites:**  
> - Node.js (v18+ recommended)  
> - RabbitMQ (local or cloud, optional in dev)  
> - Git

### 1. Clone the Repository

```sh
git clone https://github.com/lobby11/rapido-working-system-.git
cd rapido-working-system-
```

### 2. Install Dependencies

Repeat for each service:
```sh
cd <service-folder>
npm install
```
For example:
```sh
cd gateway && npm install
cd ../user && npm install
cd ../ride && npm install
cd ../captain && npm install
```

### 3. Environment Variables

Set up a `.env` file in each service folder as needed. Common environment variables:
```
PORT=xxxx
RABBITMQ_URL=amqp://localhost
# ...other service-specific keys
```

### 4. Run Services

You can start each service in its own terminal:
```sh
# In each folder (gateway, user, ride, captain):
npm start
```
Or use concurrent tools/PM2 for monorepo management.

---

## Message Queue (RabbitMQ)

- The repo expects RabbitMQ running, with connection info in relevant `.env` files or defaulting to localhost.
- For dev: [RabbitMQ Docker quickstart](https://hub.docker.com/_/rabbitmq):

```sh
docker run -it --rm -p 5672:5672 -p 15672:15672 rabbitmq:3-management
```

---

## Monorepo/Architecture Notes

- Add new domains/services by making new folders.
- Standard request flow:  
  Client → `gateway` → (via RabbitMQ or direct API) → target service (`user`, `ride`, `captain`)  
- Designed for migration to Docker, Kubernetes, or cloud-native solutions.

---

## What I Learned

This project was built as a hands-on learning exercise exploring:

- Modular backend architectures and separation of concerns.
- Message queues for scalability and fault-tolerance.
- Real-world use cases for taxis/ride-hailing distributed systems.
- How to structure projects for extensibility and clarity .

---


#AI Usage
-Used Claude Code to transform the basic frontend UI into a significantly improved version
-Used Claude to generate this README after explaining the full project, tech stack, and deployment process and adding theortical knowledge
