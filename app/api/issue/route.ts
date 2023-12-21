import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'

const createIssueSchema = z.object({
  title: z.string().min(1),
  password: z.string().min(8).max(100),
  description: z.string().min(1),
})

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    const issue = createIssueSchema.safeParse(body)

    return NextResponse.json(issue, { status: 200 })
  } catch (error) {
    return NextResponse.json(error, { status: 400 })
  }
}
