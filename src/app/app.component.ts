import { Component, OnInit } from '@angular/core';
import { MainLayoutComponent } from './core/components/main-layout/main-layout.component';
import { NotificationService } from './core/services/notification.service';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';

@Component({
	selector: 'app-root',
	standalone: true,
	imports: [MainLayoutComponent, MatSnackBarModule],
	templateUrl: './app.component.html',
	styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
	constructor(private notificationService: NotificationService, private snackBar: MatSnackBar) {}

	ngOnInit(): void {
    console.log('AppComponent initialized');

		this.notificationService.notification$.subscribe({
      next: (notification: any) => {
        console.log('Notification received', notification);
        this.snackBar.open(notification.message, 'Dismiss', {
          duration: 5000,
        });
      },
		});
	}
}

