// AI Crawler Tracking
// Detects and logs hits from AI crawlers like ClaudeBot, GPTBot, etc.

const AI_CRAWLERS = [
  { name: 'ClaudeBot', pattern: /claudebot/i },
  { name: 'GPTBot', pattern: /gptbot/i },
  { name: 'ChatGPT-User', pattern: /chatgpt-user/i },
  { name: 'Google-Extended', pattern: /google-extended/i },
  { name: 'PerplexityBot', pattern: /perplexitybot/i },
  { name: 'Bytespider', pattern: /bytespider/i },
  { name: 'CCBot', pattern: /ccbot/i },
  { name: 'anthropic-ai', pattern: /anthropic-ai/i },
  { name: 'Amazonbot', pattern: /amazonbot/i },
  { name: 'FacebookBot', pattern: /facebookexternalhit/i },
  { name: 'Applebot-Extended', pattern: /applebot/i },
  { name: 'cohere-ai', pattern: /cohere-ai/i },
];

export interface CrawlerHit {
  timestamp: string;
  crawler: string;
  path: string;
  userAgent: string;
}

export interface CrawlerStats {
  site: string;
  period: string;
  totalHits: number;
  byCrawler: Record<string, number>;
  byPath: Record<string, number>;
  recentHits: CrawlerHit[];
}

// In-memory store (resets on deploy, but that's fine for daily tracking)
const hits: CrawlerHit[] = [];
const MAX_HITS = 1000; // Keep last 1000 hits in memory

export function detectCrawler(userAgent: string): string | null {
  if (!userAgent) return null;
  for (const crawler of AI_CRAWLERS) {
    if (crawler.pattern.test(userAgent)) {
      return crawler.name;
    }
  }
  return null;
}

export function logCrawlerHit(crawler: string, path: string, userAgent: string) {
  const hit: CrawlerHit = {
    timestamp: new Date().toISOString(),
    crawler,
    path,
    userAgent,
  };
  hits.push(hit);
  
  // Keep only last MAX_HITS
  if (hits.length > MAX_HITS) {
    hits.shift();
  }
  
  console.log(`[AI Crawler] ${crawler} hit ${path}`);
}

export function getStats(hours: number = 24): CrawlerStats {
  const cutoff = new Date(Date.now() - hours * 60 * 60 * 1000);
  const recentHits = hits.filter(h => new Date(h.timestamp) >= cutoff);
  
  const byCrawler: Record<string, number> = {};
  const byPath: Record<string, number> = {};
  
  for (const hit of recentHits) {
    byCrawler[hit.crawler] = (byCrawler[hit.crawler] || 0) + 1;
    byPath[hit.path] = (byPath[hit.path] || 0) + 1;
  }
  
  return {
    site: 'willmclemore.com',
    period: `${hours} hours`,
    totalHits: recentHits.length,
    byCrawler,
    byPath,
    recentHits: recentHits.slice(-50), // Last 50 hits
  };
}
