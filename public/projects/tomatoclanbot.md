# TomatoClanBot

---

[[github](https://github.com/vsecoder/TomatoClanBot)] [[habr](https://habr.com/ru/articles/791064/)]

---

TomatoClanBot emerged from an underground phenomenon tied to a simple but captivating phrase: *“write to the tomato.”* This phrase has intrigued countless users for over a decade, sparking a game-like mystery among the online community. While the origins are untraceable, the concept lives on—a social experiment where curiosity leads to discovery, and intrigue draws users into a self-sustaining circle of exploration. TomatoClanBot now brings structure to this once-organic trend, connecting a curious and engaged user base.

The bot is designed to manage users' progress within the community, track referrals, and handle rewards, and it’s all powered by aiogram 3. Aiogram provides the flexibility to create a robust and interactive bot while keeping performance optimal for TomatoClanBot’s growing user base.

**Current Statistics**

TomatoClanBot has **1,465** users, with **462** actively participating in the journey of *“writing to the tomato.”* Through referrals, rewards, and levels, the bot continues to create an immersive and evolving experience for the community.

**Database Model Structure**

Here’s a look at the User model, which manages users’ profiles, referrals, and status within the bot’s ecosystem:

```diagon/frame
from tortoise import fields, Model

class User(Model):
    id = fields.BigIntField(pk=True)  # Primary key for unique user identification
    telegram_id = fields.BigIntField()  # Unique Telegram ID of the user
    name = fields.CharField(max_length=255, default="Unknown")  # Username, defaults to "Unknown"

    refer = fields.BigIntField()  # ID of the user who referred this user
    referrals = fields.JSONField(default=[])  # List of user IDs referred by this user
    referral_level = fields.IntField(default=0)  # Level based on referrals

    balance = fields.IntField(default=0)  # User's in-app currency or points balance
    awards = fields.JSONField(default=[])  # List of awards or achievements

    register_date = fields.DatetimeField(auto_now_add=True)  # Date of registration

    confirmed = fields.BooleanField(default=False)  # Whether the user’s registration is confirmed

    status = fields.CharField(max_length=255, default="user")  # User’s status, default is "user"
    is_banned = fields.BooleanField(default=False)  # Indicates if the user is banned
```

Each user’s journey is tracked through this model, capturing essential information like referral links, status, and awards. This database structure allows for easy retrieval and management of user-specific data, creating a more personalized and engaging experience within the bot.

TomatoClanBot not only continues the tradition of this mysterious game but brings in modern features, powered by aiogram 3 and designed to foster an engaging community of curious minds.
