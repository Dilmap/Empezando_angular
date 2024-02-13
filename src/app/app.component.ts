import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './pages/All-Pages/home/home.component';
import { CarrerComponent } from './pages/All-Pages/carrer/carrer.component';
import { Error404Component } from './pages/All-Pages/error-404/error-404.component';
import { BlogComponent } from './pages/All-Pages/blog/blog.component';
import { BlogPostComponent } from './pages/All-Pages/blog-post/blog-post.component';
import { AboutUsComponent } from './pages/All-Pages/about-us/about-us.component';
import { FooterComponent } from './pages/Components/footer/footer.component';
import { NavComponent } from './pages/Components/nav/nav.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FooterComponent, NavComponent, HomeComponent, CarrerComponent, Error404Component, BlogComponent, BlogPostComponent, AboutUsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'proyecto-nueva-prueba';
}
 