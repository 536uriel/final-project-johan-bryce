import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import{RouterModule, Routes} from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { UserPageComponent } from './user-page/user-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { RegisterComponent } from './register/register.component';
import { CarsToRentComponent } from './cars-to-rent/cars-to-rent.component';
import { AdminGuard } from './admin/admin.guard';
import { GuardTestGuard } from './guard-test.guard';
import { FormsModule }   from '@angular/forms';
import { CarsFilterPipe } from './cars-filter.pipe';
import { CalculateRentalCarsComponent } from './calculate-rental-cars/calculate-rental-cars.component';
import { WorkerLoginComponent } from './worker-login/worker-login.component';
import { WorkerPageComponent } from './worker-page/worker-page.component';
import { MannegerLoginComponent } from './manneger-login/manneger-login.component';
import { MannegerPageComponent } from './manneger-page/manneger-page.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material';
import {MatRadioModule} from '@angular/material/radio';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonToggleModule} from '@angular/material/button-toggle';

const routes:Routes = [
   {path: '', redirectTo: 'home-page', pathMatch: 'full'},
   {path: 'home-page', component: HomePageComponent},
   {path:'login',component:LoginComponent},
   {path:'register',component:RegisterComponent},
   {path:'user-page',component:UserPageComponent,canActivate:[AdminGuard]},
   {path:'cars-to-rent',component:CarsToRentComponent,canActivate:[AdminGuard]},
   {path:'calculate-rental-cars',component:CalculateRentalCarsComponent,canActivate:[AdminGuard]},
   {path:'worker-login',component:WorkerLoginComponent},
   {path:'worker-page',component:WorkerPageComponent, canActivate:[AdminGuard]},
   {path:'manneger-login',component:MannegerLoginComponent},
   {path:'manneger-page',component:MannegerPageComponent, canActivate:[AdminGuard]}
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UserPageComponent,
    HomePageComponent,
    RegisterComponent,
    CarsToRentComponent,
    CarsFilterPipe,
    CalculateRentalCarsComponent,
    WorkerLoginComponent,
    WorkerPageComponent,
    MannegerLoginComponent,
    MannegerPageComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes),
    ReactiveFormsModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    MatButtonModule, MatCheckboxModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    MatInputModule,
    MatRadioModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatIconModule,
    MatButtonToggleModule

    
    
  ],
  providers: [AdminGuard,GuardTestGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
