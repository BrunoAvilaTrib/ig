import { Injectable } from '@angular/core';
import { GlobalVariable } from './global';
import { ControlMessage } from '@app/model/control-message';
import { Subject } from 'rxjs';
import { EnumStatus } from '@app/enumeration/enum-status.enum';
import { EnumStatusError } from '@app/enumeration/enum-status-error.enum';

@Injectable({
  providedIn: 'root'
})
export class LayermsgService {

  private timeout: any;
  private control: Subject<ControlMessage>;

  constructor() {
    this.timeout = null;
    this.control = new Subject<ControlMessage>();
  }

  subscribe(callback: (data: ControlMessage) => void) {
    return this.control.subscribe(callback);
  }

  scrollTop() {
    let scrollToTop = window.setInterval(() => {
      let pos = window.pageYOffset;
      if (pos > 0) {
        window.scrollTo(0, pos - 20); // how far to scroll on each step
      } else {
        window.clearInterval(scrollToTop);
      }
    }, 16);
  }

  showMessage(options: ControlMessage) {
    clearTimeout(this.timeout);
    this.scrollTop();
    this.control.next(options);
    this.timeout = setTimeout(() => {
      options.onSuccess();
      this.control.next(null);
    }, options.delay);
  }

  showMessageOk(code: string = 'Registro exitoso', onComplete: any = () => { }) {

    let status = EnumStatus.findByCode(code);

    this.showMessage(new ControlMessage(
      ( ( status && status.value ) || code),
      'mess_ok',
      'fa-check-circle'
    ).success(onComplete));
  }

  showMessageError(error: any = 'Ocurrió un error inesperado.', onComplete: any = () => { }) {

    var code = '';
    if (error.error && error.error.status) {
      code = error.error.status.code;
    } else if( typeof error === 'string' ) {
      code = error;
    }

    let status = EnumStatusError.findByCode(code);

    this.showMessage(new ControlMessage(
      ( ( status && status.value ) || code),
      'mess_no',
      'fa-times-circle'
    ).success(onComplete));
  }
}
