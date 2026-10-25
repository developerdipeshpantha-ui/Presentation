/**
 * King Prithvi Narayan Shah Presentation App
 * Touch-Screen TV & Classroom Interactive Experience
 * Presenter: Dipesh (Shree Nirmal Secondary School, Tanahun)
 * Theme: Pink & Light Purple Creamy Aesthetic
 */

class PresentationApp {
  constructor() {
    this.slides = document.querySelectorAll('.slide-card');
    this.currentSlide = 0;
    this.totalSlides = this.slides.length;
    this.timerSeconds = 0;
    this.timerInterval = null;
    this.timerRunning = false;
    this.isDrawerOpen = false;

    this.touchStartX = 0;
    this.touchStartY = 0;

    this.init();
  }

  init() {
    this.setupNavigation();
    this.setupTouchGestures();
    this.setupKeyboard();
    this.setupTimer();
    this.setupRightToolsDrawer();
    this.setupSimulations();
    this.setupDeepDives();
    this.goToSlide(0, false);
  }

  setupRightToolsDrawer() {
    const toggleTab = document.getElementById('rightToolsToggleTab');
    const drawer = document.getElementById('rightToolsDrawer');
    const closeBtn = document.getElementById('closeRightDrawerBtn');
    const tabIcon = document.getElementById('rightTabIcon');

    const toggleDrawer = () => {
      this.isDrawerOpen = !this.isDrawerOpen;
      if (drawer) drawer.classList.toggle('open', this.isDrawerOpen);
      if (tabIcon) tabIcon.innerText = this.isDrawerOpen ? '❯' : '❮';
      if (window.soundEngine) window.soundEngine.playClick();
    };

    if (toggleTab) toggleTab.addEventListener('click', toggleDrawer);
    if (closeBtn) closeBtn.addEventListener('click', toggleDrawer);

    // Fullscreen monitor
    document.addEventListener('fullscreenchange', () => {
      const isFs = !!document.fullscreenElement;
      const fsBtn = document.getElementById('drawerFsBtn');
      if (fsBtn) {
        fsBtn.innerHTML = isFs ? '✕ <span>Exit Fullscreen</span>' : '⛶ <span>Fullscreen</span>';
        fsBtn.classList.toggle('tool-active', isFs);
      }
    });

    // Wire up drawer buttons
    const fsBtn = document.getElementById('drawerFsBtn');
    if (fsBtn) {
      fsBtn.addEventListener('click', () => {
        this.toggleFullscreen();
        if (window.soundEngine) window.soundEngine.playClick();
      });
    }

    const penBtn = document.getElementById('drawerPenBtn');
    if (penBtn) {
      penBtn.addEventListener('click', () => {
        const isPen = window.canvasApp && (window.canvasApp.mode === 'pen' || window.canvasApp.mode === 'eraser');
        if (isPen) {
          window.canvasApp.exitPen();
        } else {
          window.canvasApp.setMode('pen');
        }
        if (drawer) drawer.classList.remove('open');
        this.isDrawerOpen = false;
        if (tabIcon) tabIcon.innerText = '❮';
      });
    }

    const laserBtn = document.getElementById('drawerLaserBtn');
    if (laserBtn) {
      laserBtn.addEventListener('click', () => {
        const isLaser = window.canvasApp && window.canvasApp.mode === 'laser';
        if (isLaser) {
          window.canvasApp.setMode('none');
        } else {
          window.canvasApp.setMode('laser');
        }
        if (drawer) drawer.classList.remove('open');
        this.isDrawerOpen = false;
        if (tabIcon) tabIcon.innerText = '❮';
      });
    }

    const notesBtn = document.getElementById('drawerNotesBtn');
    const notesDrawer = document.getElementById('speakerNotesDrawer');
    if (notesBtn && notesDrawer) {
      notesBtn.addEventListener('click', () => {
        notesDrawer.classList.toggle('open');
        notesBtn.classList.toggle('tool-active', notesDrawer.classList.contains('open'));
        if (drawer) drawer.classList.remove('open');
        this.isDrawerOpen = false;
        if (tabIcon) tabIcon.innerText = '❮';
        if (window.soundEngine) window.soundEngine.playClick();
      });
    }

    const closeNotesBtn = document.getElementById('closeNotesDrawerBtn');
    if (closeNotesBtn && notesDrawer) {
      closeNotesBtn.addEventListener('click', () => {
        notesDrawer.classList.remove('open');
        if (notesBtn) notesBtn.classList.remove('tool-active');
        if (window.soundEngine) window.soundEngine.playClick();
      });
    }

    const gridBtn = document.getElementById('drawerGridBtn');
    const gridModal = document.getElementById('slideOverviewModal');
    if (gridBtn && gridModal) {
      gridBtn.addEventListener('click', () => {
        gridModal.classList.remove('hidden');
        if (drawer) drawer.classList.remove('open');
        this.isDrawerOpen = false;
        if (tabIcon) tabIcon.innerText = '❮';
        if (window.soundEngine) window.soundEngine.playClick();
      });
    }

    const closeGridBtn = document.getElementById('closeOverviewModalBtn');
    if (closeGridBtn && gridModal) {
      closeGridBtn.addEventListener('click', () => {
        gridModal.classList.add('hidden');
        if (window.soundEngine) window.soundEngine.playClick();
      });
    }

    const soundBtn = document.getElementById('drawerSoundBtn');
    if (soundBtn) {
      soundBtn.addEventListener('click', () => {
        const enabled = window.soundEngine.toggle();
        soundBtn.innerHTML = enabled ? '🔊 <span>Sound: ON</span>' : '🔇 <span>Sound: OFF</span>';
        soundBtn.classList.toggle('tool-active', enabled);
        if (enabled && window.soundEngine) window.soundEngine.playClick();
      });
    }
  }

