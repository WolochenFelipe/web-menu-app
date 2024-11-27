import { PutObjectCommand, S3Client } from '@aws-sdk/client-s3';
import { getSignedUrl } from '@aws-sdk/s3-request-presigner';
import { NextApiRequest, NextApiResponse } from 'next';
import { NextRequest, NextResponse } from 'next/server';

const accountId = process.env.CLOUDFLARE_ACCOUNT_ID

const client = new S3Client({
    endpoint: `https://${accountId}.r2.cloudflarestorage.com`,
    region: 'auto',
    credentials: {
        accessKeyId: process.env.AWS_ACCESS_KEY_ID!,
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY!,
    }
})

export async function POST(request: NextRequest) {
    const { key } = await request.json(); // key pode ser o nome da imagem

    if (!key) {
        return NextResponse.json({ error: 'File key is required.' }, { status: 400 })
    }

    const signedUrl = await getSignedUrl(client, new PutObjectCommand({
        Bucket: process.env.AWS_BUCKET_NAME,
        Key: key
    }), {
        expiresIn: 60 // URL válida por 1 minuto
    })

    return NextResponse.json({ signedUrl }, { status: 200 })
}