#  Candidate Review Dashboard
LIVE Link:- candidate-dashboard-main.vercel.app


##  Overview

This project is a **visual hiring dashboard** designed for recruiters to efficiently review and prioritize candidates.

The goal is to simulate a **real internal hiring tool** where reviewers can:

 Inspect candidates
 Evaluate assignments and videos
 Automatically compute priority
 Shortlist candidates quickly

## Problem Statement

Recruiters often deal with **1000+ candidates**, making it difficult to:

 Compare candidates efficiently
 Track evaluation progress
 Prioritize high-quality applicants

This dashboard solves that by providing:

 Clear data visualization
 Smart filtering & sorting
 Real-time priority calculation

##  Target User

 Recruiters
 Hiring managers
 Technical reviewers

##  Features

### 1. Candidate List Panel

 Displays all candidates in a clean card layout
 Search by name
Filter by:

   Assignment score
   Video score
   ATS score
  Review status
 Sort by:

   Priority
   Assignment score

### 2. Candidate Detail Panel

 Opens on click (side modal)
Shows:

   Assignment score
   Video score
   ATS score
   GitHub score
   Communication score

### 3. Assignment Evaluation Panel

 UI Quality
 Component Structure
 State Handling
 Edge-case Handling
 Responsiveness
Accessibility
### 4. Video Evaluation Panel

 Clarity
 Confidence
 Architecture explanation
 Tradeoff reasoning
 Communication

### 5. Priority Engine (Core Logic)

Priority Score is calculated as:

 30% Assignment
 25% Video
 20% ATS
 15% GitHub
 10% Communication

Priority Levels:

 🟢 **P0** → Interview immediately
 🟡 **P1** → Strong shortlist
 🟠 **P2** → Review later
 🔴 **P3** → Reject

Priority updates dynamically based on data.
### 6. Dashboard Summary

 Total candidates
 Reviewed candidates
 Pending candidates
 High-priority candidates (P0)

### 7. Review Workflow

 Candidates start as **Pending**
 After evaluation → marked as **Reviewed**
 Helps track hiring progress efficiently

## Tech Stack

 React (Vite)
 JavaScript (ES6)
 CSS (custom styling)

---

## Data

 Mock data generated locally
 50+ candidates
Realistic score distribution
##  Key Design Decisions

### 1. Simplicity over Over-Engineering

Focused on clarity and usability instead of unnecessary complexity.

### 2. Real-time Priority Calculation

Priority is computed dynamically instead of storing static values.

### 3. Modular Component Structure

 CandidateList
 CandidateModal
 Utility-based logic (priority engine)

### 4. UX-first Approach

 Fast scanning
 Clear visual hierarchy
 Color-coded priorities

## Edge Cases Handled

Empty search results
 Filtering combinations
 Missing/low scores
 Dynamic updates after review

## What I Would Improve (If More Time)
Candidate comparison mode (side-by-side)
 Persistent data (backend / local storage)
 Advanced sorting (multi-field)
 Keyboard navigation & accessibility improvements
 Performance optimization for 1000+ candidates

---

##  Run Locally

```bash
npm install
npm run dev
```

## AI Usage Disclosure

AI tools were used for guidance and debugging support.
All core logic, UI structure, and implementation decisions were manually written and understood.

---

##  Conclusion

This project focuses on **real-world product thinking**:
* Clear workflows
* Meaningful interactions
* Practical recruiter use-case

The goal was not just to build UI, but to build a **usable internal tool**.

