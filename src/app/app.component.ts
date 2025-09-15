import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import * as AOS from 'aos';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'portfolio-app';
  year: number = new Date().getFullYear();
  scrolled = false;
  isMenuOpen = false; // للتحكم في المينيو

  // 📨 رسالة الحالة بعد الإرسال
  statusMessage: string = '';
  statusClass: string = '';

  ngOnInit(): void {
    AOS.init({
      duration: 1000,
      once: true
    });

    window.addEventListener('scroll', () => {
      this.scrolled = window.scrollY > 50;
    });
  }

  // ✅ دالة الـ scroll
  scrollTo(sectionId: string): void {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      this.isMenuOpen = false; // يقفل المينيو لو فاتح على الموبايل
    }
  }

  // ✅ دالة فتح/قفل المينيو
  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }

  // ✅ إرسال الفورم لـ Formspree
  async onSubmit(form: NgForm) {
    if (form.invalid) return;

    const data = new FormData();
    data.append('name', form.value.name);
    data.append('email', form.value.email);
    data.append('message', form.value.message);

    try {
      const response = await fetch('https://formspree.io/f/mzzaqrbz', {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' }
      });

      if (response.ok) {
        this.statusMessage = '✅ Thanks! Your message has been sent successfully.';
        this.statusClass = 'text-green-600';
        form.reset();
      } else {
        this.statusMessage = '❌ Oops! Something went wrong. Please try again.';
        this.statusClass = 'text-red-600';
      }
    } catch (error) {
      this.statusMessage = '❌ Network error. Please try again later.';
      this.statusClass = 'text-red-600';
    }
  }
}
