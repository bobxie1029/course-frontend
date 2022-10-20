import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Course } from '../model/course';

const baseUrl = 'http://localhost:8081/';
@Injectable({
  providedIn: 'root'
})



export class CoursesService {


  constructor(private httpClient: HttpClient) { }
  
  getAllCourses(): Observable<Course[]>  {
    return this.httpClient.get<Course[]>(baseUrl + 'listCourses');
  }

  addCourse(course:Course): Observable<Course> {
    return this.httpClient.post<Course>(baseUrl + 'course', course);
  }
}

