## Overview

This project digitalizes the production state management of factory equipment.
Traditionally, workers indicated machine states using physical magnets
(🟥 Red = stopped, 🟨 Yellow = starting/winding down, 🟩 Green = producing).

With this solution:

Workers can update machine states via a mobile-friendly app.
Supervisors can monitor all equipment in real time from a central dashboard.
Supervisors can also browse historical state changes and correlate them with production orders.

### Architecture

🚀 The solution consists of two main parts:

#### Frontend

React (TypeScript) with functional components and hooks.
Chakra UI for accessible, responsive design.
Integrates with Azure Entra ID for secure login.
Displays real-time equipment states and allows state changes (worker view).
Provides dashboards and history view (supervisor view).

#### Backend

ASP.NET Core (C#) Web API.
SQLite database to store equipment, states, and historical logs.
Azure Entra ID authentication:
Validates JWT access tokens issued by Azure.
Protects API endpoints with role/scope-based authorization.
Swagger UI enabled for API testing and documentation.