  setupNavigation() {
    const prevBtn = document.getElementById('prevSlideBtn');
    const nextBtn = document.getElementById('nextSlideBtn');

    if (prevBtn) prevBtn.addEventListener('click', () => this.prevSlide());
    if (nextBtn) nextBtn.addEventListener('click', () => this.nextSlide());

    const dotsTrack = document.getElementById('slideDotsTrack');
    if (dotsTrack) {
      dotsTrack.innerHTML = '';
      this.slides.forEach((_, idx) => {
        const dot = document.createElement('button');
        dot.className = `slide-dot ${idx === 0 ? 'active' : ''}`;
        dot.title = `Jump to Slide ${idx + 1}`;
        dot.setAttribute('aria-label', `Slide ${idx + 1}`);
        dot.addEventListener('click', () => this.goToSlide(idx));
        dotsTrack.appendChild(dot);
      });
    }

    this.renderSlideOverviewModal();
  }

  setupKeyboard() {
    window.addEventListener('keydown', (e) => {
      if (['INPUT', 'TEXTAREA'].includes(e.target.tagName)) return;

      if (e.key === 'ArrowRight' || e.key === ' ' || e.key === 'PageDown') {
        e.preventDefault();
        this.nextSlide();
      } else if (e.key === 'ArrowLeft' || e.key === 'PageUp') {
        e.preventDefault();
        this.prevSlide();
      } else if (e.key === 'f' || e.key === 'F') {
        this.toggleFullscreen();
      } else if (e.key === 'Escape') {
        this.closeAllDrawers();
        if (window.canvasApp && window.canvasApp.mode !== 'none') {
          window.canvasApp.exitPen();
        }
      }
    });
  }

