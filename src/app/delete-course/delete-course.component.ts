import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CoursesService } from '../services/courses.service';

@Component({
  selector: 'app-delete-course',
  templateUrl: './delete-course.component.html',
  styleUrls: ['./delete-course.component.css']
})
export class DeleteCourseComponent implements OnInit {

  result:string|undefined;
  flag:boolean |  undefined;

  contactForm: FormGroup;
  constructor(private formBuilder:  FormBuilder,
    private coursesservice:CoursesService)  {
    this.contactForm = this.formBuilder.group({
      courseId: ['']
    });
 }


  ngOnInit(): void {
  }

  onSubmit() {
    this.flag = false;
    
    console.log('Your form data : ', this.contactForm.value );

    let value = this.contactForm.value;
    let courseId =  value.courseId;
    

    this.coursesservice.delCourse(courseId).subscribe (
      {
        next: (data) => {
          console.log('receive data from service of rooms' + data)
          
        },

        error: ()=> {
          this.flag = true;

          console.log('error');
          alert('course delete error ');
        },

        complete: () =>{
          console.log('complete');
          alert('course delete complete ');
        }
      }
    );
}
}

