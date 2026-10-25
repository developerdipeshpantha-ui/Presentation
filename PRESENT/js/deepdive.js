/**
 * Deep-Dive Interactive Content Library
 * Format: Direct Key-Value Pairs (RULED BY: ### / LOCATION: ### / etc.)
 * Uses 100% real historical photographs!
 */

const DEEP_DIVE_DATA = {
  // Slide 2: Kingdoms
  "gorkha": {
    title: "Gorkha Kingdom (गोरखा राज्य)",
    subtitle: "The Hill State that Started Modern Nepal",
    image: "assets/gorkha_kingdom.jpg",
    details: [
      { label: "RULED BY", value: "King Narabhupal Shah ➔ Prithvi Narayan Shah (१७९९ वि.सं.)" },
      { label: "LOCATION", value: "Gorkha Hill Fort (गोरखा दरवार, गण्डकी प्रदेश)" },
      { label: "ARMY STRENGTH", value: "Brave Hill Warriors led by Kaji Kalu Pande" },
      { label: "KEY STATUS", value: "Small mountain kingdom with limited money & farmland" },
      { label: "BIG ACTION", value: "Modernized army with Banaras guns & started unification" }
    ],
    result: "Unified 50+ fighting states into one single sovereign Nepal!"
  },

  "kantipur": {
    title: "Kantipur (कान्तिपुर / काठमाडौं)",
    subtitle: "The Wealthiest Trading Hub of the Valley",
    image: "assets/basantapur_real.jpg",
    details: [
      { label: "RULED BY", value: "King Jaya Prakash Malla (जयप्रकाश मल्ल)" },
      { label: "LOCATION", value: "Basantapur Durbar Square (वसन्तपुर दरवार क्षेत्र)" },
      { label: "MAIN WEALTH", value: "Controlled gold & trans-Himalayan trade to Tibet (भोट)" },
      { label: "BARRIER", value: "Heavy border taxes (भन्सार) & constant conflict with Patan" },
      { label: "CONQUEST", value: "Joined Nepal on Indra Jatra 1825 BS with zero temple damage" }
    ],
    result: "Declared the national capital (राजधानी) of modern Nepal!"
  },

  "lalitpur": {
    title: "Lalitpur / Patan (पाटन / यल)",
    subtitle: "The City of Fine Arts, Metalwork & Stone Sculptures",
    image: "assets/patan_real.jpg",
    details: [
      { label: "RULED BY", value: "Six Feudal Nobles / Pradhans (छ प्रधान) & King Tej Narsingh" },
      { label: "LOCATION", value: "Patan Durbar Square (मंगलबजार, ललितपुर)" },
      { label: "FAMOUS FOR", value: "World-class bronze sculptors, artists & Buddhist viharas" },
      { label: "BARRIER", value: "Required special entry pass / passport (राहदानी) to visit" },
      { label: "SURRENDER", value: "Surrendered peacefully to Gorkhalis weeks after Kathmandu" }
    ],
    result: "All ancient art, temples, and master craftsmen were fully protected!"
  },

  "bhaktapur": {
    title: "Bhaktapur (भक्तपुर / भादगाउँ)",
    subtitle: "The Fortress City of 55-Window Palace",
    image: "assets/bhaktapur_real.jpg",
    details: [
      { label: "RULED BY", value: "Elderly King Ranajit Malla (रणजित मल्ल - मितबाबु)" },
      { label: "LOCATION", value: "Bhaktapur Durbar Square (पचपन्न झ्याले दरवार)" },
      { label: "DEFENSE", value: "Massive city gates, deep moats, and stone walls" },
      { label: "FALL YEAR", value: "1826 BS (१७६९ ई.सं.) — Last Malla kingdom to unite" },
      { label: "AFTERMATH", value: "King Ranajit Malla retired peacefully to Banaras with honor" }
    ],
    result: "Completed the full unification of Kathmandu Valley!"
  },

  "baise-chaubise": {
    title: "50+ Fractured States (बाइसे र चौबिसे राज्य)",
    subtitle: "The Divided Hills Before Modern Nepal",
    image: "assets/kirtipur_real.jpg",
    details: [
      { label: "WESTERN HILLS", value: "22 Baise Kingdoms in Karnali region (जुम्ला, डोटी, आदि)" },
      { label: "CENTRAL HILLS", value: "24 Chaubise Kingdoms in Gandaki (पाल्पा, तनहुँ, लमजुङ, कास्की)" },
      { label: "DAILY LIFE", value: "Citizens needed passports to walk between neighboring hills" },
      { label: "BIG DANGER", value: "British East India Company was waiting to swallow small kingdoms" },
      { label: "SOLUTION", value: "One strong united national army to protect independence" }
    ],
    result: "Divided they were vulnerable; united Nepal became unbreakable!"
  },

  // Slide 3: Statue Pose
  "finger-pose": {
    title: "The Iconic Statue Pose (एकताको प्रतीक)",
    subtitle: "Chandragiri Hills, Kathmandu Valley",
    image: "assets/king_prithvi.jpg",
    details: [
      { label: "INDEX FINGER", value: "'One Unified Nation' (हामी सबै एक हौँ) — Not 'Number 1 King'" },
      { label: "LOCATION", value: "Chandragiri Hills (चन्द्रागिरि) overlooking Kathmandu Valley" },
      { label: "CORONATION", value: "1799 BS (1743 AD) at age 20 in Gorkha Kingdom" },
      { label: "CROWN & DRESS", value: "Traditional royal pagari crown & warrior khukuri at belt" },
      { label: "CORE MESSAGE", value: "'Four Varnas and Thirty-Six Castes' united as one family" }
    ],
    result: "Reminds every Nepali citizen that unity across diversity is our greatest strength!"
  },

  // Slide 4: Nuwakot Cards (Each with Distinct Authentic Photos)
  "nuwakot-fail": {
    title: "1. First Try Failed (पहिलो आक्रमण - १८०० वि.सं.)",
    subtitle: "The Hard Lesson at Nuwakot",
    image: "assets/nuwakot_valley_fail.jpg",
    details: [
      { label: "DATE", value: "1800 BS (1743 AD) — First military campaign as young 20-yr-old King" },
      { label: "TARGET", value: "Nuwakot Fort (नुवाकोट गढी) on high hill ridge" },
      { label: "DEFENSE", value: "Commanded by Jayant Rana with strong artillery advantage" },
      { label: "RETREAT", value: "Gorkhali troops forced back across Trishuli River" },
      { label: "KING'S REACTION", value: "Did not quit! Realized bravery needs modern weapons & tactics" }
    ],
    result: "Turned painful failure into the foundation for future military modernization!"
  },

  "banaras-trip": {
    title: "2. Trip to Banaras (बनारस यात्रा र आधुनिक हतियार)",
    subtitle: "Procuring Flintlock Muskets & Blacksmiths",
    image: "assets/varanasi_real.jpg",
    details: [
      { label: "LOCATION", value: "Varanasi / Kashi (बनारस, भारत) on the banks of Ganges" },
      { label: "WEAPONS BOUGHT", value: "Modern European flintlock muskets (तोप र बन्दुक) & gunpowder" },
      { label: "EXPERTS HIRED", value: "Master gunsmiths & blacksmiths (Sheikh Zorawar & Mohammad Taqi)" },
      { label: "LOCAL FACTORIES", value: "Established weapon foundries directly in Gorkha for self-reliance" },
      { label: "NEW TACTIC", value: "Trained hill soldiers in fast reloading and coordinated mountain volley fire" }
    ],
    result: "Gorkha became technologically equal to foreign armies without relying on outside imports!"
  },

  "army-training": {
    title: "3. Army Training & Merit (सेना तालिम र काजी कालु पाण्डे)",
    subtitle: "Choosing Leaders by Skill, Not Royalty",
    image: "assets/flintlock_musket.jpg",
    details: [
      { label: "COMMANDER", value: "Kaji Kalu Pande (कालु पाण्डे) — selected by public consensus" },
      { label: "INCLUSIVE FORCE", value: "Magar, Gurung, Chhetri, Brahmin, Kami, Damai all fought together" },
      { label: "FIREARMS", value: "Trained soldiers in rapid flintlock musket volley fire" },
      { label: "SALARY & CODE", value: "Strict rules: Zero civilian harm; guaranteed land pensions (जागिर/जग्गा)" },
      { label: "MOUNTAIN COMMS", value: "Fast runners (दूत) and smoke signals between mountain peaks" }
    ],
    result: "Created the most disciplined, fearless mountain fighting force in Asian history!"
  },

  "nuwakot-win": {
    title: "4. Victory at Nuwakot (नुवाकोट विजय - १८०१ वि.सं.)",
    subtitle: "Opening the Golden Door to the Valley",
    image: "assets/nuwakot_palace_win.jpg",
    details: [
      { label: "DATE", value: "Ashwin 15, 1801 BS (October 1744 AD) — Just 1 year after defeat!" },
      { label: "ATTACK PLAN", value: "Midnight crossing of Trishuli River; 3-pronged surprise assault" },
      { label: "FORTS WON", value: "Kaji Kalu Pande captured Mahamandal, Dharampani & Saat Talle Durbar" },
      { label: "TRADE ROUTE", value: "Captured the golden trade corridor to Tibet (भोट)" },
      { label: "HISTORIC RESULT", value: "Proved modern training and grit could conquer fortified hill positions" }
    ],
    result: "Secured the northern gateway and began the irreversible unification of modern Nepal!"
  },

  // Slide 5: Kirtipur & Kalu Pande
  "kalu-pande-shield": {
    title: "Commander Kalu Pande (काजी कालु पाण्डे)",
    subtitle: "Sacrifice at the Battle of Balkhu (1814 BS)",
    image: "assets/kalu_pande_real.jpg",
    details: [
      { label: "HERO", value: "Kaji Kalu Pande (कालु पाण्डे) — Chief Army Commander of Gorkha" },
      { label: "BATTLE", value: "First Battle of Kirtipur (कीर्तिपुर, १८१४ वि.सं.)" },
      { label: "OBSTACLE", value: "Steep natural cliffs & fierce stone-throwing defenders" },
      { label: "SACRIFICE", value: "Kalu Pande died fighting bravely on the frontline" },
      { label: "KING'S LESSON", value: "Switched from brute-force climbing to patient 6-month blockade" }
    ],
    result: "Kirtipur surrendered peacefully in 1822 BS without further bloodshed!"
  },

  "kirtipur-battle2": {
    title: "Battle 2: Brother Wounded (सुरप्रताप शाह घाइते)",
    subtitle: "Second Attack on Kirtipur (1821 BS)",
    image: "assets/kirtipur_swords.jpg",
    details: [
      { label: "DATE", value: "1821 BS (1764 AD) — Second campaign against Kirtipur" },
      { label: "COMMANDER", value: "Prince Surpratap Shah (सुरप्रताप शाह), King's younger brother" },
      { label: "INJURY", value: "Surpratap Shah lost one eye from a stone sling attack" },
      { label: "DEFENSE", value: "Kirtipur defenders threw rocks, boiling oil, and used slings" },
      { label: "RESULT", value: "Gorkhalis retreated again; King refused to give up" }
    ],
    result: "Two defeats only made the King more patient and smarter in strategy!"
  },

  "kirtipur-battle3": {
    title: "Battle 3: The Smart Blockade (आर्थिक नाकाबन्दी)",
    subtitle: "Peaceful Victory Through Patience (1822 BS)",
    image: "assets/kirtipur_real.jpg",
    details: [
      { label: "DATE", value: "1822 BS (1765 AD) — Third and final campaign" },
      { label: "STRATEGY", value: "No more climbing! Surrounded the hill from all sides instead" },
      { label: "BLOCKADE", value: "Cut off ALL food, salt, and trade supplies for 6 months" },
      { label: "SURRENDER", value: "Starving Kirtipur surrendered peacefully without more fighting" },
      { label: "LESSON", value: "Brain beats muscle — smart tactics save lives on both sides" }
    ],
    result: "Won the hardest fortress without climbing a single rock the third time!"
  },

  // Slide 6: Makwanpur
  "makwanpur-gadhi": {
    title: "Makwanpur Fort (मकवानपुर गढी विजय)",
    subtitle: "Crushing Bengal Nawab's Invasion (1819 BS)",
    image: "assets/makwanpur_real.jpg",
    details: [
      { label: "DATE", value: "1819 BS (1762 AD) — Southern border gateway" },
      { label: "INVADER", value: "General Gurgin Khan (गुर्गिन खाँ) with Bengal Nawab's army" },
      { label: "ENEMY FORCE", value: "Thousands of trained troops with heavy cannons" },
      { label: "GORKHALI TACTIC", value: "Night uphill ambush & rolling giant boulders down slopes" },
      { label: "PRIZE CAPTURED", value: "Captured enemy cannons, guns, and secured Terai trade" }
    ],
    result: "Proved Gorkhalis could defeat foreign armies twice their size!"
  },

  // Slide 7: Sindhuli Gadhi
  "sindhuli-gadhi": {
    title: "Battle of Sindhuli Gadhi (सिन्धुली गढी)",
    subtitle: "Defeating British East India Company (1824 BS)",
    image: "assets/sindhuli_real.jpg",
    details: [
      { label: "DATE", value: "1824 BS (1767 AD)" },
      { label: "BRITISH GENERAL", value: "Captain George Kinloch (क्याप्टेन किन्लोक)" },
      { label: "BRITISH FORCE", value: "2,400 troops with modern British flintlock rifles" },
      { label: "SECRET WEAPON", value: "Wild cliff hornet nests (भिर मौरी) thrown into narrow gorge!" },
      { label: "RESULT", value: "British fled in panic; Gorkhalis captured 500+ British rifles" }
    ],
    result: "Prevented Nepal from becoming a British colony!"
  },

  // Slide 8: Kumari Tika
  "kumari-tika": {
    title: "Living Goddess Kumari's Blessing (कुमारी टिका)",
    subtitle: "Peaceful Entry During Indra Jatra (1825 BS)",
    image: "assets/kumari_real.jpg",
    details: [
      { label: "DATE", value: "September 25, 1768 AD (1825 BS / १८२५ वि.सं.)" },
      { label: "FESTIVAL", value: "Indra Jatra Chariot Festival (इन्द्रजात्रा रथयात्रा)" },
      { label: "METHOD", value: "Quiet, peaceful entry with virtually ZERO civilian harm" },
      { label: "HOLY ACT", value: "King Prithvi knelt before Living Goddess Kumari at Kumari Ghar" },
      { label: "BLESSING", value: "Goddess Kumari put the royal vermilion Tika on his forehead" }
    ],
    result: "Won the deep respect and love of the Newari people of Kathmandu!"
  },

  // Slide 9: Capital
  "valley-capital": {
    title: "Birth of Modern Capital (काठमाडौं राजधानी)",
    subtitle: "Unification of Valley Complete (1826 BS)",
    image: "assets/basantapur_real.jpg",
    details: [
      { label: "DATE", value: "1826 BS (1769 AD) — Fall of Bhaktapur" },
      { label: "MALLA ERA", value: "Ended 600 years of Malla dynasty with honor" },
      { label: "KING RANAJIT", value: "King Ranajit Malla retired peacefully to Banaras" },
      { label: "CAPITAL", value: "Kathmandu established as permanent capital of sovereign Nepal" },
      { label: "COINAGE", value: "Issued pure silver Mohar coins (महेन्द्रमल्ली)" }
    ],
    result: "Nepal emerged as a recognized sovereign nation on the world map!"
  },

  "valley-bhaktapur": {
    title: "Fall of Bhaktapur (भक्तपुर पतन - १८२६ वि.सं.)",
    subtitle: "Last Malla Kingdom Joins United Nepal",
    image: "assets/bhaktapur_real.jpg",
    details: [
      { label: "DATE", value: "1826 BS (1769 AD) — Final unification step" },
      { label: "KING", value: "Elderly King Ranajit Malla (रणजित मल्ल)" },
      { label: "DEFENSE", value: "55-Window Palace, stone walls, deep moats" },
      { label: "PATAN", value: "Lalitpur Patan surrendered peacefully weeks earlier" },
      { label: "HONOUR", value: "King Ranajit retired to Banaras with full royal honors" }
    ],
    result: "All three Malla kingdoms unified — Kathmandu Valley became one for the first time!"
  },

  // Slide 10: Divya Upadesh
  "divya-yam": {
    title: "A Yam Between Two Boulders (दुई ढुङ्गाबीचको तरुल)",
    subtitle: "Non-Aligned Foreign Policy Doctrine",
    image: "assets/himalayas_real.jpg",
    details: [
      { label: "QUOTE", value: "'नेपाल दुई ढुङ्गाबीचको तरुल जस्तै हो'" },
      { label: "NORTH BOULDER", value: "Tibet / China (उत्तरी छिमेकी)" },
      { label: "SOUTH BOULDER", value: "British East India Company / India (दक्षिणी छिमेकी)" },
      { label: "STRATEGY", value: "Maintain friendship & balanced neutrality with both neighbors" },
      { label: "MODERN IMPACT", value: "Still forms the foundation of Nepal's foreign policy today" }
    ],
    result: "Diplomatic balance protects our sovereignty without foreign wars!"
  },

  "divya-garden": {
    title: "A Common Flower Garden (साझा फूलबारी)",
    subtitle: "Unity Across All Cultures and Castes",
    image: "assets/nepal_culture_real.jpg",
    details: [
      { label: "QUOTE", value: "'यो राज्य सबै जातको साझा फूलबारी हो'" },
      { label: "PRINCIPLE", value: "Four Varnas and Thirty-Six Castes (चार वर्ण छत्तिस जात)" },
      { label: "VISION", value: "Every culture, language, and caste is an equal flower in one garden" },
      { label: "GOVERNANCE", value: "Recruited leaders based on character & skill, not caste" },
      { label: "MODERN IMPACT", value: "Promotes secular harmony, equality, and mutual respect" }
    ],
    result: "Diversity is not division; it is Nepal's greatest national beauty!"
  },

  "divya-swadeshi": {
    title: "Support Local Crafts (स्वदेशी उत्पादन)",
    subtitle: "Economic Self-Reliance & Anti-Corruption",
    image: "assets/dhaka_topi_real.jpg",
    details: [
      { label: "QUOTE", value: "'स्वदेशी खाडी कपडा लगाउनू, विदेशीलाई देशको धन लान नदिनू'" },
      { label: "INDUSTRY", value: "Support local weavers, copper mines, and Nepali blacksmiths" },
      { label: "ANTI-CORRUPTION", value: "'घूस लिन्या र घूस दिन्या दुवै राष्ट्रका शत्रु हुन्' (Bribes are treason)" },
      { label: "WEALTH", value: "Keep currency inside Nepal; do not rely on foreign imports" },
      { label: "MODERN IMPACT", value: "Precursor to 'Made in Nepal' and ethical governance" }
    ],
    result: "A self-reliant nation can never be held hostage by foreign debt!"
  }
};

