## Agent D Backend

Modern, real-time backend for the Agent D dashboard, supporting agent management, performance tracking, execution timelines, activity feeds, and tool usage analytics.

![Sample WireFrame](public/wireframe%20idea.png)

### Tech Stack

- **FastAPI** (Python) – REST API and WebSock­et support
- **PostgreSQL** – Database
- **SQLAlchemy** – ORM Models
- **Redis** (optional) – Caching, async queues
- **WebSockets** – Live updates for dashboard events

***

## Database Schema

**Agents Table**


| Field | Type | Description |
| :-- | :-- | :-- |
| id | UUID (PK) | Unique agent ID |
| name | String | Agent display name |
| status | String | ‘active’, ‘inactive’, ‘error’ |
| last_active | DateTime | Timestamp of last activity |
| tasks_done | Integer | Completed tasks |

**Tools Table**


| Field | Type | Description |
| :-- | :-- | :-- |
| id | UUID (PK) | Unique tool ID |
| name | String | Display name |
| usage_count | Integer | Times used |

**AgentToolUsage Table**

- Tracks which agent used which tool, and when.

| Field | Type | Description |
| :-- | :-- | :-- |
| id | UUID (PK) | Row ID |
| agent_id | UUID (FK) | Agent |
| tool_id | UUID (FK) | Tool |
| used_at | DateTime | When used |

**Activity Table**


| Field | Type | Description |
| :-- | :-- | :-- |
| id | UUID (PK) | Row ID |
| agent_id | UUID (FK) | Agent |
| activity_type | String | E.g. ‘start’, ‘error’ |
| details | Text/JSON | Additional info |
| ts_created | DateTime | When happened |

**Execution Table**


| Field | Type | Description |
| :-- | :-- | :-- |
| id | UUID (PK) | Execution ID |
| agent_id | UUID (FK) | Agent |
| status | String | 'running', 'complete' |
| started_at | DateTime | When started |
| finished_at | DateTime | When finished |
| steps | JSON | Timeline steps |


***

## API Routes

| Route | Method | Description |
| :-- | :-- | :-- |
| `/api/agents` | GET | List all agents |
| `/api/agents` | POST | Add a new agent |
| `/api/agents/{id}` | GET | Get agent detail |
| `/api/agents/{id}` | PUT | Update agent |
| `/api/agents/{id}` | DELETE | Delete agent |
| `/api/agents/{id}/executions` | GET | List executions for one agent |
| `/api/agents/{id}/activity` | GET | Recent activity for one agent |
| `/api/tools` | GET | List all tools |
| `/api/tools/{id}` | GET | Tool detail |
| `/api/tools/{id}/usage` | GET | Usage history |
| `/api/activity` | GET | Full activity feed (dashboard table) |
| `/api/executions/{id}` | GET | Get execution details (timeline) |
| `/api/analytics/performance` | GET | Agent performance over time |
| `/api/analytics/tool-usage` | GET | Tool usage analytics |
| `/ws/activity` | WS | WebSocket for live dashboard updates |


***

## Example Minimal FastAPI App Structure

```
agent_d_backend/
├── app/
│   ├── main.py                 # FastAPI app
│   ├── models.py               # SQLAlchemy ORM models
│   ├── schemas.py              # Pydantic schemas
│   ├── api/                    # Routers (agents, tools, activities, analytics)
│   ├── database.py             # DB initialization
│   ├── websocket.py            # Real-time event streaming
│   ├── services/               # Business logic
├── tests/                      # Unit/integration tests
├── requirements.txt
├── Dockerfile                  # Container setup
├── .env.example                # Environment variables
```


***

## Quick Start

```bash
# Install dependencies
pip install -r requirements.txt

# Setup database
# (use alembic for migrations or manual SQL scripts)

# Run app
uvicorn app.main:app --reload

# API docs available at /docs
```


***

## Frontend Integration

- Fetch data and listen for live updates using the documented REST and WS endpoints.
- UI elements (cards, charts, tables) just consume light, normalized JSON.

***

## Extend \& Contribute

- Add new agents, tools, or analytics features in `/app/services/`.
- Register additional endpoints in `/app/api/`.
- Keep UI/data structures lightweight and easy to test.
- Use Pydantic schemas for data validation.

***

## License

MIT License. See full details in this repository.
