// ─── Science Topics Data ───
const SCIENCE_DATA = {
  physics: {
    name: '물리',
    icon: '⚡',
    description: '힘, 에너지, 파동, 전기 등',
    topics: [
      { id: 'force-motion', emoji: '🚀', title: '힘과 운동', desc: '뉴턴의 운동 법칙과 관성', grade: '중1' },
      { id: 'gravity', emoji: '🌍', title: '중력과 무게', desc: '만유인력과 질량, 무게의 차이', grade: '중1' },
      { id: 'work-energy', emoji: '💪', title: '일과 에너지', desc: '일의 원리와 에너지 전환', grade: '중2' },
      { id: 'heat-temperature', emoji: '🌡️', title: '열과 온도', desc: '열의 이동과 비열, 열팽창', grade: '중1' },
      { id: 'wave-sound', emoji: '🔊', title: '파동과 소리', desc: '파동의 성질과 소리의 전달', grade: '중2' },
      { id: 'light-reflection', emoji: '🔦', title: '빛과 반사·굴절', desc: '빛의 성질과 거울, 렌즈', grade: '중2' },
      { id: 'electricity', emoji: '🔋', title: '전기와 자기', desc: '전류, 전압, 저항과 자기장', grade: '중3' },
      { id: 'pressure', emoji: '🫧', title: '압력', desc: '기체와 액체에서의 압력', grade: '중1' },
    ]
  },
  chemistry: {
    name: '화학',
    icon: '🧪',
    description: '물질의 구성, 변화, 반응 등',
    topics: [
      { id: 'matter-states', emoji: '🧊', title: '물질의 상태 변화', desc: '고체, 액체, 기체의 변화', grade: '중1' },
      { id: 'molecule-atom', emoji: '⚛️', title: '원자와 분자', desc: '물질을 이루는 기본 입자', grade: '중2' },
      { id: 'periodic-table', emoji: '📋', title: '원소와 주기율표', desc: '원소의 분류와 주기적 성질', grade: '중2' },
      { id: 'chemical-reaction', emoji: '💥', title: '화학 반응', desc: '화학 반응식과 질량 보존', grade: '중2' },
      { id: 'acid-base', emoji: '🍋', title: '산과 염기', desc: 'pH와 중화 반응', grade: '중3' },
      { id: 'mixture-separation', emoji: '🔬', title: '혼합물의 분리', desc: '여과, 증류, 크로마토그래피', grade: '중1' },
      { id: 'ion', emoji: '➕', title: '이온', desc: '양이온, 음이온과 전해질', grade: '중3' },
      { id: 'combustion', emoji: '🔥', title: '연소와 소화', desc: '연소의 조건과 소화 원리', grade: '중1' },
    ]
  },
  biology: {
    name: '생물',
    icon: '🧬',
    description: '세포, 소화, 유전, 생태계 등',
    topics: [
      { id: 'cell-structure', emoji: '🔬', title: '세포의 구조', desc: '동물세포와 식물세포', grade: '중1' },
      { id: 'digestion', emoji: '🍽️', title: '소화와 흡수', desc: '소화 기관과 영양소의 분해', grade: '중2' },
      { id: 'circulation', emoji: '❤️', title: '순환과 혈액', desc: '심장, 혈관, 혈액의 순환', grade: '중2' },
      { id: 'respiration-excretion', emoji: '🫁', title: '호흡과 배설', desc: '기체 교환과 노폐물 제거', grade: '중2' },
      { id: 'photosynthesis', emoji: '🌿', title: '광합성', desc: '식물의 에너지 생산 과정', grade: '중1' },
      { id: 'genetics', emoji: '🧬', title: '유전과 진화', desc: '멘델의 유전 법칙과 진화', grade: '중3' },
      { id: 'nervous-system', emoji: '🧠', title: '자극과 반응', desc: '감각 기관과 신경계', grade: '중3' },
      { id: 'reproduction', emoji: '🌱', title: '생식과 발생', desc: '유성 생식과 무성 생식', grade: '중3' },
    ]
  },
  earth: {
    name: '지구과학',
    icon: '🌏',
    description: '지구, 날씨, 태양계, 우주 등',
    topics: [
      { id: 'earth-layers', emoji: '🌋', title: '지구의 구조', desc: '지각, 맨틀, 핵의 구조', grade: '중1' },
      { id: 'rocks-minerals', emoji: '💎', title: '암석과 광물', desc: '화성암, 퇴적암, 변성암', grade: '중1' },
      { id: 'plate-tectonics', emoji: '🗺️', title: '판 구조론', desc: '대륙 이동과 지진, 화산', grade: '중1' },
      { id: 'weather', emoji: '🌤️', title: '날씨와 기후', desc: '기압, 전선, 일기예보', grade: '중2' },
      { id: 'water-cycle', emoji: '💧', title: '물의 순환', desc: '증발, 응결, 강수의 과정', grade: '중2' },
      { id: 'solar-system', emoji: '🪐', title: '태양계', desc: '행성의 특징과 운동', grade: '중3' },
      { id: 'star-universe', emoji: '⭐', title: '별과 우주', desc: '별의 일생과 우주의 구조', grade: '중3' },
      { id: 'tides-seasons', emoji: '🌊', title: '조석과 계절', desc: '달의 영향과 지구의 공전', grade: '중2' },
    ]
  }
};

