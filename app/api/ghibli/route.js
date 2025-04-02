// app/api/ghibli/route.js
import { NextResponse } from 'next/server';
import { OpenAI } from 'openai';
import { Readable } from 'stream';

export async function POST(request) {
  try {
    // Parse the incoming multipart/form-data
    const formData = await request.formData();
    const image = formData.get('image');

    if (!image) {
      return NextResponse.json({ error: 'No image provided' }, { status: 400 });
    }

    // Convert the uploaded Blob to a Buffer
    const arrayBuffer = await image.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    // Create a readable stream from the buffer
    const stream = new Readable();
    stream.push(buffer);
    stream.push(null);

    // Instantiate the OpenAI client using the named export
    const openai = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY,
    });

    // Call the image editing endpoint.
    const response = await openai.imageEdits.create({
      image: stream,
      prompt: 'Turn this photo into a Studio Ghibli style artwork',
      n: 1, // generate 1 image
      size: '1024x1024', // desired output size
    });

    const generatedImageUrl = response.data.data[0].url;
    return NextResponse.json({ url: generatedImageUrl });
  } catch (error) {
    console.error('Error generating image:', error);
    return NextResponse.json(
      { error: 'Error generating image' },
      { status: 500 }
    );
  }
}
