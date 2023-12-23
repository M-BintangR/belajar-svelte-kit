import { comments } from '$lib/comments.js';
import { json } from '@sveltejs/kit';

export function GET(){
    return json(comments);
}

export async function POST(requestEvent){
    const {request} = requestEvent;
    const {text} = await request.json()
    const newComments = {
        id: comments.length + 1,
        text,
    };
    comments.push(newComments);
    return json(newComments, {status: 201});
}