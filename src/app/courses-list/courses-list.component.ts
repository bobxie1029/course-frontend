import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Course } from '../model/course';
import { CoursesService } from '../services/courses.service';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.css']
})
export class CoursesListComponent implements OnInit {

  courses: Course[] | undefined;

  constructor(private route: Router, private coursesservice:CoursesService) { }

  ngOnInit(): void {
    console.log('entering ngonInit of course-lists')
    const getData = (data: Course[]) =>{
      this.courses = data;
      console.log('get the courses list')
      console.log(this.courses)
    }
    const getErr = () =>{
      console.log('error');
    }
    const getComplete = () =>{
      console.log(' courses list load complete');
    }
    const listener = {
      next: getData,
      error: getErr,
      complete: getComplete
    }
    this.coursesservice.getAllCourses().subscribe(listener);

  }

  }


