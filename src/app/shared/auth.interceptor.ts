import { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { tap } from 'rxjs';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  return next(req).pipe(
    tap({
      next: (_) => { return; },
      error: (err: any) => {
        if (err instanceof HttpErrorResponse) {
          if (err.status !== 401) {
            return;
          }
          sessionStorage.clear();
          localStorage.clear();
          const url = window.location.origin;
          return window.location.replace(url);
        }
      },
    })
  );
};
