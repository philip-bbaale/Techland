import { Injectable } from '@angular/core'
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http'
import { AuthService } from './auth/auth.service'
import { Observable } from 'rxjs'



@Injectable()
export class JwtInterceptor implements HttpInterceptor {
    constructor(private auth:AuthService) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // add auth header with jwt token if available
        let curentUser = this.auth.currentUserValue;
        if (curentUser && curentUser.token) {
            request = request.clone({
                setHeaders:{
                    Authorization: `Bearer ${curentUser.token}`
                }
            });
        } 

        return next.handle(request);
    }
}