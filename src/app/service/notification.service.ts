import { Injectable } from '@angular/core';
import { NotifierService } from 'angular-notifier';
import { NotificationType } from '../enum/notification-type.enum';


@Injectable({ providedIn: 'root' })
export class NotificationService {

    private readonly notifier: NotifierService;

    constructor(notifierService: NotifierService) {
        this.notifier = notifierService;
    }

    onDefault(message: string): void {
        this.notifier.notify(NotificationType.DEFAULT, message);
    }

    onSuccess(message: string): void {
        this.notifier.notify(NotificationType.SUCCESS, message);
    }

    onInfo(message: string): void {
        this.notifier.notify(NotificationType.INFO, message);
    }

    onWarning(message: string): void {
        this.notifier.notify(NotificationType.WARNING, message);
    }

    onError(message: string): void {
        this.notifier.notify(NotificationType.ERROR, message);
    }
}