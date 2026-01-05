# Excelerator

Excelerator is a modern, web-based spreadsheet editor that simplifies working with Excel and CSV files. It offers a clean, intuitive browser-based alternative to traditional desktop spreadsheet tools, making it easy to view, edit, and export data without the overhead of launching Excel.

---

## Core Purpose

Excelerator streamlines Excel and CSV workflows by providing:
- Fast, in-browser spreadsheet editing
- A user-friendly UI optimized for clarity and speed
- Cross-device accessibility with no desktop software required

---

## Key Features

### File Handling
- Upload **Excel (.xlsx, .xls)** and **CSV** files
- Drag-and-drop or file browser support
- Reliable file parsing powered by the `xlsx` library

---

### Data Editing
- In-line cell editing (click or double-click to edit)
- Real-time updates with inline validation
- Pagination for large datasets (up to 50 rows per page)
- Instant row count visibility

---

### Data Management
- Create new spreadsheets from scratch
- Copy cell values to clipboard with visual feedback
- Automatic header formatting  
  _(converts `camelCase` / `snake_case` into readable labels)_
- Adaptive column widths based on dataset size
- Sticky table headers for easier navigation

---

### Export Options
- Download edited data as **CSV**
- Download edited data as **Excel (.xlsx)**
- All exports preserve applied changes

---

### UI / UX
- Light mode support via `@nuxtjs/color-mode`
- Fully responsive (mobile + desktop)
- Tailwind CSS styling with smooth transitions
- Clean green accent color scheme with hover states
- Modern, minimal interface focused on usability

---

## Tech Stack
- **Nuxt 4** (Vue 3 framework)
- **Tailwind CSS** for styling
- **xlsx** for spreadsheet parsing and generation
- **@nuxt/ui** for UI components

---

## Target Use Case

Excelerator is ideal for:
- Quickly viewing and editing spreadsheet data
- Making fast data corrections without Excel
- Lightweight data manipulation tasks
- Collaborative workflows and browser-based access

Perfect for users who want speed, simplicity, and flexibility without desktop app friction.

---

## Status

Actively developed / experimental  
_(Features and UX may evolve as the project grows.)_
