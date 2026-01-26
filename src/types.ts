export type DecodoConfig = {
  username: string;
  password: string;
};

export type ScraperApiResponse = {
  results: ScraperApiResult[];
};

export type ScraperApiResult = {
  content: string;
  headers?: Record<string, string>;
  cookies?: Record<string, string>[];
  status_code: number;
  task_id: string;
  created_at: string;
  updated_at: string;
};
