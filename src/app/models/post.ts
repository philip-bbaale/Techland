import { Time } from '@angular/common';

export class Post {
    id:number;
    title: string;
    image: ImageData;
    content: string;
    category: number;
    author: string;
    timestamp: Time;
    comments: {
        id: number;
        user: {
            id:number;
            username:string;
            email:string;
            profile:string;
        };
        content:string;
        parent:string;
        posted:Time;
        edited:Time;
        reply_count:number;
        replies:{

        };
        likes:number;
        dislikes:number;
        is_flagged:boolean;

    }
}