/**
 * Interactive Classroom Quiz & Poll System
 * Simple, clear, student-friendly language!
 */

const QUIZ_QUESTIONS = [
  {
    question: "1. How old was Prithvi Narayan Shah when crowned King in 1799 BS?",
    options: [
      { text: "16 years old", correct: false, comment: "Too young! Try again." },
      { text: "20 years old", correct: true, comment: "Correct! Crowned at just age 20." },
      { text: "28 years old", correct: false, comment: "Not 28, he was much younger!" },
      { text: "35 years old", correct: false, comment: "Nope, he started earlier!" }
    ],
    hint: "A very young king."
  },
  {
    question: "2. What did he bring from Banaras after losing at Nuwakot?",
    options: [
      { text: "Gold crowns", correct: false, comment: "No, he focused on defense." },
      { text: "Horses only", correct: false, comment: "He needed modern weapons." },
      { text: "Modern guns & blacksmiths", correct: true, comment: "Correct! Better guns and training." },
      { text: "Silk clothes", correct: false, comment: "No, he prepared for battle." }
    ],
    hint: "Better weapons to defend."
  },
  {
    question: "3. What does his raised index finger mean?",
    options: [
      { text: "'I am #1 King'", correct: false, comment: "Not about ego!" },
      { text: "'Look at Everest'", correct: false, comment: "Not mountains!" },
      { text: "'One United Nation' (एकता)", correct: true, comment: "Correct! We are all one country." },
      { text: "'Be quiet please'", correct: false, comment: "Haha no, it means unity!" }
    ],
    hint: "Unity of all people."
  },
  {
    question: "4. What secret weapon defeated the British army at Sindhuli Gadhi?",
    options: [
      { text: "Hot water", correct: false, comment: "No, wild nature was used!" },
      { text: "Wild hornet nests (भिर मौरी)", correct: true, comment: "Correct! Hornets chased British troops away." },
      { text: "Heavy mud", correct: false, comment: "Mud wouldn't stop rifles!" },
      { text: "Snowballs", correct: false, comment: "Sindhuli had no snow!" }
    ],
    hint: "Stinging mountain insects."
  },
  {
    question: "5. How was Kirtipur won on the 3rd try after losing twice?",
    options: [
      { text: "Climbing steep rocks", correct: false, comment: "No, that failed earlier." },
      { text: "6-month trade blockade", correct: true, comment: "Correct! Patience and cutting supplies won peacefully." },
      { text: "Foreign help", correct: false, comment: "He fought on his own." },
      { text: "Midnight tunnels", correct: false, comment: "No tunnels were used." }
    ],
    hint: "Patience and cutting trade."
  },
  {
    question: "6. During which festival did he enter Kathmandu peacefully?",
    options: [
      { text: "Dashain", correct: false, comment: "Not Dashain." },
      { text: "Indra Jatra (इन्द्रजात्रा)", correct: true, comment: "Correct! Kumari gave him royal Tika." },
      { text: "Tihar", correct: false, comment: "Festival of lights, but not this one." },
      { text: "Holi", correct: false, comment: "Not Holi." }
    ],
    hint: "Street chariot festival in Basantapur."
  },
  {
    question: "7. In Divya Upadesh, what is Nepal compared to?",
    options: [
      { text: "A bird in a cage", correct: false, comment: "No, Nepal stays independent." },
      { text: "A yam between two stones (तरुल)", correct: true, comment: "Correct! Balance between China and India." },
      { text: "An island in water", correct: false, comment: "Nepal has no ocean." },
      { text: "A tree in a storm", correct: false, comment: "The yam metaphor is famous." }
    ],
    hint: "Sweet root between two rocks."
  }
];

class QuizManager {
  constructor() {
    this.questions = QUIZ_QUESTIONS;
    this.currentIndex = 0;
    this.score = 0;
    this.streak = 0;
    this.maxStreak = 0;

    this.container = document.getElementById('quizWidget');
    this.render();
  }