// ─── State ───
let apiKey = '';
let currentCategory = null;
let currentTopic = null;

// ─── DOM References ───
const $ = (sel) => document.querySelector(sel);
const modal = $('#api-key-modal');
const apiKeyInput = $('#api-key-input');
const categoryGrid = $('#category-grid');
const categoriesSection = $('.categories');
const topicsSection = $('#topics-section');
const topicsTitle = $('#topics-title');
const topicGrid = $('#topic-grid');
const contentSection = $('#content-section');
const contentTitle = $('#content-title');
const contentBadge = $('#content-badge');
const heroSection = $('#hero-section');

// ═══════════════════════════════════
// ENHANCED PARTICLE SYSTEM
// with mouse interaction & trails
// ═══════════════════════════════════
function initParticles() {
  const canvas = document.getElementById('particle-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  let particles = [];
  const PARTICLE_COUNT = 80;
  let mouse = { x: -1000, y: -1000 };
  const MOUSE_RADIUS = 180;

  function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  resize();
  window.addEventListener('resize', resize);

  // Track mouse for interactive particles
  document.addEventListener('mousemove', (e) => {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
  });

  class Particle {
    constructor() { this.reset(true); }
    reset(initial) {
      this.x = initial ? Math.random() * canvas.width : Math.random() * canvas.width;
      this.y = initial ? Math.random() * canvas.height : Math.random() * canvas.height;
      this.baseSize = Math.random() * 2 + 0.5;
      this.size = this.baseSize;
      this.speedX = (Math.random() - 0.5) * 0.4;
      this.speedY = (Math.random() - 0.5) * 0.4;
      this.baseOpacity = Math.random() * 0.5 + 0.15;
      this.opacity = this.baseOpacity;
      const r = Math.random();
      if (r < 0.33) { this.color = '99,102,241'; }
      else if (r < 0.66) { this.color = '6,182,212'; }
      else { this.color = '139,92,246'; }
      this.targetX = this.x;
      this.targetY = this.y;
    }
    update() {
      // Mouse repulsion
      const dx = this.x - mouse.x;
      const dy = this.y - mouse.y;
      const dist = Math.sqrt(dx * dx + dy * dy);

      if (dist < MOUSE_RADIUS) {
        const force = (MOUSE_RADIUS - dist) / MOUSE_RADIUS;
        const angle = Math.atan2(dy, dx);
        this.x += Math.cos(angle) * force * 3;
        this.y += Math.sin(angle) * force * 3;
        this.size = this.baseSize + force * 3;
        this.opacity = Math.min(1, this.baseOpacity + force * 0.5);
      } else {
        this.size += (this.baseSize - this.size) * 0.05;
        this.opacity += (this.baseOpacity - this.opacity) * 0.05;
      }

      this.x += this.speedX;
      this.y += this.speedY;
      if (this.x < 0 || this.x > canvas.width) this.speedX *= -1;
      if (this.y < 0 || this.y > canvas.height) this.speedY *= -1;
    }
    draw() {
      // Glow effect
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size * 3, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${this.color},${this.opacity * 0.1})`;
      ctx.fill();

      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${this.color},${this.opacity})`;
      ctx.fill();
    }
  }

  for (let i = 0; i < PARTICLE_COUNT; i++) {
    particles.push(new Particle());
  }

  function drawConnections() {
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 160) {
          const opacity = 0.08 * (1 - dist / 160);
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.strokeStyle = `rgba(99,102,241,${opacity})`;
          ctx.lineWidth = 0.6;
          ctx.stroke();
        }
      }

      // Connect to mouse if close
      const dmx = particles[i].x - mouse.x;
      const dmy = particles[i].y - mouse.y;
      const distMouse = Math.sqrt(dmx * dmx + dmy * dmy);
      if (distMouse < MOUSE_RADIUS) {
        const opacity = 0.15 * (1 - distMouse / MOUSE_RADIUS);
        ctx.beginPath();
        ctx.moveTo(particles[i].x, particles[i].y);
        ctx.lineTo(mouse.x, mouse.y);
        ctx.strokeStyle = `rgba(6,182,212,${opacity})`;
        ctx.lineWidth = 0.8;
        ctx.stroke();
      }
    }
  }

  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach(p => { p.update(); p.draw(); });
    drawConnections();
    requestAnimationFrame(animate);
  }

  animate();
}

