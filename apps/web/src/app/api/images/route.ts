import fs from 'fs';
import path from 'path';
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const file = searchParams.get('file');
  
  if (!file) {
    return new NextResponse('File not specified', { status: 400 });
  }

  try {
    // Navigate up from apps/web to the root directory
    const filePath = path.join(process.cwd(), '../../', file);
    const imageBuffer = fs.readFileSync(filePath);
    
    // Determine content type
    let contentType = 'image/jpeg';
    if (file.endsWith('.png')) contentType = 'image/png';
    if (file.endsWith('.svg')) contentType = 'image/svg+xml';
    
    return new NextResponse(imageBuffer, {
      headers: {
        'Content-Type': contentType,
        'Cache-Control': 'public, max-age=31536000, immutable',
      },
    });
  } catch (error) {
    return new NextResponse('Image not found', { status: 404 });
  }
}
