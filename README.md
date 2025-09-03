# MindGrid UI Dashboard

## Overview

MindGrid UI is a modern, responsive dashboard application designed to visualize and manage agent performance, execution timelines, recent activities, and tool usage. Built with React, TypeScript, Vite, and Tailwind CSS, it provides a clean and intuitive interface for monitoring and interacting with data.

## Project Goals

- Deliver a user-friendly dashboard for agent and tool management
- Visualize key metrics and activities in real-time
- Support extensibility for new components and data sources
- Ensure high performance and accessibility

## Key Features

- Agent performance tracking
- Execution timeline visualization
- Recent activity feed
- Tool usage analytics
- Sidebar navigation and header controls
- Modular UI components (cards, charts, tables, etc.)

## Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)
- npm or bun package manager

### Installation

```bash
git clone <your-repo-url>
cd mindgrid-ui
npm install # or bun install
```

### Running the Project

```bash
npm run dev # or bun run dev
```

Open your browser and navigate to `http://localhost:5173` (default Vite port).

## Project Structure

- `src/components/` - Reusable UI components
- `src/pages/` - Main application pages
- `src/hooks/` - Custom React hooks
- `src/lib/` - Utility functions
- `public/` - Static assets

## Documentation

### Project Structure

- `src/components/` - Reusable UI components
- `src/pages/` - Main application pages
- `src/hooks/` - Custom React hooks
- `src/lib/` - Utility functions
- `public/` - Static assets

### Component Usage

- Each UI component is documented with props and usage examples in the source files.
- For custom components, refer to the comments and TypeScript types for guidance.

### Extending the Dashboard

- Add new components to `src/components/`
- Create new pages in `src/pages/`
- Use hooks from `src/hooks/` for shared logic

### Styling

- Tailwind CSS is used for rapid UI development and customization.
- Global styles are in `src/index.css` and `src/App.css`.

---

## Tech Stack

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## Contributing

1. Fork the repository
2. Create a new branch (`git checkout -b feature/your-feature`)
3. Commit your changes
4. Open a pull request

## License

This project is licensed under the MIT License.

---

For more details, see the source code and inline documentation.

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## What is MindGrid UI and Why Does It Exist?

MindGrid UI is designed to solve the challenge of monitoring, analyzing, and managing multiple agents and tools in complex environments. In many organizations, teams rely on various automated agents and tools to perform tasks, but lack a unified interface to track their performance, visualize execution timelines, and understand tool usage patterns.

MindGrid UI provides:

- A centralized dashboard for real-time insights into agent activities and tool usage.
- Visualizations that help teams quickly identify bottlenecks, trends, and recent activities.
- Modular components that allow easy extension and integration with new data sources or business logic.
- A foundation for building advanced analytics and management features for operational excellence.

The goal is to empower users—whether developers, managers, or analysts—to make informed decisions, improve efficiency, and maintain transparency across automated processes.

## Example Usage

Here is a conceptual overview of the MindGrid UI dashboard layout:

```
------------------------------------------------------
| Sidebar |         Main Dashboard Panel              |
|---------|------------------------------------------|
| Agents  |  [Agent Performance Chart]                |
| Tools   |  [Execution Timeline]                    |
| Activity|  [Recent Activity Table]                  |
| ...     |  [Tool Usage Analytics]                   |
------------------------------------------------------
```

- **Sidebar**: Navigate between dashboard sections (Agents, Tools, Activity, etc.)
- **Main Panel**: Visualizes agent performance, execution timelines, recent activities, and tool usage.
- **Cards/Tables/Charts**: Summarize key metrics and statuses for quick insights.

### Example: Agent Performance Table

| Agent Name | Status | Tasks Completed | Last Active        |
| ---------- | ------ | --------------- | ------------------ |
| Agent A    | Active | 120             | 2025-09-03 10:15AM |
| Agent B    | Idle   | 98              | 2025-09-03 09:50AM |
| Agent C    | Error  | 45              | 2025-09-03 08:30AM |

This table helps users quickly assess which agents are performing well, which are idle, and which may need attention.

### Example: Tool Usage Chart (Conceptual)

```
Tool Usage (Bar Chart)

Tool X | ██████████████ 80 uses
Tool Y | ████████       40 uses
Tool Z | ████           15 uses
```

This conceptual chart shows which tools are most frequently used, helping teams optimize resources and identify popular or underutilized tools.

These examples illustrate how MindGrid UI helps users quickly understand system status and performance at a glance.
