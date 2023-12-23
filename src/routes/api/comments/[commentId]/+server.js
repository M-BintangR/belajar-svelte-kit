
import { json } from "@sveltejs/kit";
import {comments} from '$lib/comments.js';

export function GET(requestevent){
    const { params } = requestevent;
    const {commentId} = params;
    const comment = comments.find(comment => comment.id === parseInt(commentId));
    return json(comment);
}