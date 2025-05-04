# Assignment 8 – JSX Guessing Game

## 🎯 Overview

This project is part of **DGMD E-28: Developing Single Page Web Applications**. It implements a number guessing game using **React with JSX**, allowing users to guess a randomly generated number with configurable settings and real-time feedback.

---

## ✅ Requirements

### Technologies Used:
- **HTML** for structure  
- **CSS** for styling and layout  
- **React with JSX (via Vite)** for UI rendering and component logic  

---

## 🕹️ Gameplay Features

- The app randomly selects a number within a configurable range.
- Users attempt to guess the number within a limited number of tries.
- After each guess, the app provides feedback:
  - "Too high"
  - "Too low"
  - "Correct!" – with a congratulations message
  - "Game over" – if the user runs out of guesses

---

## ⚙️ Pages

### 🔸 Main Game Page
- Core logic for the guessing game
- Shows result of each guess
- Disables input after game ends
- Displays “New Game” button only after win/loss

### 🔸 Settings Page
- Allows user to set:
  - Max number of guesses
  - Number range (min–max)

### 🔸 Stats Page
- Displays:
  - Total wins
  - Average number of guesses to win (only updates on win)

---

## 🚀 Deliverables

- `App.jsx`
- Any additional module files created

---

## 🌟 Additional Features

Once the base requirements were met, the following enhancements were implemented:

- **Theme Toggle**: Allows users to switch between Harvard mode and Dark mode with a simple icon-based toggle.
- **Persistent Settings**: User-selected range and max guesses are saved using `localStorage` and persist across sessions.
- **Responsive Design**: Game UI and navigation adapt to different screen sizes.
- **Animated Feedback**: Status messages animate on display for improved user experience.
- **Keyboard Accessibility**: Users can press Enter to submit a guess without clicking the button.
- **Statistics Reset**: Players can clear their stats on the stats page.
- **Active Navigation Highlighting**: The current page is visually distinguished in the top nav bar.


## 📆 Project Info

- **Author:** Elizabeth Koch  
- **Date:** Sun May 4, 2025  
- **Assignment:** DGMD E-28 – Assignment 8  