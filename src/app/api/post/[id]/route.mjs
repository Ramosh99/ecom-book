import { NextResponse } from "next/server";
// import prisma from "../../../../../lib/prisma";

// export async function GET(request: Request, { params }: { params: { id: string } }) {
//     const { id } = params;
//     console.log('GET request received for id:', id);
//     return NextResponse.json({ message: "GET request received", id });
// }
// interface RouteParams {
//     params: {
//         id: string;
//     }
// }
export function DELETE(request,params) {
    const id  = params.id;
    console.log('DELETE request received for id:', {id});
    return NextResponse.json({ message: "DELETE request received", id });
    // try {
    //     console.log('Attempting to delete post with id:', id);
    //     const deletedPost = await prisma.post.delete({
    //         where: { id },
    //     });
    //     console.log('Post deleted successfully:', deletedPost);
    //     return NextResponse.json({ success: true, deletedPost });
    // } catch (error) {
    //     console.error('Error deleting post:', error);
    //     return NextResponse.json({ success: false, error: String(error) }, { status: 500 });
    // }
}
