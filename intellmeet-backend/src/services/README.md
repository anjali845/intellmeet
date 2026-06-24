# services/

This folder holds the **service layer** — business logic that is reusable
across multiple controllers, or that talks to external systems.

Controllers should stay thin (handle req/res only) and delegate real logic
to services as the app grows. Examples of what will live here later:

- `authService.js` — JWT generation/verification, refresh token rotation
- `meetingService.js` — meeting creation logic, room management
- `aiService.js` — OpenAI integration for AI-generated meeting summaries
- `cacheService.js` — Redis caching helpers
- `taskService.js` — task management business logic

Keeping this separation now means controllers won't need to be rewritten
when these features are added — they'll simply call into a service.
