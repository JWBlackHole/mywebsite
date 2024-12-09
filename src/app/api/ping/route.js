import clientPromise from '../../../../lib/mongodb';

export async function GET(request) {
  try {
    const client = await clientPromise;
    const db = client.db('admin');
    console.log("Try to Connect to MongoDB...");
    await db.command({ ping: 1 });
    console.log('Pinged your deployment. You successfully connected to MongoDB!');

    return new Response(JSON.stringify({ success: true, message: 'Connected to MongoDB!' }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    return new Response(JSON.stringify({ success: false, message: 'Failed to connect to MongoDB.' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
