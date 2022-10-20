import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Course } from '../model/course';
import { CoursesService } from '../services/courses.service';

@Component({
  selector: 'app-add-courses',
  templateUrl: './add-courses.component.html',
  styleUrls: ['./add-courses.component.css']
})
export class AddCoursesComponent implements OnInit {

  result:string|undefined;
  flag:boolean |  undefined;

  contactForm: FormGroup;
  constructor(private formBuilder:  FormBuilder,
    private coursesservice:CoursesService)  {
    this.contactForm = this.formBuilder.group({
      courseName: [''],
      authorName: [''], 
      durationInHours: [' ']
    });
 }


  ngOnInit(): void {
  }

  onSubmit() {
    this.flag = false;
    
    console.log('Your form data : ', this.contactForm.value );
    let value = this.contactForm.value;
    let course :Course ={
      courseName: value.courseName,
      authorName: value.authorName,
      durationInHours: value.durationInHours
     
    } ;

    this.coursesservice.addCourse(course).subscribe (
      {
        next: (data) => {
          console.log('receive data from service of rooms' + data)
          
        },

        error: ()=> {
          this.flag = true;

          console.log('error');
        },

        complete: () =>{
          console.log('complete');
        }
      }
    );
}
}
