import { NextResponse } from 'next/server';

export async function GET(req) {
    // Check for authorization using the Vercel Cron Secret
    const authHeader = req.headers.get('authorization');
    if (authHeader !== `Bearer ${process.env.CRON_SECRET}`) {
        return new NextResponse('Unauthorized', { status: 401 });
    }

    // Add your scheduled job logic here
    console.log("Cron job executed successfully!");

    return NextResponse.json({ ok: true, message: 'Cron job executed successfully' });
}