  render() {
    if (!this.container) return;

    if (this.currentIndex >= this.questions.length) {
      this.renderSummary();
      return;
    }

    const q = this.questions[this.currentIndex];
    const progressPercent = Math.round((this.currentIndex / this.questions.length) * 100);

    this.container.innerHTML = `
      <div class="quiz-card glassmorphism">
        <div class="quiz-header">
          <div class="quiz-badge">
            <span class="quiz-badge-icon">🎯</span>
            <span>Question ${this.currentIndex + 1} of ${this.questions.length}</span>
          </div>
          <div class="quiz-stats">
            <span class="stat-pill">⭐ Score: <strong>${this.score}</strong></span>
            <span class="stat-pill streak-pill ${this.streak >= 2 ? 'streak-fire' : ''}">
              🔥 Streak: <strong>${this.streak}</strong>
            </span>
          </div>
        </div>

        <div class="quiz-progress-track">
          <div class="quiz-progress-bar" style="width: ${progressPercent}%"></div>
        </div>

        <h3 class="quiz-question-text">${q.question}</h3>
        <p class="quiz-hint-text">💡 <em>Hint: ${q.hint}</em></p>

        <div class="quiz-options-grid">
          ${q.options.map((opt, idx) => `
            <button class="quiz-opt-btn" onclick="window.quizManager.selectAnswer(${idx})">
              <span class="opt-letter">${String.fromCharCode(65 + idx)}</span>
              <span class="opt-text">${opt.text}</span>
            </button>
          `).join('')}
        </div>

        <div id="quizFeedbackBox" class="quiz-feedback-box hidden"></div>
      </div>
    `;
  }

  selectAnswer(index) {
    const q = this.questions[this.currentIndex];
    const opt = q.options[index];
    const fbBox = document.getElementById('quizFeedbackBox');
    const allButtons = this.container.querySelectorAll('.quiz-opt-btn');

    allButtons.forEach((btn, idx) => {
      btn.disabled = true;
      if (q.options[idx].correct) {
        btn.classList.add('is-correct');
      } else if (idx === index) {
        btn.classList.add('is-wrong');
      }
    });

    if (opt.correct) {
      this.score += 100 + (this.streak * 25);
      this.streak++;
      if (this.streak > this.maxStreak) this.maxStreak = this.streak;
      if (window.soundEngine) window.soundEngine.playCorrect();
      this.spawnConfetti();

      fbBox.className = 'quiz-feedback-box feedback-success';
      fbBox.innerHTML = `
        <div class="feedback-title">🎉 That's Correct!</div>
        <p class="feedback-desc">${opt.comment}</p>
        <button class="btn-primary touch-btn" onclick="window.quizManager.nextQuestion()">Next Question ➜</button>
      `;
    } else {
      this.streak = 0;
      if (window.soundEngine) window.soundEngine.playWrong();

      fbBox.className = 'quiz-feedback-box feedback-error';
      fbBox.innerHTML = `
        <div class="feedback-title">💡 Nice Try!</div>
        <p class="feedback-desc">${opt.comment}</p>
        <button class="btn-primary touch-btn" onclick="window.quizManager.nextQuestion()">Next Question ➜</button>
      `;
    }

    fbBox.classList.remove('hidden');
  }

  nextQuestion() {
    if (window.soundEngine) window.soundEngine.playClick();
    this.currentIndex++;
    this.render();
  }

  renderSummary() {
    if (window.soundEngine) window.soundEngine.playFanfare();
    this.spawnConfetti();

    this.container.innerHTML = `
      <div class="quiz-card glassmorphism quiz-summary-card">
        <div class="summary-trophy">👑</div>
        <h2 class="summary-title">Awesome Job! Quiz Finished!</h2>
        <p class="summary-subtitle">You know King Prithvi Narayan Shah's story like a champion!</p>

        <div class="summary-metrics">
          <div class="metric-card">
            <span class="metric-num">${this.score}</span>
            <span class="metric-lbl">Total Points</span>
          </div>
          <div class="metric-card">
            <span class="metric-num">${this.maxStreak} 🔥</span>
            <span class="metric-lbl">Best Streak</span>
          </div>
          <div class="metric-card">
            <span class="metric-num">Super Star ⭐</span>
            <span class="metric-lbl">Class Rank</span>
          </div>
        </div>

        <div class="summary-actions">
          <button class="btn-primary touch-btn" onclick="window.quizManager.restart()">
            🔄 Play Quiz Again
          </button>
          <button class="btn-secondary touch-btn" onclick="window.presentationApp.goToSlide(0)">
            🏠 Back to Start
          </button>
        </div>
      </div>
    `;
  }

