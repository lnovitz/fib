const { db } = require('@vercel/postgres');
const {
  sequences
} = require('../src/app/lib/placeholder-data.js');

async function seedSequences(client) {
  try {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
    // Create the "users" table if it doesn't exist
    const createTable = await client.sql`
      CREATE TABLE IF NOT EXISTS sequences (
        id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
        input INT NOT NULL,
        output INT NOT NULL
      );
    `;

    console.log(`Created "sequences" table`);

    // Insert data into the "sequences" table
    const insertedSequences = await Promise.all(
      sequences.map(async (sequence) => {
        return client.sql`
        INSERT INTO sequences (id, input, output)
        VALUES (${sequence.id}, ${sequence.input}, ${sequence.output})
        ON CONFLICT (id) DO NOTHING;
      `;
      }),
    );

    console.log(`Seeded ${insertedSequences.length} users`);

    return {
      createTable,
      sequences: insertedSequences,
    };
  } catch (error) {
    console.error('Error seeding users:', error);
    throw error;
  }
}

async function main() {
  const client = await db.connect();
  await seedSequences(client);

  await client.end();
}

main().catch((err) => {
  console.error(
    'An error occurred while attempting to seed the database:',
    err,
  );
});
