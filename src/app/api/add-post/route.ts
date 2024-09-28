import prisma from "../../../../lib/prisma";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
    const body = await request.json();
    const { title, content, published } = body;
    const res = await prisma.post.create({
        data: {
            title,
            content,
            published,
            author: {
                create: {
                    name: "test",
                }
            }
        }
    });
    return NextResponse.json({ res});
}