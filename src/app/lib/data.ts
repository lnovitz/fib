import { sql } from '@vercel/postgres';
import {
  Sequence
} from './definitions';

export async function getSequence(input: number) {
  try {
    const sequence = await sql`SELECT * FROM sequences WHERE input=${input}`;
    return sequence.rows[0] as Sequence;
  } catch (error) {
    console.error('Failed to fetch user:', error);
    throw new Error('Failed to fetch user.');
  }
}

export async function insertSequence(input: number, list: number[]) {
  try {
    await sql`
    INSERT INTO sequences (input, list)
        VALUES (${input}, ${list})
        ON CONFLICT (id) DO NOTHING;
      `;
    
  } catch (error) {
    console.error('Failed to insert sequence:', error);
    throw new Error('Failed to insert sequence.');
  }
}