class DeepDiveModalManager {
  constructor() {
    this.modal = document.getElementById('deepDiveStoryModal');
    this.closeBtn = document.getElementById('closeDeepDiveBtn');
    this.init();
  }

  init() {
    if (this.closeBtn) {
      this.closeBtn.addEventListener('click', () => this.close());
    }
    if (this.modal) {
      this.modal.addEventListener('click', (e) => {
        if (e.target === this.modal) this.close();
      });
    }
  }

  open(key) {
    const data = DEEP_DIVE_DATA[key];
    if (!data || !this.modal) return;

    const titleEl = document.getElementById('deepDiveTitle');
    const subtitleEl = document.getElementById('deepDiveSubtitle');
    const tableContainer = document.getElementById('deepDiveDetailsContainer');
    const takeawayEl = document.getElementById('deepDiveTakeaway');
    const imagePreview = document.getElementById('deepDiveImagePreview');

    if (titleEl) titleEl.innerText = data.title;
    if (subtitleEl) subtitleEl.innerText = data.subtitle;

    if (imagePreview) {
      if (data.image) {
        imagePreview.src = data.image;
        imagePreview.style.display = 'block';
      } else {
        imagePreview.style.display = 'none';
      }
    }

    if (tableContainer) {
      tableContainer.innerHTML = `
        <div class="direct-kv-grid">
          ${data.details.map(item => `
            <div class="direct-kv-row">
              <span class="direct-kv-label">${item.label}:</span>
              <span class="direct-kv-value">${item.value}</span>
            </div>
          `).join('')}
        </div>
      `;
    }

    if (takeawayEl) {
      takeawayEl.innerHTML = `<strong>🌟 BIG TAKEAWAY:</strong> ${data.result}`;
    }

    this.modal.classList.remove('hidden');
    if (window.soundEngine) window.soundEngine.playClick();
  }

  close() {
    if (!this.modal) return;
    this.modal.classList.add('hidden');
    if (window.soundEngine) window.soundEngine.playClick();
  }
}

document.addEventListener('DOMContentLoaded', () => {
  window.deepDiveManager = new DeepDiveModalManager();
});
