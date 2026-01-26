import z from 'zod';
import { inputSchema } from '../../schema';

export const googleSearchInputSchema = inputSchema.extend({
  target: z.literal('google_search'),
  query: z.string(),
  url: z.never(),
});

export type GoogleSearchInputSchemaZodType = typeof googleSearchInputSchema;

export type GoogleSearchInputType = z.infer<GoogleSearchInputSchemaZodType>;