// ═══════════════════════════════════
// RIPPLE EFFECT on buttons
// ═══════════════════════════════════
function addRipple(e) {
  const btn = e.currentTarget;
  const ripple = document.createElement('span');
  ripple.className = 'ripple';
  const rect = btn.getBoundingClientRect();
  const size = Math.max(rect.width, rect.height);
  ripple.style.width = ripple.style.height = size + 'px';
  ripple.style.left = (e.clientX - rect.left - size / 2) + 'px';
  ripple.style.top = (e.clientY - rect.top - size / 2) + 'px';
  btn.appendChild(ripple);
  ripple.addEventListener('animationend', () => ripple.remove());
}

// ═══════════════════════════════════
// STAGGER ANIMATION HELPER
// ═══════════════════════════════════
function staggerAnimate(elements, className, baseDelay = 0, increment = 80) {
  elements.forEach((el, i) => {
    setTimeout(() => {
      el.classList.add(className);
    }, baseDelay + i * increment);
  });
}

// ═══════════════════════════════════
// PAGE TRANSITION HELPERS
// ═══════════════════════════════════
function transitionOut(section) {
  return new Promise((resolve) => {
    if (!section || section.classList.contains('hidden')) {
      resolve();
      return;
    }
    section.classList.add('section-exiting');
    setTimeout(() => {
      section.classList.add('hidden');
      section.classList.remove('section-exiting');
      resolve();
    }, 250);
  });
}

function transitionIn(section) {
  section.classList.remove('hidden');
  section.classList.add('page-section');
  // Clean up class after animation
  setTimeout(() => section.classList.remove('page-section'), 600);
}

// ═══════════════════════════════════
// COUNTER ANIMATION
// ═══════════════════════════════════
function animateCounter(element, target) {
  let current = 0;
  const step = Math.ceil(target / 15);
  const interval = setInterval(() => {
    current += step;
    if (current >= target) {
      current = target;
      clearInterval(interval);
    }
    element.textContent = `${current}개 주제`;
  }, 40);
}

