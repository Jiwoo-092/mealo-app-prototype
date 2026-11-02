/**
 * 전시용 더미 데이터 (Figma 'gui 클로드가 구현할 페이지 인터렉션' 섹션 기준)
 * 실제 서비스 데이터가 아닙니다.
 */

export type KeywordId = 'relation' | 'taste' | 'health' | 'achievement' | 'discovery';

export interface Keyword {
  id: KeywordId;
  label: string; // 폴더명
  name: string; // 스티커 문구
  sticker: string; // 스티커 이미지
  /** 스티커 이미지 크기와 컴포넌트(98×110) 기준 오프셋 — Figma export 결과 기준 */
  art: { w: number; h: number; dx: number; dy: number };
}

export const KEYWORDS: Keyword[] = [
  { id: 'relation', label: '관계', name: 'Chatty Table', sticker: '/assets/sticker/relation.webp', art: { w: 98, h: 117, dx: 0, dy: -6 } },
  { id: 'taste', label: '맛', name: 'Yum!', sticker: '/assets/sticker/taste.webp', art: { w: 98, h: 110, dx: 0, dy: 0 } },
  { id: 'health', label: '건강', name: 'Feel Good Food', sticker: '/assets/sticker/health.webp', art: { w: 98, h: 111, dx: 0, dy: -4 } },
  { id: 'achievement', label: '성취감', name: 'Who Made This! (Me)', sticker: '/assets/sticker/achievement.webp', art: { w: 127, h: 133, dx: -10, dy: -11 } },
  { id: 'discovery', label: '발견', name: 'Hidden Gem', sticker: '/assets/sticker/discovery.webp', art: { w: 98, h: 110, dx: 0, dy: 0 } },
];

/** 폴라로이드 위 스티커 배치 — 238×345(M 카드) 좌표계 기준, 카드 크기에 비례해 스케일 */
export interface StickerPlacement {
  keyword: KeywordId;
  x: number;
  y: number;
  w: number; // 컴포넌트 폭 (기본 98)
}

/** burger·salmon·pasta: 홈의 하루(9/20) / a1~a6: 아카이브(키워드 폴더·캘린더) 사진 — Figma 'image archive' */
export type MealDesignId = 'burger' | 'salmon' | 'pasta' | 'a1' | 'a2' | 'a3' | 'a4' | 'a5' | 'a6';

export interface MealDesign {
  photo: string;
  photoAlt: string;
  stickers: StickerPlacement[];
}

export const MEAL_DESIGNS: Record<MealDesignId, MealDesign> = {
  burger: {
    photo: '/assets/food/meal-1.webp',
    photoAlt: '수제버거와 사과, 롤케이크가 차려진 식탁',
    stickers: [
      { keyword: 'relation', x: 152, y: 95, w: 78 },
      { keyword: 'achievement', x: 11, y: 209, w: 98 },
    ],
  },
  salmon: {
    photo: '/assets/food/meal-2.webp',
    photoAlt: '연어 스테이크와 그린빈, 감자',
    stickers: [
      { keyword: 'achievement', x: 131, y: 24, w: 98 },
      { keyword: 'health', x: 9, y: 212, w: 98 },
    ],
  },
  pasta: {
    photo: '/assets/food/meal-3.webp',
    photoAlt: '고추장 파스타 한 그릇',
    stickers: [
      { keyword: 'taste', x: 132, y: 21, w: 98 },
      { keyword: 'discovery', x: 21, y: 209, w: 98 },
    ],
  },
  // ---- 아카이브 사진 6장 (스티커 위치·키워드는 사진마다 다르게) ----
  a1: {
    photo: '/assets/food/archive-1.webp',
    photoAlt: '친구들이 함께 포크를 뻗는 햄·소시지 플래터',
    stickers: [
      { keyword: 'relation', x: 146, y: 96, w: 82 },
      { keyword: 'taste', x: 10, y: 208, w: 96 },
    ],
  },
  a2: {
    photo: '/assets/food/archive-2.webp',
    photoAlt: '야자수 잎 사이 햇살 아래 놓인 포케 볼 두 그릇과 레몬 워터',
    stickers: [
      { keyword: 'health', x: 132, y: 22, w: 96 },
      { keyword: 'discovery', x: 12, y: 210, w: 94 },
    ],
  },
  a3: {
    photo: '/assets/food/archive-3.webp',
    photoAlt: '친구들과 나눠 먹는 치킨윙·감자·튀김 플래터와 칵테일',
    stickers: [
      { keyword: 'taste', x: 8, y: 28, w: 90 },
      { keyword: 'relation', x: 140, y: 170, w: 88 },
    ],
  },
  a4: {
    photo: '/assets/food/archive-4.webp',
    photoAlt: '반숙 계란 프라이를 올린 바질 고기 덮밥',
    stickers: [
      { keyword: 'achievement', x: 128, y: 30, w: 96 },
      { keyword: 'taste', x: 10, y: 206, w: 94 },
    ],
  },
  a5: {
    photo: '/assets/food/archive-5.webp',
    photoAlt: '오렌지 주스와 함께한 포카치아 브런치 샌드위치',
    stickers: [
      { keyword: 'discovery', x: 12, y: 118, w: 86 },
      { keyword: 'taste', x: 142, y: 172, w: 90 },
    ],
  },
  a6: {
    photo: '/assets/food/archive-6.webp',
    photoAlt: '훈제 연어 브루스케타와 채소 샐러드',
    stickers: [
      { keyword: 'health', x: 12, y: 24, w: 92 },
      { keyword: 'achievement', x: 138, y: 168, w: 90 },
    ],
  },
};

