import { Routes } from '@angular/router';
import { LandingComponent } from './pages/landing/landing.component';

import { ContactComponent } from './pages/contact/contact.component';
import { BlogComponent } from './pages/blog/blog.component';

export const routes: Routes = [
  { path: '', component: LandingComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'blog', component: BlogComponent }
];