// ─── Init ───
function init() {
  const savedKey = localStorage.getItem('gemini_api_key');
  if (savedKey) {
    apiKey = savedKey;
    modal.classList.add('hidden');
  }

  initParticles();
  renderCategories();
  bindEvents();
}

function bindEvents() {
  const submitBtn = $('#api-key-submit');
  submitBtn.addEventListener('click', (e) => { addRipple(e); submitApiKey(); });
  apiKeyInput.addEventListener('keydown', (e) => { if (e.key === 'Enter') submitApiKey(); });
  $('#change-api-key').addEventListener('click', () => modal.classList.remove('hidden'));
  $('#btn-back-categories').addEventListener('click', () => navigateToCategories());
  $('#btn-back-topics').addEventListener('click', () => navigateToTopics(currentCategory));
}

function submitApiKey() {
  const key = apiKeyInput.value.trim();
  if (!key) {
    // Shake input
    apiKeyInput.style.animation = 'wrongShake 0.5s ease';
    apiKeyInput.addEventListener('animationend', () => { apiKeyInput.style.animation = ''; }, { once: true });
    apiKeyInput.focus();
    return;
  }
  apiKey = key;
  localStorage.setItem('gemini_api_key', key);
  // Animate modal out
  const mc = $('.modal-content');
  mc.style.animation = 'modalOut 0.3s ease forwards';
  setTimeout(() => {
    modal.classList.add('hidden');
    mc.style.animation = '';
  }, 300);
}

// Add modalOut keyframe dynamically
const styleSheet = document.createElement('style');
styleSheet.textContent = `
  @keyframes modalOut {
    to { opacity: 0; transform: scale(0.9) translateY(20px); }
  }
`;
document.head.appendChild(styleSheet);

// ─── Navigation with transitions ───
async function navigateToCategories() {
  await Promise.all([
    transitionOut(topicsSection),
    transitionOut(contentSection)
  ]);
  transitionIn(categoriesSection);
  transitionIn(heroSection);
  // Re-animate category cards
  const cards = categoryGrid.querySelectorAll('.category-card');
  cards.forEach(c => { c.style.animation = 'none'; c.offsetHeight; c.style.animation = ''; });
}

async function navigateToTopics(categoryKey) {
  currentCategory = categoryKey;
  const cat = SCIENCE_DATA[categoryKey];

  await Promise.all([
    transitionOut(categoriesSection),
    transitionOut(contentSection),
    transitionOut(heroSection)
  ]);

  topicsTitle.textContent = `${cat.icon} ${cat.name}`;
  $('#topics-desc').textContent = `${cat.description} — 학습할 주제를 선택하세요`;
  renderTopics(cat.topics, categoryKey);
  transitionIn(topicsSection);
}

async function navigateToContent(categoryKey, topicId) {
  currentCategory = categoryKey;
  const cat = SCIENCE_DATA[categoryKey];
  const topic = cat.topics.find(t => t.id === topicId);
  currentTopic = topic;

  await Promise.all([
    transitionOut(categoriesSection),
    transitionOut(topicsSection),
    transitionOut(heroSection)
  ]);

  contentTitle.textContent = `${topic.emoji} ${topic.title}`;
  contentBadge.textContent = `${cat.name} · ${topic.grade}`;

  transitionIn(contentSection);

  // Animate cards in with stagger
  const cards = contentSection.querySelectorAll('.card');
  staggerAnimate(Array.from(cards), 'animate-in', 100, 120);

  loadContent(cat.name, topic);
}

// Legacy wrappers for direct calls
function showCategories() { navigateToCategories(); }
function showTopics(key) { navigateToTopics(key); }
function showContent(key, id) { navigateToContent(key, id); }

