import { Routes } from '@angular/router';
import { Error404Component } from './pages/All-Pages/error-404/error-404.component';
import { AboutUsComponent } from './pages/All-Pages/about-us/about-us.component';
import { BlogPostComponent } from './pages/All-Pages/blog-post/blog-post.component';
import { CarrerComponent } from './pages/All-Pages/carrer/carrer.component';
import { HomeComponent } from './pages/All-Pages/home/home.component';
import { BlogComponent } from './pages/All-Pages/blog/blog.component';
import { ConcactUsComponent } from './pages/All-Pages/concact-us/concact-us.component';

export const routes: Routes = [
  {
    path: 'home', title: "Home", component: HomeComponent,
  },
  {
    path: 'contact-us', title: "Contact Us", component: ConcactUsComponent
  },
  {
    path: 'error-404', title: "Error 404", component: Error404Component,
  },
  {
    path: 'about-us', title: "About Us", component: AboutUsComponent,
  },
  {
    path: 'blog-post', title: "Blog Post", component: BlogPostComponent,
  },
  {
    path: 'carrer', title: "Carrer", component: CarrerComponent,
  },
  {
    path: 'blog', title: "Blog", component: BlogComponent,
  },
  {
    path: '', redirectTo: 'home', pathMatch: 'full'
  },
  {
    path: '**', redirectTo: 'error-404'
  }
];