export type Tempo = 'slow' | 'stable' | 'fast';
export const TEMPO_LABEL: Record<Tempo, string> = { slow: '느긋한', stable: '적당한', fast: '빠른' };

/** 밀로 한마디 — 줄 단위, 강조 구간은 { text, bg, color? } */
export type MessagePart = string | { text: string; bg: string; color?: string };

export interface Polaroid {
  id: string;
  title: string;
  /** YYYY-MM-DD */
  date: string;
  /** HH:mm */
  time: string;
  design: MealDesignId;
  keywords: KeywordId[];
  /** 스티커 배치 (없으면 사진 디자인 기본값) */
  stickers?: StickerPlacement[];
  message: MessagePart[][];
  tempo: Tempo;
  minutes: number;
  memo: string;
}

const MESSAGES: Record<MealDesignId, MessagePart[][]> = {
  burger: [
    ['오늘은 ', { text: '이야기', bg: '#FD595A', color: '#FFFFFF' }, '가 끊이지 않았네요.'],
    ['게다가 ', { text: '직접 만든 요리', bg: '#FFE481' }, '라니,'],
    ['조금 자랑스러워해도 되겠어요.'],
  ],
  salmon: [
    ['오늘은 ', { text: '몸을 생각한 한 끼', bg: '#A8F1BF' }, '였네요.'],
    ['골고루 챙겨 먹은 자신을 조금'],
    [{ text: '더 칭찬해줘도', bg: '#FFE481' }, ' 좋겠어요.'],
  ],
  pasta: [
    ['오늘은 ', { text: '새로운 레시피를 발견', bg: '#B0C4FF' }, '했네요.'],
    ['익숙한 재료인데 색다르죠. '],
    [{ text: '이런 맛있는 식사는', bg: '#FF9B6D' }, ' 오래 기억해둬요.'],
  ],
  // ---- 아카이브 사진 6장 — 사진 분위기에 맞춘 밀로 한마디 (기존과 비슷한 길이) ----
  a1: [
    ['오늘은 ', { text: '함께 나눠 먹은', bg: '#FD595A', color: '#FFFFFF' }, ' 한 끼였네요.'],
    ['접시가 비워지는 동안'],
    [{ text: '웃음은 더 채워졌을', bg: '#FF9B6D' }, ' 거예요.'],
  ],
  a2: [
    ['오늘은 ', { text: '초록빛 가득한 한 끼', bg: '#A8F1BF' }, '였네요.'],
    ['햇살에 레몬 향까지 더해져'],
    [{ text: '새로 찾은 맛집', bg: '#B0C4FF' }, '으로 기억해둬요.'],
  ],
  a3: [
    ['오늘은 ', { text: '바삭한 소리', bg: '#FF9B6D' }, '가 가득했네요.'],
    ['서로 한 입씩 건네던 순간이'],
    [{ text: '오늘의 하이라이트', bg: '#FD595A', color: '#FFFFFF' }, '였을 거예요.'],
  ],
  a4: [
    ['오늘은 ', { text: '직접 차린 한 상', bg: '#FFE481' }, '이네요.'],
    ['노른자를 톡 터뜨리는 순간'],
    [{ text: '맛있는 소리', bg: '#FF9B6D' }, '가 절로 났겠어요.'],
  ],
  a5: [
    ['오늘은 ', { text: '새로운 브런치 카페', bg: '#B0C4FF' }, '에 갔네요.'],
    ['오렌지 주스와 바삭한 빵 덕분에'],
    [{ text: '하루가 산뜻하게', bg: '#FF9B6D' }, ' 시작됐겠어요.'],
  ],
  a6: [
    ['오늘은 ', { text: '싱그러운 채소', bg: '#A8F1BF' }, '로 채웠네요.'],
    ['한 입 한 입 천천히 즐긴 만큼'],
    [{ text: '스스로를 잘 챙긴', bg: '#FFE481' }, ' 하루예요.'],
  ],
};