// ─── Render ───
function renderCategories() {
  categoryGrid.innerHTML = '';
  let index = 0;
  for (const [key, cat] of Object.entries(SCIENCE_DATA)) {
    const div = document.createElement('div');
    div.className = 'category-card';
    div.setAttribute('data-category', key);
    div.innerHTML = `
      <div class="category-icon-wrap">${cat.icon}</div>
      <h3>${cat.name}</h3>
      <p>${cat.description}</p>
      <span class="category-count" data-target="${cat.topics.length}">0개 주제</span>
    `;
    div.addEventListener('click', (e) => { addRipple(e); navigateToTopics(key); });
    categoryGrid.appendChild(div);

    // Animate counter after card appears
    const countEl = div.querySelector('.category-count');
    setTimeout(() => animateCounter(countEl, cat.topics.length), 500 + index * 200);
    index++;
  }
}

function renderTopics(topics, categoryKey) {
  topicGrid.innerHTML = '';
  topics.forEach((topic, i) => {
    const div = document.createElement('div');
    div.className = 'topic-card';
    div.innerHTML = `
      <span class="topic-emoji">${topic.emoji}</span>
      <div class="topic-info">
        <h4>${topic.title}<span class="topic-grade">${topic.grade}</span></h4>
        <p>${topic.desc}</p>
      </div>
    `;
    div.addEventListener('click', (e) => { addRipple(e); navigateToContent(categoryKey, topic.id); });
    topicGrid.appendChild(div);
  });

  // Stagger animate topic cards
  const topicCards = topicGrid.querySelectorAll('.topic-card');
  staggerAnimate(Array.from(topicCards), 'animate-in', 150, 60);
}

// ─── API Calls ───
const TEXT_MODEL = 'gemini-3.1-flash-lite-preview';
const IMAGE_MODEL = 'gemini-3.1-flash-image-preview';

async function callGeminiText(prompt) {
  const url = `https://generativelanguage.googleapis.com/v1beta/models/${TEXT_MODEL}:generateContent?key=${apiKey}`;
  const res = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      contents: [{ parts: [{ text: prompt }] }],
      generationConfig: { temperature: 0.7, maxOutputTokens: 2048 }
    })
  });
  if (!res.ok) {
    const err = await res.json().catch(() => ({}));
    throw new Error(err.error?.message || `API 오류 (${res.status})`);
  }
  const data = await res.json();
  return data.candidates?.[0]?.content?.parts?.[0]?.text || '';
}

async function callGeminiImage(prompt) {
  const url = `https://generativelanguage.googleapis.com/v1beta/models/${IMAGE_MODEL}:generateContent?key=${apiKey}`;
  const res = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      contents: [{ parts: [{ text: prompt }] }],
      generationConfig: {
        responseModalities: ["TEXT", "IMAGE"]
      }
    })
  });
  if (!res.ok) {
    const err = await res.json().catch(() => ({}));
    throw new Error(err.error?.message || `이미지 API 오류 (${res.status})`);
  }
  const data = await res.json();
  const parts = data.candidates?.[0]?.content?.parts || [];
  for (const part of parts) {
    if (part.inlineData) {
      return { imageData: part.inlineData.data, mimeType: part.inlineData.mimeType };
    }
  }
  throw new Error('이미지를 생성하지 못했습니다.');
}

// ─── Content Loading ───
async function loadContent(categoryName, topic) {
  if (!apiKey) {
    modal.classList.remove('hidden');
    return;
  }

  setLoading('concept-text');
  setLoadingImage('concept-image');
  setLoading('keypoints-text');
  setLoading('quiz-content');

  loadConcept(categoryName, topic);
  loadImage(categoryName, topic);
  loadKeypoints(categoryName, topic);
  loadQuiz(categoryName, topic);
}

function setLoading(elementId) {
  document.getElementById(elementId).innerHTML = `
    <div class="skeleton-loader">
      <div class="skeleton-line w100"></div>
      <div class="skeleton-line w90"></div>
      <div class="skeleton-line w95"></div>
      <div class="skeleton-line w80"></div>
      <div class="skeleton-line w85"></div>
    </div>
  `;
}

