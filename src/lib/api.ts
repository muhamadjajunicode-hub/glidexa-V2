export const CMS_API_URL =
  import.meta.env.PUBLIC_CMS_API_URL || 'https://glidexa-cms-api.muhamadjajuni-code.workers.dev';

export interface Article {
  id: number;
  title: string;
  slug: string;
  excerpt: string | null;
  content?: string;
  thumbnail_url: string | null;
  published_at: string;
  category: string | null;
}

export async function getPublishedArticles(): Promise<Article[]> {
  try {
    const res = await fetch(`${CMS_API_URL}/api/articles`);
    if (!res.ok) return [];
    const data = await res.json();
    return data.success ? data.data : [];
  } catch {
    return [];
  }
}

export async function getArticleBySlug(slug: string): Promise<Article | null> {
  try {
    const res = await fetch(`${CMS_API_URL}/api/articles/${slug}`);
    if (!res.ok) return null;
    const data = await res.json();
    return data.success ? data.data : null;
  } catch {
    return null;
  }
}

export interface Campaign {
  id: number;
  name: string;
  badge: string;
  banner_text: string;
  start_date: string;
  end_date: string;
  tag_discount?: string | null;
  monthly_price: string;
  six_month_price: string;
  yearly_price: string;
  whatsapp_message?: string | null;
  is_active: boolean;
}

export async function getActiveCampaign(): Promise<Campaign | null> {
  try {
    const res = await fetch(`${CMS_API_URL}/api/campaigns/active`);
    if (!res.ok) return null;
    const data = await res.json();
    return data.success ? data.data : null;
  } catch {
    return null;
  }
}


