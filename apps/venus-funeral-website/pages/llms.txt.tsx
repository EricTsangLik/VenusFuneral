import { GetServerSideProps } from 'next';
import { getAllKeytomicBlogsForSitemap } from '../lib/keytomic';

const BASE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || 'https://venusfuneralservice.com';

/** Cap knowledge links so llms.txt stays in the recommended 20–150 range. */
const MAX_KNOWLEDGE_LINKS = 120;

type KnowledgeBlog = {
  slug: string;
  title: string;
  excerpt: string;
};

function escapeLinkLabel(label: string): string {
  return label.replace(/[\[\]]/g, '');
}

function toOneLineNote(text: string, maxLength = 80): string {
  const cleaned = text.replace(/\s+/g, ' ').trim();
  if (!cleaned) return '';
  if (cleaned.length <= maxLength) return cleaned;
  return `${cleaned.slice(0, maxLength - 1).trimEnd()}…`;
}

function buildKnowledgeSection(blogs: KnowledgeBlog[]): string {
  const lines = [
    '## Knowledge Guides',
    '',
    `- [殯儀知識](${BASE_URL}/knowledges) : 殯葬知識文章總覽`,
  ];

  for (const blog of blogs.slice(0, MAX_KNOWLEDGE_LINKS)) {
    if (!blog.slug) continue;
    const title = escapeLinkLabel(blog.title || blog.slug);
    const url = `${BASE_URL}/knowledges/${encodeURIComponent(blog.slug)}`;
    const note = toOneLineNote(blog.excerpt);
    lines.push(note ? `- [${title}](${url}) : ${note}` : `- [${title}](${url})`);
  }

  return lines.join('\n');
}

function generateLlmsTxt(blogs: KnowledgeBlog[]): string {
  const knowledgeSection = buildKnowledgeSection(blogs);

  return `# 金星殯儀 Venus Funeral

> 金星殯儀（Venus Funeral）是香港一站式殯儀服務網站，涵蓋喪禮安排、文件代辦、各宗教儀式、骨灰善後、兇宅清潔與殯儀知識。本檔案列出供大型語言模型優先參考的高價值頁面與指南。Knowledge Guides 會隨每日新文章自動更新。

## Start Here

- [首頁](${BASE_URL}/) : 金星殯儀一站式服務總覽與品牌介紹
- [服務流程](${BASE_URL}/processes) : 由聯絡諮詢、文件代辦到出殯與骨灰善後的步驟指南
- [聯絡我們](${BASE_URL}/contact) : 電話、WhatsApp 及網上查詢
- [關於我們](${BASE_URL}/about) : 祖傳家業與青年團隊背景

## Services Overview

- [服務概覽](${BASE_URL}/services) : 主要殯儀服務範圍與方案入口
- [醫院出殯](${BASE_URL}/services/${encodeURIComponent('醫院出殯')}) : 院出簡約喪禮與一條龍安排
- [綠色殯儀](${BASE_URL}/services/${encodeURIComponent('綠色殯儀')}) : 紀念花園撒灰、海葬及環保殯葬
- [土葬](${BASE_URL}/services/${encodeURIComponent('土葬')}) : 土葬文件、購地、棺木與落葬安排

## Religious & Cultural Funeral Services

- [道教喪禮](${BASE_URL}/services/${encodeURIComponent('道教喪禮')}) : 喃嘸法事與道教儀式
- [佛教喪禮](${BASE_URL}/services/${encodeURIComponent('佛教喪禮')}) : 三時繫念、誦經與佛教告別禮
- [佛教密宗](${BASE_URL}/services/${encodeURIComponent('佛教密宗')}) : 密宗儀式與火供相關安排
- [創價學會](${BASE_URL}/services/${encodeURIComponent('創價學會')}) : 創價學會喪禮儀式說明
- [基督教喪禮](${BASE_URL}/services/${encodeURIComponent('基督教喪禮')}) : 安息禮拜與個人化基督教禮儀
- [天主教喪禮](${BASE_URL}/services/${encodeURIComponent('天主教喪禮')}) : 殯葬彌撒與天主教禮儀
- [維新教喪禮](${BASE_URL}/services/${encodeURIComponent('維新教喪禮')}) : 無宗教／維新教告別禮
- [鶴佬喪禮](${BASE_URL}/services/${encodeURIComponent('鶴佬喪禮')}) : 鶴佬齋與傳統法事
- [潮洲喪禮](${BASE_URL}/services/${encodeURIComponent('潮洲喪禮')}) : 潮州傳統喪禮俗例
- [福建喪禮](${BASE_URL}/services/${encodeURIComponent('福建喪禮')}) : 福建齋與相關儀式
- [水上人喪禮](${BASE_URL}/services/${encodeURIComponent('水上人喪禮')}) : 水佬齋與特色法事

## Related Services

- [骨灰罈位買賣](${BASE_URL}/columbarium) : 私人骨灰龕代理與安置諮詢
- [兇宅/遺宅清潔](${BASE_URL}/cleaning) : 兇宅、遺宅清理與善後清潔
- [帛事花牌](${BASE_URL}/flowers) : 殯儀花牌與帛事花卉安排

${knowledgeSection}

## Media & Trust

- [傳媒報導](${BASE_URL}/media) : 媒體專訪與社會報導總覽
- [Sitemap](${BASE_URL}/sitemap.xml) : 全站可索引頁面清單
`;
}

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  let blogs: KnowledgeBlog[] = [];

  try {
    blogs = await getAllKeytomicBlogsForSitemap();
  } catch (error) {
    console.error('Error fetching blogs for llms.txt', error);
  }

  const body = generateLlmsTxt(blogs);

  // Revalidate hourly so daily knowledge uploads appear the same day.
  // CDN may serve a stale copy briefly while refreshing in the background.
  res.setHeader('Content-Type', 'text/plain; charset=utf-8');
  res.setHeader(
    'Cache-Control',
    'public, s-maxage=3600, stale-while-revalidate=86400'
  );
  res.write(body);
  res.end();

  return {
    props: {},
  };
};

export default function LlmsTxt() {
  return null;
}