function setLoadingImage(elementId) {
  document.getElementById(elementId).innerHTML = `
    <div class="image-placeholder">
      <div class="loading-pulse"></div>
      <p>AI가 이미지를 생성하고 있습니다</p>
    </div>
  `;
}

function setError(elementId, message) {
  document.getElementById(elementId).innerHTML = `<p class="error-text">${message}</p>`;
}

async function loadConcept(categoryName, topic) {
  try {
    const prompt = `당신은 중학교 과학 선생님입니다. "${topic.title}" (${categoryName} 분야, ${topic.grade} 수준)에 대해 중학생이 이해하기 쉽게 설명해주세요.

다음 형식으로 작성하세요:
1. 먼저 일상생활에서 볼 수 있는 예시로 시작하세요
2. 핵심 개념을 쉬운 말로 설명하세요
3. 비유나 예시를 활용하세요
4. 중요한 용어는 간단히 정의하세요

4~6 문단으로 작성하고, 존댓말로 친근하게 설명해주세요. 마크다운 서식 없이 일반 텍스트로만 작성하세요.`;

    const text = await callGeminiText(prompt);
    const el = document.getElementById('concept-text');
    el.textContent = text;
    el.classList.add('text-revealed');
  } catch (e) {
    setError('concept-text', e.message);
  }
}

async function loadImage(categoryName, topic) {
  try {
    const prompt = `Create a clear, colorful educational diagram or illustration about "${topic.title}" (${topic.desc}) for middle school science class. The image should be visually appealing, use labels in Korean, and help students understand the concept. Use a clean, modern infographic style with bright colors.`;

    const result = await callGeminiImage(prompt);
    const img = document.createElement('img');
    img.src = `data:${result.mimeType};base64,${result.imageData}`;
    img.alt = `${topic.title} 개념 이미지`;
    const caption = document.createElement('p');
    caption.className = 'image-caption';
    caption.textContent = `AI가 생성한 "${topic.title}" 개념 이미지`;
    const container = document.getElementById('concept-image');
    container.innerHTML = '';
    container.appendChild(img);
    container.appendChild(caption);
  } catch (e) {
    setError('concept-image', e.message);
  }
}

async function loadKeypoints(categoryName, topic) {
  try {
    const prompt = `"${topic.title}" (${categoryName}, ${topic.grade} 수준)의 핵심 내용을 중학생이 시험 공부할 때 참고할 수 있도록 정리해주세요.

정확히 5~7개의 핵심 포인트를 작성하세요.
각 포인트는 한 줄로 간결하게 작성하세요.
각 줄 앞에 "- "를 붙여주세요.
마크다운 서식 없이 작성하세요.`;

    const text = await callGeminiText(prompt);
    const points = text.split('\n').filter(line => line.trim().startsWith('-') || line.trim().startsWith('•'));
    if (points.length === 0) {
      document.getElementById('keypoints-text').textContent = text;
      return;
    }
    const ul = document.createElement('ul');
    points.forEach(p => {
      const li = document.createElement('li');
      li.textContent = p.replace(/^[-•]\s*/, '').trim();
      ul.appendChild(li);
    });
    const container = document.getElementById('keypoints-text');
    container.innerHTML = '';
    container.appendChild(ul);

    // Stagger animate keypoints
    const items = container.querySelectorAll('li');
    staggerAnimate(Array.from(items), 'animate-in', 100, 100);
  } catch (e) {
    setError('keypoints-text', e.message);
  }
}

