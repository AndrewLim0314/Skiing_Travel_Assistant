# Project Goal: Travel Planner

## What I'm building
A tool that creates the **best and cheapest vacation plans**. I'm starting with ski trips, then generalizing to other trip types later.

Given my constraints (dates, origin airport, group size, budget, skill level), it ranks candidate destinations by:
- **Total trip cost:** flights + ground transport + lodging + lift tickets + rentals/extras
- **Trip quality:** mountain quality (vertical, snowfall, terrain), travel friction (direct flight, drive time from airport to mountain)

I can adjust the **weights** (e.g. "I'll pay $200 more to save 2 hours of driving"). That's what makes it a decision tool rather than a search page.

## Why I'm building it
I spent a lot of time manually researching a ski trip and want a tool that does it for me. I don't care that similar tools exist or that this is hard. **The real goal is to become a better developer.** This is a long, educational project.

## How to work with me (Claude Code)
- **I write all the code myself.** Do NOT write code for me unless I explicitly ask.
- Explain the concept, break the task into small steps, and give hints.
- When I'm stuck, ask guiding questions before giving answers.
- Review what I write. Point out bugs and design tradeoffs, but let me fix them.
- Sessions are about **30 minutes a day**, so keep tasks small enough to finish in one sitting.
- At the end of a session, give me a 5-minute review: what I did well and one thing to improve.
- End each session at a natural stopping point with a failing test or a TODO, so it's easy to restart tomorrow.

## Tech stack
- **MERN, written in TypeScript** (Node, Express, React, MongoDB)
- **Vitest** for tests
- Add tools only when a phase needs them. Don't introduce Express, Mongo, or React before their phase.
- Later option: swap Mongo for Postgres if I want to learn SQL.

## Roadmap
Each phase should leave me with something that works.

### Phase 1: Hand-built dataset and CLI
- JSON file of ~15 resorts I researched by hand: nearest airports, drive times, lift ticket price, vertical drop, average snowfall
- A program that loads it and ranks resorts with a scoring function
- Tests for the scoring logic
- **No APIs, no database, no UI yet**
- Skills: data modeling, functions, testing, designing a scoring model

### Phase 2: Real cost data
- Add one data source at a time, starting with flights
- Skills: HTTP clients, API keys, rate limits, error handling, caching, deciding how stale data can be

### Phase 3: The hard sources
- Lift tickets and lodging (usually no public API, so scraping or manual entry)
- Drive times via a routing API
- Check each site's terms of service before scraping

### Phase 4: Backend and database
- Move from JSON to a real database
- Scheduled job to refresh prices and store history, so I can tell "is this a good price?"

### Phase 5: Web UI
- Form for constraints and weight sliders
- Ranked results view

### Phase 6: Generalize
- Abstract the model so beach and city trips can plug in different cost and quality factors
- Only after ski trips work well (can't design a good abstraction from one example)

## Current phase
**Phase 1**

## First task
Write the fields for one real resort I already researched as a JSON object, then have Claude Code review the schema and tell me what's missing.

## Ground rules
1. Write tests for scoring logic early. It's pure logic and changes often.
2. Keep a `DECISIONS.md`: one line per choice and why.
3. Don't chase real-time accuracy. Cached, day-old data is fine for a planning tool.
4. Skip for now: microservices, GraphQL, Docker, cloud deployment.
