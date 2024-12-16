# RayRoad

---

[[web-site](https://rayroad.space/)] [[bot](https://t.me/RayRoadbot)]

---

RayRoad is an aggregator of freelance offers from multiple platforms, including **Kwork**, **FL.ru**, **Habr** and others. The project was developed as a custom solution with a focus on automating the freelance job search process.

## About the Project

**Purpose and Goals**

RayRoad streamlines the experience for freelancers by gathering offers from various platforms into one place. It enhances productivity by organizing job details, evaluating client reliability, and enabling easy access to opportunities directly through a chat interface.

### Key Features:

1. **Client Trust Level Calculation**  
   The system calculates a trust score for clients based on their activity and behavior on freelance platforms. This helps freelancers quickly identify reliable clients.

2. **Centralized Job Information**  
   RayRoad collects all relevant details about freelance orders, including budgets, deadlines, and descriptions, and structures them for clarity.

3. **Topic-based Organization**  
   Jobs are delivered to the chat interface in a structured format with hashtags for easy searching. This allows freelancers to find the most relevant offers with minimal effort.

## How It Works

The backend includes an admin panel built with **aiogram3**, a powerful Python framework for Telegram bots. RayRoad continuously monitors multiple freelance platforms, aggregates order information, and delivers it to users via the Telegram bot in a clean, organized format.

### Example Workflow:
- The system collects offers from platforms like FL.ru and Kwork.  
- It calculates the client's trust score.  
- The bot posts the offer to the chat with structured data and relevant hashtags for searching.
