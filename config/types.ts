export type TagType = {
  slug: string;
  title: string;
  description?: string;
  content?: string;
};

export type VideoType = {
  slug: string;
  title: string;
  description: string;
  content?: string;
  timestamp: string;
  youtube_id?: string;
  viemo_id?: string;
  tags: TagType[];
  viewedAt?: number;
  conference?: string;
};
