import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SettingsComponent }  from './settings/settings.component';
import { ExerciseComponent } from './exercise/exercise.component';


const routes: Routes = [
  { path: '', redirectTo: '/exercise', pathMatch: 'full' },
  { path: 'exercise', component: ExerciseComponent },
  { path: 'settings', component: SettingsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
