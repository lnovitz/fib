'use server';
import { sql } from '@vercel/postgres';
import {
  Sequence
} from './definitions';

export async function getSequence(input: number) {
  try {
    const sequence = await sql`SELECT output FROM sequences WHERE input=${input}`;
    if (!sequence.rows[0]) {return 123;}
    else {return sequence.rows[0] as Sequence;}
  } catch (error) {
    console.error('Failed to fetch user:', error);
    throw new Error('Failed to fetch user.');
  }
}

export async function insertSequence(input: number, output: number) {
  try {
    await sql`
    INSERT INTO sequences (input, output)
        VALUES (${input}, ${output})
        ON CONFLICT (id) DO NOTHING;
      `;
    
  } catch (error) {
    console.error('Failed to insert sequence:', error);
    throw new Error('Failed to insert sequence.');
  }
}