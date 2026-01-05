# Excelerator – Feature Roadmap

This document outlines the planned evolution of **Excelerator**, a lightweight,
browser-based spreadsheet editor for CSV and Excel files.

All features are ordered from **easiest to implement → hardest**, with a strong focus on:
- Frontend-first development
- Minimal dependencies
- Solo-developer feasibility
- Staying within Excelerator’s original scope

---

## 1. Core UX Enhancements (Very Easy)

Small improvements that significantly improve usability and polish.

### 1.1 Column Sorting
- Click column headers to sort ascending / descending
- Visual sort indicators
- Reset sorting to default state

---

### 1.2 Global Search
- Search across all visible columns
- Highlight matching values
- Instant filtering while typing

---

### 1.3 Column Visibility
- Toggle columns on/off
- Persist visibility per session
- Helpful for wide datasets

---

### 1.4 Pagination Improvements
- Select rows per page (10 / 25 / 50 / 100)
- Jump to first / last page
- Sticky pagination controls

---

## 2. Editing Capabilities (Easy → Medium)

Enhances productivity while keeping editing intuitive.

### 2.1 Multi-Cell Selection
- Click-and-drag selection
- Shift-click range selection
- Keyboard navigation (arrow keys)

---

### 2.2 Bulk Editing
- Apply value to selected cells
- Fill down from first selected cell
- Replace values within a selection

---

### 2.3 Undo / Redo (Session-Based)
- Track edit history in memory
- Undo and redo cell edits
- Reset to original uploaded file

> Scope note: session-only, no persistent version history.

---

## 3. Data Cleanup Tools (Medium)

Focused tools for improving data quality without complexity.

### 3.1 Text Normalization
- Trim whitespace
- Convert text casing:
  - Uppercase
  - Lowercase
  - Title Case
- Apply per column or selection

---

### 3.2 Type Conversion Helpers
- Convert text → number
- Convert text → date
- Highlight invalid or failed conversions

---

### 3.3 Empty & Duplicate Detection
- Highlight empty cells
- Highlight duplicate values in a column
- Optional duplicate removal with preview

---

## 4. Data Awareness & Insights (Medium → Hard)

Adds visibility into dataset structure and quality.

### 4.1 Column Insights
Per-column metadata panel:
- Detected data type
- Unique value count
- Empty value count
- Minimum and maximum values (numeric)
- Average value (numeric)

---

### 4.2 Basic Column Calculations
- SUM, AVG, MIN, MAX
- Read-only calculations
- Display results in footer or side panel

---

### 4.3 Simple Validation Warnings
- Required column warnings
- Numeric-only column checks
- Min / max value warnings

> Visual feedback only — no hard enforcement.

---

## 5. Persistence & Export Enhancements (Harder)

Moves Excelerator beyond a temporary editor.

### 5.1 Local Persistence
- Save active files to localStorage or IndexedDB
- Restore last session on reload
- Manual “Save Draft” action

---

### 5.2 Export Improvements
- Preserve column order and visibility
- Preserve applied transformations
- Automatic filename versioning on export

---

## 6. Smart Assistance (Optional / Stretch)

Only considered once core functionality is stable.

### 6.1 Smart Suggestions
- Detect likely headers
- Suggest type conversions
- Warn about mixed or inconsistent column data

---

### 6.2 Action Shortcuts (Non-AI)
- Predefined actions such as:
  - Clean column
  - Normalize values
  - Remove duplicates

> Button-driven helpers, not AI-powered.

---

## Explicitly Out of Scope

The following are intentionally excluded to prevent scope creep:
- Real-time collaboration
- Full Excel formula engine
- Backend-heavy authentication systems
- Team permissions or roles
- Enterprise-grade schema enforcement

---

## Recommended Implementation Order

1. Sorting, search, pagination
2. Multi-cell selection and bulk edits
3. Undo / redo
4. Data cleanup tools
5. Duplicate detection
6. Column insights and calculations
7. Local persistence
8. Smart suggestions (optional)

---

## Status

Planned  
Feature scope may evolve based on usability feedback and development capacity.
