import z from 'zod';
import { inputSchema } from '../../schema';

export const amazonSearchInputSchema = inputSchema.extend({
  target: z.literal('amazon_search'),
  query: z.string(),
  url: z.never(),
});

export type AmazonSearchInputSchemaZodType = typeof amazonSearchInputSchema;

export type AmazonSearchInputType = z.infer<AmazonSearchInputSchemaZodType>;
