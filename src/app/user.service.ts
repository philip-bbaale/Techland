import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders,HttpErrorResponse, } from '@angular/common/http';
import { Observable,throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
  
export class UserService {

  register_url = 'https://techlandjarvis.herokuapp.com/auth/register/';
  private options = { headers: new HttpHeaders().set('Content-Type', 'application/json') };


  constructor(private http: HttpClient) { }


  
  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occured:', error.error.message);
    } else {

      // alert(error.error.non_field_errors);

    }

    return throwError(
      'Something is wrong, please try again.');

  }


  authenticate(username: string,email: string, password: string, password2: string) {
    const data = { 'username': username, 'email':email, 'password': password, 'password2':password2 };
    return this.http.post(this.register_url, data, this.options)
      .pipe(
        catchError(this.handleError)
      );
  }

  
}
