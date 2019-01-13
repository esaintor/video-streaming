import { Injectable } from '@angular/core';

import UIkit from 'uikit';

@Injectable()
export class AlertService {

    constructor() {

    }

    setAlert(type, message) {
        UIkit.notification(message, {status: type, pos: 'bottom-right'});
    }

    closeAll() {
        UIkit.notification.closeAll();
    }
}
