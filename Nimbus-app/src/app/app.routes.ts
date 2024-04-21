import { Routes } from '@angular/router';
import { HomepageComponent } from '../components/homepage/homepage.component';

export const routes: Routes = [
    // path -> which path to be shown on website ex- xyz/home this "/home" is path 
    // component -> what to be shown after routing to that path 
    { path : '' , component: HomepageComponent},
];