async function loadQuiz(categoryName, topic) {
  try {
    const prompt = `"${topic.title}" (${categoryName}, ${topic.grade})에 대한 객관식 문제 2개를 만들어주세요.

반드시 다음 JSON 형식으로만 응답하세요. 다른 텍스트는 포함하지 마세요:
[
  {
    "question": "문제 내용",
    "options": ["선택지1", "선택지2", "선택지3", "선택지4"],
    "answer": 0,
    "explanation": "정답 해설"
  }
]

answer는 정답의 인덱스(0~3)입니다. 중학생 수준에 맞는 문제를 만드세요.`;

    const text = await callGeminiText(prompt);
    const jsonMatch = text.match(/\[[\s\S]*\]/);
    if (!jsonMatch) throw new Error('퀴즈를 생성하지 못했습니다.');

    const quizzes = JSON.parse(jsonMatch[0]);
    renderQuiz(quizzes);
  } catch (e) {
    setError('quiz-content', e.message);
  }
}

function renderQuiz(quizzes) {
  const container = document.getElementById('quiz-content');
  container.innerHTML = '';

  quizzes.forEach((quiz, qIndex) => {
    if (qIndex > 0) {
      const sep = document.createElement('hr');
      sep.className = 'quiz-separator';
      container.appendChild(sep);
    }

    const qDiv = document.createElement('div');
    qDiv.className = 'quiz-item';

    const qText = document.createElement('p');
    qText.className = 'quiz-question';
    qText.textContent = `Q${qIndex + 1}. ${quiz.question}`;
    qDiv.appendChild(qText);

    const optionsDiv = document.createElement('div');
    optionsDiv.className = 'quiz-options';

    const explDiv = document.createElement('div');
    explDiv.className = 'quiz-explanation';
    explDiv.textContent = quiz.explanation;

    quiz.options.forEach((opt, oIndex) => {
      const btn = document.createElement('button');
      btn.className = 'quiz-option';
      btn.textContent = `${['A','B','C','D'][oIndex]}.  ${opt}`;
      btn.addEventListener('click', () => {
        optionsDiv.querySelectorAll('.quiz-option').forEach(b => b.classList.add('disabled'));
        if (oIndex === quiz.answer) {
          btn.classList.add('correct');
          // Spawn confetti particles
          spawnConfetti(btn);
        } else {
          btn.classList.add('wrong');
          optionsDiv.children[quiz.answer].classList.add('correct');
        }
        explDiv.classList.add('visible');
      });
      optionsDiv.appendChild(btn);
    });

    qDiv.appendChild(optionsDiv);
    qDiv.appendChild(explDiv);
    container.appendChild(qDiv);
  });
}

// ═══════════════════════════════════
// CONFETTI on correct answer
// ═══════════════════════════════════
function spawnConfetti(element) {
  const rect = element.getBoundingClientRect();
  const centerX = rect.left + rect.width / 2;
  const centerY = rect.top + rect.height / 2;
  const colors = ['#22c55e', '#6366f1', '#06b6d4', '#f59e0b', '#8b5cf6', '#ec4899'];

  for (let i = 0; i < 24; i++) {
    const particle = document.createElement('div');
    particle.style.cssText = `
      position: fixed;
      width: ${Math.random() * 8 + 4}px;
      height: ${Math.random() * 8 + 4}px;
      background: ${colors[Math.floor(Math.random() * colors.length)]};
      border-radius: ${Math.random() > 0.5 ? '50%' : '2px'};
      left: ${centerX}px;
      top: ${centerY}px;
      pointer-events: none;
      z-index: 9999;
    `;
    document.body.appendChild(particle);

    const angle = (Math.PI * 2 * i) / 24 + (Math.random() - 0.5);
    const velocity = Math.random() * 120 + 60;
    const tx = Math.cos(angle) * velocity;
    const ty = Math.sin(angle) * velocity - 40;
    const rotation = Math.random() * 720 - 360;

    particle.animate([
      { transform: 'translate(0, 0) rotate(0deg) scale(1)', opacity: 1 },
      { transform: `translate(${tx}px, ${ty + 80}px) rotate(${rotation}deg) scale(0)`, opacity: 0 }
    ], {
      duration: 800 + Math.random() * 400,
      easing: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
    }).onfinish = () => particle.remove();
  }
}

// ─── Start ───
init();
