# HikkaHost

---

[[web-site](https://hikka.host/)] [[bot](https://t.me/hikkahost_bot/)] [[github](https://github.com/hikkahost)]

---

HikkaHost is a hosting service for the [Hikka](https://hikka.pw/) userbot, running on powerful servers with fully automated setup and management.

## About the Project

**Purpose and Goals**

HikkaHost was developed to simplify the user experience by eliminating the need for users to learn server setup or software installation. With HikkaHost, everything is taken care of, from setup to management.

In addition, we offer several extra features, including:

1. Bot management via a web interface
2. Inline menu controls for easy access
3. Community support chat for quick assistance

And all this comes at a highly affordable price of just $1 per month, which is more budget-friendly than most VPS options.

## How It Works

One of HikkaHost’s key components is Docker, which we use for container management. This allows us to quickly and seamlessly update Docker images and add new features or fixes.

## Project Architecture
The architecture of HikkaHost includes:

- A central server housing the PostgreSQL database and an API for managing other servers.
- Dedicated servers that run Docker containers for the bots, which communicate with the central server through an access-keyed API.
- Various clients that can control bots via API (e.g., web interface, bots, modules).

```diagon/graph
Central_Server -> PostgreSQL_Database
Central_Server -> API

API -> Dedicated_Servers
API -> Clients

Dedicated_Servers -> Docker_Containers

Clients -> Web_Interface
Clients -> Bot
Clients -> Modules
```