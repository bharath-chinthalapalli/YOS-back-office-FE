import { ChangeDetectorRef, Component, signal } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatExpansionModule } from '@angular/material/expansion';
import { Router } from '@angular/router';
import { MediaMatcher } from '@angular/cdk/layout';
import { fromEvent, Observable, Subject, takeUntil } from 'rxjs';
import { MatMenuModule } from '@angular/material/menu';

@Component({
  selector: 'app-home',
  imports: [SharedModule, MatSidenavModule, MatToolbarModule, MatListModule, MatExpansionModule, MatMenuModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  mobileQuery!: MediaQueryList;
  private _mobileQueryListener: (() => void) | undefined;
  responsiveChanges!: Observable<Event>;
  unsubscribe = new Subject<void>();
  readonly panelOpenState = signal(false);
  sideNavLinks: any[] = [
    {
      name: 'Customer Account Search',
      link: 'cas',
      icon: 'person_search',
      active: true,
      bg_color:'yellow-400',
      text_color:'yellow-700',
    },
    {
      name: 'Status Bulk Update',
      link: 'status-bulk-update',
      icon: 'cloud_upload',
      active: true,
      bg_color:'teal-400',
      text_color:'teal-700',
    },
    {
      name: 'Status Bulk Update Approver List',
      link: 'status-bulk-update-approver-list',
      icon: 'checklist_rtl',
      active: true,
      bg_color:'green-400',
      text_color:'green-700',
    },
    {
      name: 'Manual Missing Order Sync',
      link: 'manual-missing-order-sync',
      icon: 'sync_arrow_down',
      active: true,
      bg_color:'blue-400',
      text_color:'blue-700',
    },
    {
      name: 'Bulk Device Warranty Activation',
      link: 'status-bulk-device-warranty',
      icon: 'recommend',
      active: true,
      bg_color:'cyan-400',
      text_color:'cyan-700',
    },
  ];

  constructor(
    private router: Router,
    private media: MediaMatcher,
    private changeDetectorRef: ChangeDetectorRef,
  ) {
    this.mobileQuery = this.media.matchMedia('(max-width:600px)');
    this._mobileQueryListener = () => this.changeDetectorRef.detectChanges();
    this.responsiveChanges = fromEvent(this.mobileQuery, 'change');
    this.responsiveChanges
      .pipe(takeUntil(this.unsubscribe))
      .subscribe(this._mobileQueryListener);
  }

  isActiveLink(link: string): boolean {
    return this.router.url === link;
  }

  navToLinks(link: any) {
    console.log(link)
    this.router.navigate(['/', link])
  }

  logout() {
    localStorage.clear();
    window.location.replace('/login');
  }
}