  restart() {
    this.currentIndex = 0;
    this.score = 0;
    this.streak = 0;
    this.maxStreak = 0;
    this.render();
  }

  spawnConfetti() {
    const canvas = document.getElementById('confettiCanvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const colors = ['#F472B6', '#C084FC', '#FBBF24', '#34D399', '#FB7185', '#DDD6FE', '#F43F5E'];
    const particles = [];

    for (let i = 0; i < 65; i++) {
      particles.push({
        x: canvas.width / 2 + (Math.random() - 0.5) * 220,
        y: canvas.height * 0.45 + (Math.random() - 0.5) * 120,
        vx: (Math.random() - 0.5) * 13,
        vy: (Math.random() - 0.7) * 15,
        size: Math.random() * 8 + 5,
        color: colors[Math.floor(Math.random() * colors.length)],
        rotation: Math.random() * 360,
        rotSpeed: (Math.random() - 0.5) * 12,
        opacity: 1
      });
    }

    let frames = 0;
    function anim() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach(p => {
        p.x += p.vx;
        p.y += p.vy;
        p.vy += 0.35;
        p.rotation += p.rotSpeed;
        p.opacity -= 0.015;

        if (p.opacity > 0) {
          ctx.save();
          ctx.translate(p.x, p.y);
          ctx.rotate((p.rotation * Math.PI) / 180);
          ctx.fillStyle = p.color;
          ctx.globalAlpha = Math.max(0, p.opacity);
          ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size);
          ctx.restore();
        }
      });

      frames++;
      if (frames < 75) {
        requestAnimationFrame(anim);
      } else {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
      }
    }
    requestAnimationFrame(anim);
  }
}

// Classroom Live Poll for Slide 10
class PollManager {
  constructor() {
    this.votes = {
      yam: 0,
      garden: 0,
      economy: 0
    };
  }

  vote(option) {
    this.votes[option] = (this.votes[option] || 0) + 1;

    if (window.soundEngine) window.soundEngine.playClick();
    this.updateDisplay();

    const resultMsg = document.getElementById('pollResultNotice');
    if (resultMsg) {
      resultMsg.innerText = "Vote counted! Tap again to add more votes from classmates.";
      resultMsg.classList.remove('hidden');
    }
  }

  reset() {
    this.votes = { yam: 0, garden: 0, economy: 0 };
    this.updateDisplay();
    const resultMsg = document.getElementById('pollResultNotice');
    if (resultMsg) resultMsg.classList.add('hidden');
    if (window.soundEngine) window.soundEngine.playClick();
  }

  updateDisplay() {
    const total = this.votes.yam + this.votes.garden + this.votes.economy;
    const yamPct = total > 0 ? Math.round((this.votes.yam / total) * 100) : 0;
    const gardenPct = total > 0 ? Math.round((this.votes.garden / total) * 100) : 0;
    const economyPct = total > 0 ? Math.round((this.votes.economy / total) * 100) : 0;

    const elYamBar = document.getElementById('pollBarYam');
    const elGardenBar = document.getElementById('pollBarGarden');
    const elEconBar = document.getElementById('pollBarEcon');

    const elYamVal = document.getElementById('pollValYam');
    const elGardenVal = document.getElementById('pollValGarden');
    const elEconVal = document.getElementById('pollValEcon');

    if (elYamBar) elYamBar.style.width = `${yamPct}%`;
    if (elGardenBar) elGardenBar.style.width = `${gardenPct}%`;
    if (elEconBar) elEconBar.style.width = `${economyPct}%`;

    if (elYamVal) elYamVal.innerText = `${this.votes.yam} votes (${yamPct}%)`;
    if (elGardenVal) elGardenVal.innerText = `${this.votes.garden} votes (${gardenPct}%)`;
    if (elEconVal) elEconVal.innerText = `${this.votes.economy} votes (${economyPct}%)`;
  }
}

document.addEventListener('DOMContentLoaded', () => {
  window.quizManager = new QuizManager();
  window.pollManager = new PollManager();
  window.pollManager.updateDisplay();
});
