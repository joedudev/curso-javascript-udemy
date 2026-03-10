# 🃏 Blackjack Lab: Vanilla JavaScript Edition

![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-yellow?style=for-the-badge&logo=javascript)
![DOM Manipulation](https://img.shields.io/badge/DOM-Manipulation-orange?style=for-the-badge)
![CSS3](https://img.shields.io/badge/UI-Bootstrap-blue?style=for-the-badge&logo=bootstrap)

This is a fully functional Blackjack game built with **Vanilla JavaScript**. It focuses on logical structures, array manipulation, and real-time DOM updates without the use of frameworks.

## 🕹️ How it Works

The game simulates a standard Blackjack match between a **Player** and the **Computer**.

- **The Goal:** Get closer to 21 points than the computer without going over.
- **Controls:** - `Nuevo Juego`: Resets the deck and scores.
  - `Pedir Carta`: Draws a card and adds its value to your total.
  - `Detener`: Ends your turn and triggers the Computer's AI.

## 🧠 The Algorithm

The logic follows a structured lifecycle to ensure data integrity and a smooth UI:

1.  **Deck Generation:** Creates a deck of 52 cards combining values (2-10, A, J, Q, K) and types (C, D, H, S).
2.  **Shuffling:** Utilizes the `Underscore.js` library to perform a randomized shuffle of the array.
3.  **Point Calculation:**
    - Numbers (2-10) represent their face value.
    - Figures (J, Q, K) are worth 10 points.
    - The Ace (A) is worth 11 points.
4.  **Player Logic:** Updates the UI dynamically. If the player exceeds 21, they "Bust" and the computer wins automatically.
5.  **Computer AI:** Uses a `do-while` loop to draw cards until it either beats the player's score or busts.
6.  **Resolution:** Uses `setTimeout` to ensure the final card renders on the screen before the "Winner" alert appears.

---

## 🛠️ Tech Stack

- **Logic:** JavaScript (ES6 Modules)
- **UI:** HTML5 & CSS3 (Custom card positioning)
- **Framework:** Bootstrap 4 (Grid system)
- **External Libs:** Underscore.js (Shuffle algorithm)
