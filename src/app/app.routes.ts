import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';

export const routes: Routes = [
    // {
    //     path: '',
    //     loadComponent: () => import('./components/log-in/log-in.component').then(c => c.LogInComponent),
    //     title: 'login | DCF Hive'
    // },
    {
        path:'',
        component: HomeComponent,
        title: 'Home',
        children: [
            { path: '', redirectTo: 'cas', pathMatch: "full" },
            {
                path: 'cas',
                loadComponent: () => import('./components/customer-account-search/customer-account-search-dashboard/customer-account-search-dashboard.component').then(c => c.CustomerAccountSearchDashboardComponent),
                title: 'Customer Account Search | YOS',
            },
            {
                path: 'cas/reports-view/:ticketStatus',
                loadComponent: () => import('./components/customer-account-search/reports-view/reports-view.component').then(c => c.ReportsViewComponent),
                title: 'Reports View | YOS',
            },
            {
                path: 'cas/elevate-view',
                loadComponent: () => import('./components/customer-account-search/elevate-view/elevate-view.component').then(c => c.ElevateViewComponent),
                title: 'Elevates View | YOS',
            },
            {
                path: 'status-bulk-update',
                loadComponent: () => import('./components/status-bulk-update/status-bulk-update/status-bulk-update.component').then(c => c.StatusBulkUpdateComponent),
                title: 'Status Bulk Device warranty | YOS',
            },
            {
                path: 'status-bulk-update-approver-list',
                loadComponent: () => import('./components/status-bulk-update-approver-list/status-bulk-update-approver-list/status-bulk-update-approver-list.component').then(c => c.StatusBulkUpdateApproverListComponent),
                title: 'Status Bulk Device Warranty | YOS',
            },
            {
                path: 'manual-missing-order-sync',
                loadComponent: () => import('./components/manual-missing-order-sync/manual-missing-order-sync-dashboard/manual-missing-order-sync-dashboard.component').then(c => c.ManualMissingOrderSyncDashboardComponent),
                title: 'Manual Missing Order-sync | YOS',
            },
            {
                path: 'manual-missing-order-sync/sync-history',
                loadComponent: () => import('./components/manual-missing-order-sync/sync-history/sync-history.component').then(c => c.SyncHistoryComponent),
                title: 'Sync History | YOS',
            },
            {
                path: 'status-bulk-device-warranty',
                loadComponent: () => import('./components/bulk-device-warranty-activation/status-bulk-device-warranty/status-bulk-device-warranty.component').then(c => c.StatusBulkDeviceWarrantyComponent),
                title: 'Status Bulk Device Warranty | YOS',
            },
            {
                path: 'status-bulk-device-warranty/upload-file',
                loadComponent: () => import('./components/bulk-device-warranty-activation/upload-file/upload-file.component').then(c => c.UploadFileComponent),
                title: 'Status Bulk Device Warranty | YOS',
            },
        ]
    },
    {
        path: '**',
        redirectTo: '',
    }
];