/** 말풍선 안 텍스트 박스 위치 (222×81 말풍선 기준, Figma) */
export const MESSAGE_BOX: Record<MealDesignId, { left: number; top: number; width: number }> = {
  burger: { left: 37, top: 14, width: 159 },
  salmon: { left: 36.8, top: 13.8, width: 158 },
  pasta: { left: 31.8, top: 13.8, width: 177 },
  a1: { left: 31.8, top: 13.8, width: 177 },
  a2: { left: 31.8, top: 13.8, width: 177 },
  a3: { left: 31.8, top: 13.8, width: 177 },
  a4: { left: 31.8, top: 13.8, width: 177 },
  a5: { left: 31.8, top: 13.8, width: 177 },
  a6: { left: 31.8, top: 13.8, width: 177 },
};

/** 평균 식사 시간 (분) — time 게이지의 파란 '평균' 호 */
export const AVG_MINUTES = 31.5;

const BASE: Record<MealDesignId, Pick<Polaroid, 'title' | 'tempo' | 'minutes' | 'memo'>> = {
  burger: { title: '친구와 신나게 만든 수제버거', tempo: 'stable', minutes: 42, memo: '' },
  salmon: { title: '건강하고 맛있는 연어 스테이크', tempo: 'stable', minutes: 42, memo: '' },
  pasta: { title: '새로운 레시피 고추장 파스타', tempo: 'fast', minutes: 16, memo: '' },
  a1: { title: '친구들과 나눠 먹은 플래터', tempo: 'slow', minutes: 58, memo: '' },
  a2: { title: '햇살 아래 상큼한 포케 볼', tempo: 'stable', minutes: 35, memo: '' },
  a3: { title: '친구들과 즐긴 치킨윙 파티', tempo: 'stable', minutes: 47, memo: '' },
  a4: { title: '정성껏 차린 바질 고기 덮밥', tempo: 'stable', minutes: 28, memo: '' },
  a5: { title: '햇살 가득한 브런치 샌드위치', tempo: 'slow', minutes: 51, memo: '' },
  a6: { title: '상큼한 연어 샐러드 브런치', tempo: 'slow', minutes: 45, memo: '' },
};

function meal(id: string, design: MealDesignId, date: string, time: string, stickers?: StickerPlacement[]): Polaroid {
  return {
    id,
    design,
    date,
    time,
    stickers,
    keywords: (stickers ?? MEAL_DESIGNS[design].stickers).map((s) => s.keyword),
    message: MESSAGES[design],
    ...BASE[design],
  };
}

/** 홈에 보이는 하루(9/20)는 Figma 순서(첫 끼 → 셋째 끼) 그대로 */
export const POLAROIDS: Polaroid[] = [
  meal('p01', 'burger', '2026-09-20', '11:30'),
  meal('p02', 'salmon', '2026-09-20', '15:15'),
  meal('p03', 'pasta', '2026-09-20', '09:27'),
  meal('p04', 'salmon', '2026-09-18', '12:40'),
  meal('p05', 'pasta', '2026-09-18', '19:10'),
  meal('p06', 'burger', '2026-09-16', '13:05'),
  meal('p07', 'pasta', '2026-09-16', '20:12'),
  meal('p08', 'salmon', '2026-09-15', '08:30'),
  meal('p09', 'pasta', '2026-09-15', '18:45'),
  meal('p10', 'salmon', '2026-09-10', '12:20'),
  meal('p11', 'burger', '2026-09-04', '11:50'),
  meal('p12', 'salmon', '2026-09-04', '13:30'),
  meal('p13', 'pasta', '2026-09-04', '19:40'),
];

