import { Time } from '@angular/common';

export class Comment{
    id: number;
    user: {
        id: number;
        username: string;
        email: string;
        profile: string;
    };
    content: string;
    parent: number;
    posted: Time
    edited: Time
    reply_count: number;
    replies: [{
        id: number;
        user: {
            id: number;
            username: string;
            email: string
            profile: string
        };
        content: string;
        parent: number;
        posted: Time;
        edited: Time;
        reply_count: number;
        replies: null;
        likes: number;
        dislikes: number;
        is_flagged: boolean;
    }];
    likes: number;
    dislikes: number;
    is_flagged: boolean;
}