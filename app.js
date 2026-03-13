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

// ─── Init ───
function init() {
  const savedKey = localStorage.getItem('gemini_api_key');
  if (savedKey) {
    apiKey = savedKey;
    modal.classList.add('hidden');
  }

  renderCategories();
  bindEvents();
}

function bindEvents() {
  $('#api-key-submit').addEventListener('click', submitApiKey);
  apiKeyInput.addEventListener('keydown', (e) => { if (e.key === 'Enter') submitApiKey(); });
  $('#change-api-key').addEventListener('click', () => modal.classList.remove('hidden'));
  $('#btn-back-categories').addEventListener('click', showCategories);
  $('#btn-back-topics').addEventListener('click', () => showTopics(currentCategory));
}

function submitApiKey() {
  const key = apiKeyInput.value.trim();
  if (!key) { apiKeyInput.focus(); return; }
  apiKey = key;
  localStorage.setItem('gemini_api_key', key);
  modal.classList.add('hidden');
}

// ─── Navigation ───
function showCategories() {
  categoriesSection.classList.remove('hidden');
  topicsSection.classList.add('hidden');
  contentSection.classList.add('hidden');
}

function showTopics(categoryKey) {
  currentCategory = categoryKey;
  const cat = SCIENCE_DATA[categoryKey];
  categoriesSection.classList.add('hidden');
  contentSection.classList.add('hidden');
  topicsSection.classList.remove('hidden');
  topicsTitle.textContent = `${cat.icon} ${cat.name} 주제`;
  renderTopics(cat.topics, categoryKey);
}

function showContent(categoryKey, topicId) {
  currentCategory = categoryKey;
  const cat = SCIENCE_DATA[categoryKey];
  const topic = cat.topics.find(t => t.id === topicId);
  currentTopic = topic;

  categoriesSection.classList.add('hidden');
  topicsSection.classList.add('hidden');
  contentSection.classList.remove('hidden');

  contentTitle.textContent = `${topic.emoji} ${topic.title}`;
  contentBadge.textContent = `${cat.name} · ${topic.grade}`;

  loadContent(cat.name, topic);
}

// ─── Render ───
function renderCategories() {
  categoryGrid.innerHTML = '';
  for (const [key, cat] of Object.entries(SCIENCE_DATA)) {
    const div = document.createElement('div');
    div.className = 'category-card';
    div.innerHTML = `
      <div class="category-icon">${cat.icon}</div>
      <h3>${cat.name}</h3>
      <p>${cat.description}</p>
    `;
    div.addEventListener('click', () => showTopics(key));
    categoryGrid.appendChild(div);
  }
}

function renderTopics(topics, categoryKey) {
  topicGrid.innerHTML = '';
  topics.forEach(topic => {
    const div = document.createElement('div');
    div.className = 'topic-card';
    div.innerHTML = `
      <span class="topic-emoji">${topic.emoji}</span>
      <div class="topic-info">
        <h4>${topic.title}</h4>
        <p>${topic.desc} · ${topic.grade}</p>
      </div>
    `;
    div.addEventListener('click', () => showContent(categoryKey, topic.id));
    topicGrid.appendChild(div);
  });
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

  // Reset all sections to loading state
  setLoading('concept-text');
  setLoading('concept-image');
  setLoading('keypoints-text');
  setLoading('quiz-content');

  // Fire all requests in parallel
  loadConcept(categoryName, topic);
  loadImage(categoryName, topic);
  loadKeypoints(categoryName, topic);
  loadQuiz(categoryName, topic);
}

function setLoading(elementId) {
  document.getElementById(elementId).innerHTML = `
    <div class="loading-spinner"></div>
    <p class="loading-text">AI가 내용을 준비하고 있어요...</p>
  `;
}

function setError(elementId, message) {
  document.getElementById(elementId).innerHTML = `<p class="error-text">⚠️ ${message}</p>`;
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
    document.getElementById('concept-text').textContent = text;
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
    // Extract JSON from response
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
    explDiv.textContent = `💡 ${quiz.explanation}`;

    quiz.options.forEach((opt, oIndex) => {
      const btn = document.createElement('button');
      btn.className = 'quiz-option';
      btn.textContent = `${['①','②','③','④'][oIndex]} ${opt}`;
      btn.addEventListener('click', () => {
        // Disable all options in this question
        optionsDiv.querySelectorAll('.quiz-option').forEach(b => b.classList.add('disabled'));
        if (oIndex === quiz.answer) {
          btn.classList.add('correct');
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

// ─── Start ───
init();
