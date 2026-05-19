interface RateLimitState {
  count: number;
  windowStart: number;
}

const DEMO_LIMIT = 30;
const WINDOW_MS = 60 * 1000;
const STORAGE_KEY = "ph_rate_limit";

function getState(): RateLimitState {
  if (typeof window === "undefined") {
    return { count: 0, windowStart: Date.now() };
  }
  const raw = localStorage.getItem(STORAGE_KEY);
  if (!raw) return { count: 0, windowStart: Date.now() };

  try {
    const state = JSON.parse(raw) as RateLimitState;
    if (Date.now() - state.windowStart > WINDOW_MS) {
      return { count: 0, windowStart: Date.now() };
    }
    return state;
  } catch {
    return { count: 0, windowStart: Date.now() };
  }
}

function saveState(state: RateLimitState) {
  if (typeof window === "undefined") return;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

export function canMakeRequest(): {
  allowed: boolean;
  remaining: number;
  resetInSeconds: number;
} {
  const state = getState();
  const resetInSeconds = Math.ceil(
    (state.windowStart + WINDOW_MS - Date.now()) / 1000
  );

  if (state.count >= DEMO_LIMIT) {
    return {
      allowed: false,
      remaining: 0,
      resetInSeconds: Math.max(0, resetInSeconds),
    };
  }

  return {
    allowed: true,
    remaining: DEMO_LIMIT - state.count,
    resetInSeconds: 0,
  };
}

export function recordRequest() {
  const state = getState();
  state.count += 1;
  saveState(state);
}

export function getRateLimitResetTime(): number {
  const state = getState();
  return Math.max(0, Math.ceil((state.windowStart + WINDOW_MS - Date.now()) / 1000));
}