/* ---------- 아카이브 ---------- */
// (오른쪽 아래 스티커는 '자세히 보기 >'를 가리지 않게 조금 위에 둔다)

/** 키워드 폴더 색 — Figma 'archive folder' (뒤 종이 2장 + 폴라로이드) */
export const FOLDER_TONES: Record<KeywordId, { back: string; mid: string; card: string }> = {
  relation: { back: '#ead6d6', mid: '#f3dada', card: '#ffd6d6' },
  taste: { back: '#e8d0bf', mid: '#f1dacb', card: '#ffe6d5' },
  health: { back: '#e4ecc9', mid: '#ebf3ce', card: '#f5ffd1' },
  achievement: { back: '#e6e2bd', mid: '#f4f0c6', card: '#fffbca' },
  discovery: { back: '#d8cbe8', mid: '#e2d9ee', card: '#ead9ff' },
};

const ARCHIVE_PHOTOS: MealDesignId[] = ['a1', 'a2', 'a3', 'a4', 'a5', 'a6'];

/**
 * 사진 기본 스티커 2장 중 한 장을 원하는 키워드로 바꾼 배치
 * (폴더 속 사진엔 그 폴더 키워드 스티커가 꼭 붙어 있게 / 캘린더는 그날 색 점의 키워드로)
 */
function withKeywords(design: MealDesignId, keywords: KeywordId[]): StickerPlacement[] {
  const base = MEAL_DESIGNS[design].stickers;
  const ks = [...keywords];
  // 기본 스티커 중 이미 원하는 키워드인 건 유지하고, 나머지 자리에 남은 키워드를 채운다
  const keep = base.map((b) => (ks.includes(b.keyword) ? b.keyword : null));
  keep.forEach((k) => k && ks.splice(ks.indexOf(k), 1));
  return base.map((b, i) => {
    const k = keep[i] ?? ks.shift() ?? b.keyword;
    return { ...b, keyword: k };
  });
}

/** 키워드 폴더 속 폴라로이드 (키워드당 6장 — 사진 6장을 한 장씩, 날짜·시간 겹치지 않게) */
const ARCHIVE_SLOTS: Record<KeywordId, [string, string][]> = {
  relation: [['2026-11-13', '19:24'], ['2026-11-08', '12:40'], ['2026-11-02', '18:05'], ['2026-10-27', '13:15'], ['2026-10-19', '20:12'], ['2026-10-11', '11:48']],
  taste: [['2026-11-12', '12:30'], ['2026-11-06', '19:40'], ['2026-10-30', '08:55'], ['2026-10-24', '18:20'], ['2026-10-15', '13:05'], ['2026-10-07', '20:35']],
  health: [['2026-11-11', '08:10'], ['2026-11-07', '12:15'], ['2026-11-04', '18:45'], ['2026-10-28', '07:50'], ['2026-10-20', '12:25'], ['2026-10-09', '19:10']],
  achievement: [['2026-11-13', '13:00'], ['2026-11-09', '19:30'], ['2026-11-03', '11:20'], ['2026-10-25', '18:50'], ['2026-10-17', '12:05'], ['2026-10-05', '20:40']],
  discovery: [['2026-11-12', '20:10'], ['2026-11-05', '13:35'], ['2026-11-01', '09:25'], ['2026-10-22', '19:55'], ['2026-10-13', '12:50'], ['2026-10-03', '18:15']],
};

const FOLDER_KEYS = Object.keys(ARCHIVE_SLOTS) as KeywordId[];

export const ARCHIVE_POLAROIDS: Polaroid[] = FOLDER_KEYS.flatMap((k, f) =>
  ARCHIVE_SLOTS[k].map(([date, time], i) => {
    // 폴더마다 사진 순서를 돌려서 폴더별로 첫 사진이 다르게
    const design = ARCHIVE_PHOTOS[(i + f) % ARCHIVE_PHOTOS.length];
    const base = MEAL_DESIGNS[design].stickers.map((s) => s.keyword);
    const other = base.find((b) => b !== k) ?? base[0];
    return meal(`a-${k}-${i + 1}`, design, date, time, withKeywords(design, [k, other]));
  }),
);

