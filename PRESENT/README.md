# 👑 King Prithvi Narayan Shah — Interactive Classroom Presentation

> A modern, engaging, and interactive web presentation built for touch-screen TVs, projectors, and classroom presentations. Designed in a **creamy pastel pink & soft lavender aesthetic** that students and teachers will love!

---

## 🌟 Key Features

- 📱 **Touch-Screen TV Optimized**:
  - Huge touch targets, tactile ripple effects, and gesture support (swipe left/right to move slides).
  - **Whiteboard Pen Tool (`✏️ Pen`)**: Draw or circle directly on the screen with Pink, Purple, Gold, or Green markers!
  - **Touch Laser Pointer (`🔦 Laser`)**: Glowing neon pink-purple spotlight following your finger.
  - **Stopwatch / Presentation Timer**: Keep track of your speaking time right in the top bar.
  - **Fullscreen Toggle (`⛶ Fullscreen` or press `F`)**: Clean edge-to-edge display with no browser clutter.

- 🎤 **Built-in Speaker Notes Drawer (`📝 Notes`)**:
  - Need help knowing what to say? Tap the **Notes** button on screen!
  - Displays simple, easy-to-understand speech scripts, interactive hooks to ask the class, and physical chart actions.

- 🌸 **Creamy Pink & Lavender Aesthetics**:
  - Soft strawberry milk & vanilla lilac pastel gradients.
  - Elegant glassmorphic cards with frosted glass blur.
  - Clear, high-contrast typography readable from across the classroom.

- 🎮 **Engaging & Testable Classroom Activities**:
  - **Slide 1**: Interactive 50 Kingdoms vs. One United Nepal map toggle.
  - **Slide 2**: Interactive ☝️ Body Language Quiz (tap to reveal what the statue pose means!).
  - **Slide 3**: Nuwakot trans-Himalayan trade route 4-step interactive flow.
  - **Slide 4**: The 3 Battles of Kirtipur interactive stepper (Attempt 1, 2, and the smart 6-month blockade victory).
  - **Slide 5**: Sindhuli Gadhi Hornet Ambush simulator (tap to release mountain hornets with sound FX!).
  - **Slide 6**: Indra Jatra Goddess Kumari Royal Tika blessing reveal.
  - **Slide 7**: Divya Upadesh wisdom cards + **Live Classroom Voting Poll** with real-time animated percentage bars!
  - **Slide 8**: **Creative Chart Paper Timeline** (Stepping stones trail, 7 3D Flip-Flap Shields, Khukuri blade spine).
  - **Slide 9**: **The Grand Classroom Quiz Game** (Kahoot-style with streaks, hints, sounds, and confetti!).

- 🔊 **Zero-Dependency Sound Effects**:
  - Chimes, clicks, hornet buzz, correct answer sounds, fanfare trumpet, and victory celebrations generated via the browser's Web Audio API (works completely offline!).

---

## 🚀 How to Host on GitHub Pages (Takes 2 Minutes!)

Since this presentation is a pure HTML5/CSS3/JavaScript static web app, hosting on GitHub Pages is completely free and instant:

1. **Create a GitHub Repository**:
   - Go to [GitHub.com](https://github.com) and click **New Repository**.
   - Name it `prithvi-narayan-shah-presentation` (or any name you like).
   - Set it to **Public**.

2. **Upload the Files**:
   - Upload the files in this folder to the repository:
     - `index.html`
     - `css/style.css`
     - `js/app.js`
     - `js/audio.js`
     - `js/draw.js`
     - `js/quiz.js`
     - `assets/king_prithvi.jpg`
     - `README.md`
   - Or run in terminal:
     ```bash
     git init
     git add .
     git commit -m "Initial presentation commit"
     git branch -M main
     git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
     git push -u origin main
     ```

3. **Turn On GitHub Pages**:
   - In your GitHub repo, go to **Settings** > **Pages** (in the left sidebar).
   - Under **Build and deployment** > **Branch**, select `main` branch and `/ (root)` folder.
   - Click **Save**.
   - In 30–60 seconds, GitHub will give you a live link like:
     `https://YOUR_USERNAME.github.io/YOUR_REPO_NAME/`

4. **Present on the Touch Screen TV**:
   - Open that link in the browser on the touch-screen TV.
   - Tap **Fullscreen** (`⛶`) in the top bar.
   - You're ready to rock the presentation! 🎉

---

## ⌨️ Keyboard Shortcuts (For Laptop / Presenter Remote)

| Key | Action |
|---|---|
| `Right Arrow` / `Space` / `Page Down` | Next Slide |
| `Left Arrow` / `Page Up` | Previous Slide |
| `F` | Toggle Fullscreen |
| `Escape` | Close Notes Drawer / Modals |

---

## 📂 Project Structure

```
PRESENT/
├── index.html                 # Main presentation single-page app
├── css/
│   └── style.css              # Creamy pink & lavender styles, glassmorphism, responsive rules
├── js/
│   ├── app.js                 # Slide controller, speaker notes, timer, touch gestures
│   ├── audio.js               # Web Audio API sound synthesizer
│   ├── draw.js                # Touch whiteboard pen and laser pointer engine
│   └── quiz.js                # Classroom quiz game and live voting poll
├── assets/
│   └── king_prithvi.jpg       # Statue photograph extracted from source guide
└── README.md                  # Instructions and guide
```

Good luck with your presentation tomorrow! 🌟
