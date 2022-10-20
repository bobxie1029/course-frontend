import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCoursesComponent } from './add-courses/add-courses.component';
import { CoursesListComponent } from './courses-list/courses-list.component';
import { DeleteCourseComponent } from './delete-course/delete-course.component';

const routes: Routes = [
  {path: '', redirectTo: 'courses', pathMatch: 'full'},
  {path: 'courses', component: CoursesListComponent},
  {path: 'addCourse', component: AddCoursesComponent},
  {path: 'delCourse', component: DeleteCourseComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
