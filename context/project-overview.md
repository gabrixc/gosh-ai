# Gosh AI

## Overview

Gosh AI is an AI-powered project editor for the web. It lets users create and
manage projects, each with an associated editor workspace. The application
targets individuals and small teams who want an AI-assisted environment for
writing, planning, or generating content. The exact AI capabilities and
collaboration model are to be defined in upcoming feature specs.

## Goals

1. Users can create, open, and manage projects from a sidebar panel
2. The editor workspace provides a focused, distraction-free environment
3. AI assistance is integrated directly into the editing flow

## Core User Flow

1. User opens the app and sees the editor chrome with a project sidebar
2. User creates or selects a project from the sidebar
3. User opens the project in the editor workspace
4. User writes or generates content with AI assistance
5. User saves and returns to the project list

## Features

### Project Management

- Project list with "My Projects" and "Shared" views
- Create new project action
- Open project in editor

### Editor

- Fixed top navbar with sidebar toggle
- Slide-in project sidebar overlay
- Editor content area (upcoming)

### AI Integration

- AI-assisted writing and generation (upcoming — to be defined in feature specs)

## Scope

### In Scope

- Web application built with Next.js (no native mobile app)
- Project CRUD and editor chrome
- AI-assisted text/content editing

### Out of Scope

- Native mobile apps
- Real-time collaborative editing (may revisit later)
- File system access or local file editing

## Success Criteria

1. A user can create a project and open it in the editor without errors
2. The editor chrome (navbar, sidebar) renders correctly on desktop viewports
3. AI assistance produces a visible result within the editor workspace