/** 폴더(키워드)별 폴라로이드 id 목록 */
export const ARCHIVE_BY_KEYWORD: Record<KeywordId, string[]> = Object.fromEntries(
  (Object.keys(ARCHIVE_SLOTS) as KeywordId[]).map((k) => [k, ARCHIVE_SLOTS[k].map((_, i) => `a-${k}-${i + 1}`)]),
) as Record<KeywordId, string[]>;

/**
 * 캘린더 — Figma 'archive: calendar' 그대로 (2026년 11월, 임의 설정한 기록 표시 유지)
 * 키워드 색: 관계 strawberry · 맛 coral · 성취감 lemon · 건강 mint · 발견 skyblue
 */
export const CALENDAR = { year: 2026, month: 11 };
export const CALENDAR_SELECTED_DAY = 14;
export const CALENDAR_DOTS: Record<number, string[]> = {
  1: ['#ff6364', '#a8f1bf', '#b0c4ff'],
  2: ['#ff9b6d', '#ff6364', '#b0c4ff'],
  3: ['#ff9b6d', '#fdff82'],
  4: ['#ff9b6d', '#a8f1bf', '#b0c4ff'],
  5: ['#a8f1bf', '#b0c4ff'],
  6: ['#ff9b6d', '#fdff82', '#b0c4ff'],
  7: ['#fdff82', '#a8f1bf', '#b0c4ff'],
  8: ['#ff6364', '#ff9b6d'],
  9: ['#ff9b6d', '#fdff82'],
  10: ['#ff9b6d', '#a8f1bf'],
  11: ['#ff6364', '#ff9b6d', '#a8f1bf'],
  12: ['#ff6364', '#b0c4ff'],
  13: ['#ff6364', '#ff9b6d', '#fdff82'],
};
/** 캘린더 점 색 → 키워드 */
const DOT_KEYWORD: Record<string, KeywordId> = {
  '#ff6364': 'relation',
  '#ff9b6d': 'taste',
  '#fdff82': 'achievement',
  '#a8f1bf': 'health',
  '#b0c4ff': 'discovery',
};

/** 끼니 시간 (아침·점심·저녁) — 날짜마다 조금씩 다르게 */
const DAY_TIMES = [
  ['08:20', '12:35', '19:10'],
  ['09:05', '13:20', '18:45'],
  ['08:45', '12:10', '20:05'],
  ['10:15', '13:50', '19:30'],
];

/** 고정 시드 난수 — 새로고침해도 같은 '랜덤' 배치 */
function seeded(n: number) {
  const x = Math.sin(n * 9301 + 49297) * 233280;
  return x - Math.floor(x);
}

/**
 * 캘린더 날짜별 폴라로이드 — 아카이브 사진 6장을 날짜마다 랜덤으로 (색 점 개수만큼 끼니)
 * 스티커는 그날 색 점의 키워드 중 랜덤 2개
 */
export const CALENDAR_POLAROIDS: Polaroid[] = Object.entries(CALENDAR_DOTS).flatMap(([dayStr, dots]) => {
  const day = Number(dayStr);
  const date = `${CALENDAR.year}-${String(CALENDAR.month).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
  const keys = dots.map((c) => DOT_KEYWORD[c]);
  const times = DAY_TIMES[day % DAY_TIMES.length];
  // 하루 안에서는 사진이 겹치지 않게 섞어서 앞에서부터
  const photos = [...ARCHIVE_PHOTOS].sort((a, b) => seeded(day * 31 + a.charCodeAt(1)) - seeded(day * 31 + b.charCodeAt(1)));
  return dots.map((_, i) => {
    const pick = [...keys].sort((a, b) => seeded(day * 7 + i * 3 + a.length) - seeded(day * 7 + i * 3 + b.length + 1));
    const two = [pick[0], pick.find((k) => k !== pick[0]) ?? pick[0]];
    return meal(`c-${dayStr.padStart(2, '0')}-${i + 1}`, photos[i], date, times[i], withKeywords(photos[i], two));
  });
});

/** 전시 기준 '오늘' (캘린더 강조용) */
export const DEMO_TODAY = '2026-09-23';
