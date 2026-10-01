import { provideHttpClient, withFetch, withInterceptors } from '@angular/common/http';
import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideRouter, withComponentInputBinding, withPreloading, withViewTransitions } from '@angular/router';
import { QuicklinkStrategy } from 'ngx-quicklink';
import { routes } from './app.routes';
import { authInterceptor } from './shared/auth.interceptor';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(
      routes,
      withComponentInputBinding(),
      withPreloading(QuicklinkStrategy),
      withViewTransitions(),
    ),
    provideAnimationsAsync(),
    provideHttpClient(
      withInterceptors([authInterceptor]),
      withFetch())
  ]
};