  setupTouchGestures() {
    const container = document.getElementById('presentationContainer');
    if (!container) return;

    container.addEventListener('touchstart', (e) => {
      if (window.canvasApp && (window.canvasApp.mode === 'pen' || window.canvasApp.mode === 'eraser')) return;

      if (e.touches.length === 1) {
        this.touchStartX = e.touches[0].clientX;
        this.touchStartY = e.touches[0].clientY;
      }
    }, { passive: true });

    container.addEventListener('touchend', (e) => {
      if (window.canvasApp && (window.canvasApp.mode === 'pen' || window.canvasApp.mode === 'eraser')) return;

      if (e.changedTouches.length === 1) {
        const touchEndX = e.changedTouches[0].clientX;
        const touchEndY = e.changedTouches[0].clientY;
        const diffX = touchEndX - this.touchStartX;
        const diffY = touchEndY - this.touchStartY;

        if (Math.abs(diffX) > 60 && Math.abs(diffX) > Math.abs(diffY) * 1.5) {
          if (diffX < 0) {
            this.nextSlide();
          } else {
            this.prevSlide();
          }
        }
      }
    }, { passive: true });
  }

  goToSlide(index, playSound = true) {
    if (index < 0 || index >= this.totalSlides) return;

    this.slides.forEach((slide, idx) => {
      slide.classList.remove('active');
      if (idx === index) {
        slide.classList.add('active');
      }
    });

    this.currentSlide = index;

    const currentNumEl = document.getElementById('currentSlideNumber');
    const totalNumEl = document.getElementById('totalSlidesNumber');
    const progressBar = document.getElementById('presentationProgressBar');

    if (currentNumEl) currentNumEl.innerText = index + 1;
    if (totalNumEl) totalNumEl.innerText = this.totalSlides;
    if (progressBar) {
      const pct = Math.round(((index + 1) / this.totalSlides) * 100);
      progressBar.style.width = `${pct}%`;
    }

    const dots = document.querySelectorAll('.slide-dot');
    dots.forEach((dot, idx) => {
      dot.classList.toggle('active', idx === index);
    });

    this.updateSpeakerNotesForCurrentSlide();

    if (playSound && window.soundEngine) {
      window.soundEngine.playSlide();
    }

    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  nextSlide() {
    if (this.currentSlide < this.totalSlides - 1) {
      this.goToSlide(this.currentSlide + 1);
    }
  }

  prevSlide() {
    if (this.currentSlide > 0) {
      this.goToSlide(this.currentSlide - 1);
    }
  }

  toggleFullscreen() {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(() => {});
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen().catch(() => {});
      }
    }
  }

  setupTimer() {
    const timerDisplay = document.getElementById('drawerTimerDisplay');
    const startPauseBtn = document.getElementById('drawerTimerToggleBtn');
    const resetBtn = document.getElementById('drawerTimerResetBtn');

    const updateDisplay = () => {
      const mins = Math.floor(this.timerSeconds / 60);
      const secs = this.timerSeconds % 60;
      if (timerDisplay) {
        timerDisplay.innerText = `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
      }
    };

    if (startPauseBtn) {
      startPauseBtn.addEventListener('click', () => {
        if (this.timerRunning) {
          clearInterval(this.timerInterval);
          this.timerRunning = false;
          startPauseBtn.innerText = '▶️ Start';
        } else {
          this.timerRunning = true;
          startPauseBtn.innerText = '⏸️ Pause';
          this.timerInterval = setInterval(() => {
            this.timerSeconds++;
            updateDisplay();
          }, 1000);
        }
        if (window.soundEngine) window.soundEngine.playClick();
      });
    }

    if (resetBtn) {
      resetBtn.addEventListener('click', () => {
        clearInterval(this.timerInterval);
        this.timerRunning = false;
        this.timerSeconds = 0;
        updateDisplay();
        if (startPauseBtn) startPauseBtn.innerText = '▶️ Start';
        if (window.soundEngine) window.soundEngine.playClick();
      });
    }
  }

  closeAllDrawers() {
    const drawer = document.getElementById('rightToolsDrawer');
    if (drawer) drawer.classList.remove('open');
    this.isDrawerOpen = false;

    const tabIcon = document.getElementById('rightTabIcon');
    if (tabIcon) tabIcon.innerText = '❮';

    const notesDrawer = document.getElementById('speakerNotesDrawer');
    if (notesDrawer) notesDrawer.classList.remove('open');

    const gridModal = document.getElementById('slideOverviewModal');
    if (gridModal) gridModal.classList.add('hidden');

    if (window.deepDiveManager) {
      window.deepDiveManager.close();
    }
  }

  setupDeepDives() {
    const elements = document.querySelectorAll('[data-deepdive]');
    elements.forEach(el => {
      el.addEventListener('click', (e) => {
        e.stopPropagation();
        const key = el.getAttribute('data-deepdive');
        if (window.deepDiveManager && key) {
          window.deepDiveManager.open(key);
        }
      });
    });
  }

  renderSlideOverviewModal() {
    const gridContainer = document.getElementById('overviewSlidesGrid');
    if (!gridContainer) return;

    gridContainer.innerHTML = '';
    const slideTitles = [
      "1. Self Introduction (Dipesh)",
      "2. Topic Title: King Prithvi (श्री ५ पृथ्वीनारायण शाह)",
      "3. 50 Kingdoms to 1 Country (५० राज्यहरू)",
      "4. Who Was the King? (☝️ एकताको प्रतीक)",
      "5. Turning Point: Nuwakot (नुवाकोट विजय)",
      "6. Battles of Kirtipur (कीर्तिपुरको ३ लडाइँ)",
      "7. Makwanpur Gateway (मकवानपुर गढी विजय)",
      "8. Beating the British (सिन्धुली गढी युद्ध)",
      "9. Peaceful Takeover (इन्द्रजात्रा र कुमारी टिका)",
      "10. Valley Unification (उपत्यका एकीकरण र राजधानी)",
      "11. Golden Teachings (दिव्य उपदेश)",
      "12. Creative Chart Timeline (चार्ट पेपर टाइमलाइन)",
      "13. Classroom Quiz Game (कक्षा क्विज खेल)",
      "14. Summary & Q&A (निष्कर्ष तथा छलफल)"
    ];

    slideTitles.forEach((title, idx) => {
      const card = document.createElement('div');
      card.className = `overview-card ${idx === this.currentSlide ? 'active' : ''}`;
      card.innerHTML = `
        <div class="overview-num">Slide ${idx + 1}</div>
        <div class="overview-title">${title}</div>
      `;
      card.addEventListener('click', () => {
        this.goToSlide(idx);
        const modal = document.getElementById('slideOverviewModal');
        if (modal) modal.classList.add('hidden');
      });
      gridContainer.appendChild(card);
    });
  }

  updateSpeakerNotesForCurrentSlide() {
    const notesContent = document.getElementById('speakerNotesContent');
    if (!notesContent) return;

    const notesData = [
      {
        title: "Slide 1: Self Introduction",
        hook: "Stand with confidence, smile, and introduce yourself!",
        speech: "Good morning respected English Teacher Ms. Bipana Sunar and my dear classmates! I am Dipesh from Shree Nirmal Secondary School, Tanahun. Today, I am excited to present the heroic history of King Prithvi Narayan Shah and how he united our nation.",
        action: "Tap 'Start King Prithvi Presentation' to begin!",
        fact: "Student presenter from Tanahun (तनहुँ), Nepal."
      },
      {
        title: "Slide 2: Topic Title Slide",
        hook: "Introduce the main title with enthusiasm!",
        speech: "Our topic today is King Prithvi Narayan Shah (श्री ५ बडामहाराजाधिराज पृथ्वीनारायण शाह) — how a young 20-year-old king changed over 50 fighting kingdoms into one single, strong nation.",
        action: "Tap 'Touch to Start Presentation'!",
        fact: "Crowned at age 20 in 1799 BS."
      },
      {
        title: "Slide 3: 50 Kingdoms to 1 Country",
        hook: "Ask the class: 'Imagine needing a passport just to travel from Pokhara to Kathmandu!'",
        speech: "Before King Prithvi, Nepal was broken into more than 50 tiny states (बाइसे र चौबिसे राज्य). They fought constantly over small lands. People couldn't travel freely. Young King Prithvi had a bold dream to unite them all.",
        action: "Tap on any kingdom card (Gorkha, Kantipur, Patan, Bhaktapur) to see its direct details!",
        fact: "Over 50 kingdoms became 1 country."
      },
      {
        title: "Slide 4: Who Was the King? (☝️ Pose)",
        hook: "Ask classmates: 'Look at his famous statue! Why is his index finger raised up in the air?'",
        speech: "Many people guess it means 'I am number one!' But it actually means: 'One Unified Nation' (हामी सबै एक हौँ). He believed that when we are united, no foreign invader can break us.",
        action: "Tap the raised-finger quiz button to reveal the answer with golden sparkles!",
        fact: "Chandragiri Hills (चन्द्रागिरि) is where he first envisioned a united Nepal."
      },
      {
        title: "Slide 5: Victory at Nuwakot (1801 BS)",
        hook: "Ask the class: 'When you fail a test the first time, do you quit or try harder?'",
        speech: "His first attack failed! But he didn't give up. He travelled to Banaras (बनारस), bought modern flintlock guns, hired skilled blacksmiths, trained his army, and attacked again in 1801 BS. This time, he won! Nuwakot opened the wealthy trade route to Tibet (भोट).",
        action: "Tap on any of the 4 cards on screen to open its direct details!",
        fact: "Nuwakot (नुवाकोट गढी) was the golden key to Kathmandu Valley."
      },
      {
        title: "Slide 6: The 3 Battles of Kirtipur",
        hook: "Tell the class: 'This is the biggest lesson in grit and changing your strategy.'",
        speech: "Kirtipur was high on rocky cliffs. Gorkhalis attacked twice and suffered heartbreaking defeats. His dearest general, Kalu Pande (कालु पाण्डे), died, and the King barely survived. Instead of attacking a third time with brute force, he set up a patient 6-month blockade. The fort surrendered peacefully!",
        action: "Tap the Attempt tabs or tap Kalu Pande's shield to inspect its details!",
        fact: "Patience and smart tactics beat brute force every time."
      },
      {
        title: "Slide 7: Makwanpur Gateway (1819 BS)",
        hook: "Ask the class: 'How did Gorkhalis defeat an army with heavy cannons at night?'",
        speech: "In 1819 BS, King Prithvi captured the southern fortress of Makwanpur (मकवानपुर गढी). The Nawab of Bengal sent General Gurgin Khan (गुर्गिन खाँ) with thousands of soldiers to invade. Gorkhalis launched surprise night ambushes down steep slopes, forcing them to retreat and capturing their cannons!",
        action: "Tap the Makwanpur card to see the direct facts on securing southern trade!",
        fact: "Secured southern trade corridors with India."
      },
      {
        title: "Slide 8: Beating the British Army (Sindhuli Gadhi)",
        hook: "Fast Fact: 'Did you know Gorkhali soldiers defeated modern British guns using mountain hornet nests?'",
        speech: "In 1824 BS, Captain Kinloch (क्याप्टेन किन्लोक) arrived with 2,400 trained British East India Company soldiers carrying muskets. At Sindhuli Gadhi (सिन्धुली गढी), Gorkhalis used steep cliffs, uphill ambushes, and threw angry wild hornet hives (भिर मौरी)! The British fled, and Gorkhalis captured 500+ modern rifles!",
        action: "Tap 'Release Hornet Swarm' to trigger sound effects and show captured guns!",
        fact: "Captured 500+ modern British firearms."
      },
      {
        title: "Slide 9: Peaceful Takeover During Indra Jatra",
        hook: "Ask the class: 'How do you take over a capital without destroying a single home or temple?'",
        speech: "On September 25, 1768 AD (1825 BS), during the lively Indra Jatra festival, Gorkhali forces walked into Kathmandu with almost zero bloodshed. King Prithvi walked to Kumari Ghar and received the sacred Royal Tika from Living Goddess Kumari (जीवित देवी श्री कुमारी)! He respected Newari culture and made Kathmandu the capital.",
        action: "Tap Kumari Ghar to receive the Royal Tika blessing with festival chimes!",
        fact: "Minimal bloodshed; full respect for local customs."
      },
      {
        title: "Slide 10: Fall of Patan & Bhaktapur: Unification Complete",
        hook: "Explain: 'With Bhaktapur's surrender, 600 years of Malla dynasty ended peacefully.'",
        speech: "Lalitpur Patan surrendered peacefully. In 1826 BS, Bhaktapur joined after elderly King Ranajit Malla stepped down. King Prithvi declared Kathmandu as the national capital (राजधानी) of modern Nepal.",
        action: "Tap the Valley Unification card to open its direct facts!",
        fact: "1826 BS marked the complete unification of Kathmandu Valley."
      },
      {
        title: "Slide 11: The Golden Teachings (Divya Upadesh)",
        hook: "Ask classmates: 'Which advice from 250 years ago is most true for Nepal today?'",
        speech: "Before passing away at age 52 in Devighat, he shared his golden teachings (दिव्य उपदेश): 1. Nepal is a yam between two boulders (balance with India and China). 2. Nepal is a common flower garden of all castes. 3. Support local clothes and protect our economy.",
        action: "Ask classmates to vote on screen for their favorite teaching!",
        fact: "Studied by historians around the world."
      },
      {
        title: "Slide 12: Creative Chart Paper Timeline",
        hook: "Show your physical chart paper or switch through these 3 digital designs!",
        speech: "Here are the 3 creative ways to display the timeline: The Mountain Path (Stepping Stones), the 7 Flip-Flap Shields, and the Khukuri Blade Spine!",
        action: "Tap any shield on screen to flip it open for the class to see!",
        fact: "Covers 1799 BS to 1831 BS."
      },
      {
        title: "Slide 13: Classroom Quiz Challenge",
        hook: "Announce: 'Quiz time! Let's see who was paying attention!'",
        speech: "Invite students to come up to the touch screen or call out answers!",
        action: "Tap the options on screen; celebrate correct answers with confetti!",
        fact: "7 fun questions with streak fire points."
      },
      {
        title: "Slide 14: Summary & Discussion / Q&A",
        hook: "Thank your teacher and classmates warmly.",
        speech: "To wrap up: King Prithvi Narayan Shah showed us the power of vision, grit when we fail, smart strategy, and unity. Thank you! Any questions?",
        action: "Open the floor for questions from teacher and students.",
        fact: "Unity is strength (एकतामा नै बल छ)."
      }
    ];

    const current = notesData[this.currentSlide] || notesData[0];
    notesContent.innerHTML = `
      <div class="notes-block">
        <div class="notes-tag">🎤 What to say to the class:</div>
        <p class="notes-speech">"${current.speech}"</p>
      </div>

      <div class="notes-block">
        <div class="notes-tag">💡 Interactive Hook (Ask classmates):</div>
        <p class="notes-hook">${current.hook}</p>
      </div>

      <div class="notes-grid">
        <div class="notes-small-card">
          <div class="notes-tag">👆 Touch TV Action:</div>
          <p>${current.action}</p>
        </div>
        <div class="notes-small-card">
          <div class="notes-tag">⭐ Quick Fact:</div>
          <p>${current.fact}</p>
        </div>
      </div>
    `;
  }

  setupSimulations() {
    const uniteBtn = document.getElementById('toggleUniteMapBtn');
    const mapBox = document.getElementById('interactiveMapContainer');
    if (uniteBtn && mapBox) {
      uniteBtn.addEventListener('click', () => {
        const isUnified = mapBox.classList.toggle('is-unified');
        uniteBtn.innerText = isUnified ? '⏪ View 50 Fragmented Kingdoms (बाइसे र चौबिसे)' : '✨ Watch Nepal Unite (एक देश)';
        uniteBtn.classList.toggle('btn-secondary', isUnified);
        uniteBtn.classList.toggle('btn-primary', !isUnified);

        if (window.soundEngine) {
          isUnified ? window.soundEngine.playCorrect() : window.soundEngine.playClick();
        }
        if (isUnified && window.quizManager) {
          window.quizManager.spawnConfetti();
        }
      });
    }

    const bodyLangBtns = document.querySelectorAll('.pose-quiz-btn');
    bodyLangBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const isCorrect = btn.getAttribute('data-correct') === 'true';
        const resultBox = document.getElementById('poseQuizResult');

        bodyLangBtns.forEach(b => {
          b.disabled = true;
          if (b.getAttribute('data-correct') === 'true') {
            b.classList.add('is-correct');
          } else {
            b.classList.add('is-wrong');
          }
        });

        if (resultBox) {
          resultBox.classList.remove('hidden');
          if (isCorrect) {
            resultBox.className = 'interactive-notice success-notice';
            resultBox.innerHTML = `
              <strong>🎉 Exactly Right!</strong><br>
              His raised index finger stands for <strong>"One Unified Nation" (एकताको सन्देश)</strong>. It reminds us that 50 small kingdoms became one strong family!
            `;
            if (window.soundEngine) window.soundEngine.playCorrect();
            if (window.quizManager) window.quizManager.spawnConfetti();
          } else {
            resultBox.className = 'interactive-notice info-notice';
            resultBox.innerHTML = `
              <strong>💡 Good try!</strong> The real meaning is <strong>"One Unified Nation" (हामी सबै एक हौँ)</strong>. It symbolizes unity across all of Nepal!
            `;
            if (window.soundEngine) window.soundEngine.playWrong();
          }
        }
      });
    });

    const kirtipurTabs = document.querySelectorAll('.attempt-tab-btn');
    const attemptCards = document.querySelectorAll('.attempt-detail-card');
    kirtipurTabs.forEach(tab => {
      tab.addEventListener('click', () => {
        const target = tab.getAttribute('data-target');
        kirtipurTabs.forEach(t => t.classList.remove('active'));
        attemptCards.forEach(c => c.classList.remove('active'));

        tab.classList.add('active');
        const activeCard = document.getElementById(target);
        if (activeCard) activeCard.classList.add('active');
        if (window.soundEngine) window.soundEngine.playClick();
      });
    });

    const hornetBtn = document.getElementById('triggerHornetBtn');
    const ambushResult = document.getElementById('ambushResultBox');
    if (hornetBtn && ambushResult) {
      hornetBtn.addEventListener('click', () => {
        ambushResult.classList.remove('hidden');
        if (window.soundEngine) {
          window.soundEngine.playHornets();
          setTimeout(() => window.soundEngine.playCorrect(), 350);
        }
        if (window.quizManager) window.quizManager.spawnConfetti();
      });
    }

    const tikaBtn = document.getElementById('triggerTikaBtn');
    const tikaResult = document.getElementById('tikaResultBox');
    if (tikaBtn && tikaResult) {
      tikaBtn.addEventListener('click', () => {
        tikaResult.classList.remove('hidden');
        if (window.soundEngine) window.soundEngine.playTikaBlessing();
        if (window.quizManager) window.quizManager.spawnConfetti();
      });
    }

    const chartTabs = document.querySelectorAll('.chart-view-tab');
    const chartPanels = document.querySelectorAll('.chart-view-panel');
    chartTabs.forEach(tab => {
      tab.addEventListener('click', () => {
        const view = tab.getAttribute('data-view');
        chartTabs.forEach(t => t.classList.remove('active'));
        chartPanels.forEach(p => p.classList.remove('active'));

        tab.classList.add('active');
        const panel = document.getElementById(`chartPanel-${view}`);
        if (panel) panel.classList.add('active');
        if (window.soundEngine) window.soundEngine.playClick();
      });
    });
  }

  flipShield(shieldEl) {
    if (!shieldEl) return;
    shieldEl.classList.toggle('flipped');
    if (window.soundEngine) window.soundEngine.playClick();
  }
}

document.addEventListener('DOMContentLoaded', () => {
  window.presentationApp = new PresentationApp();
});
