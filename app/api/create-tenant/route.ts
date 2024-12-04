// app/api/create-tenant/route.ts
import { NextRequest, NextResponse } from 'next/server'
import prisma from '@/lib/prisma'
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server"
import { menuSchema } from '@/app/components/create-menu'

export async function POST(request: NextRequest) {

  const { getUser } = getKindeServerSession()
  const kindeUser = await getUser()

  try {
    const formData = await request.formData()
    const { name, subdomain, image } = Object.fromEntries(formData) as menuSchema

    let userRec = await prisma.user.findUnique({
      where: { kindeId: kindeUser.id }
    })

    if (!userRec || !userRec.id) {
      return NextResponse.json({ error: 'User not found' }, { status: 404 });
    }

    if (!name || !subdomain) {
      return NextResponse.json({ error: 'Name and subdomain are required' }, { status: 400 })
    }

    if (!image) {
      return NextResponse.json({ error: 'Image is required' }, { status: 400 })
    }
    const uniqueFileName = `${crypto.randomUUID()}-${image.name}`;

    const response = await fetch(`${process.env.KINDE_SITE_URL}/api/presigned-url`, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ key: uniqueFileName })
    })

    const { signedUrl } = await response.json()

    const imageUploadRequest = await fetch(signedUrl, {
      method: 'PUT',
      headers: {
        "Content-Type": image.type,
        "Accepted": "application/json"
      },
      body: image
    })

    const existingTenant = await prisma.menu.findUnique({
      where: { subdomain },
    })

    if (existingTenant) {
      return NextResponse.json({ error: 'Subdomain already exists' }, { status: 409 })
    }
    var slugify = require('slugify')

    const test = slugify(subdomain, {
      replacement: '-',  // replace spaces with replacement character, defaults to `-`
      remove: /[*+~.()'"!:@]/, // remove characters that match regex, defaults to `undefined`
      lower: true,      // convert to lower case, defaults to `false`
      strict: false,     // strip special characters except replacement, defaults to `false`
      trim: true         // trim leading and trailing replacement chars, defaults to `true`
    })

    const newTenant = await prisma.menu.create({
      data: {
        name: name,
        subdomain: test,
        image: `${process.env.CLOUDFLARE_BUCKET_URL}/${uniqueFileName}`,
        User: { connect: { id: userRec.id } }

      },
    })

    return NextResponse.json(newTenant, { status: 201 })
  } catch (error) {
    console.error('Error creating tenant:', error)
    return NextResponse.json({ error: 'Internal server error oioi' }, { status: 500 })
  }
}