import z from 'zod';
import { inputSchema } from '../../schema';

export const subredditInputSchema = inputSchema.extend({
  target: z.literal('reddit_subreddit'),
  url: z.string().describe('The URL of the subreddit to scrape. Must be provided.'),
  query: z.never(),
});

export type SubredditInputSchemaZodType = typeof subredditInputSchema;

export type SubredditInputType = z.infer<SubredditInputSchemaZodType>;
