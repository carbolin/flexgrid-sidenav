import { Subject } from 'rxjs';

import { TemplatePortal } from '@angular/cdk/portal';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PortalBridgeService {
  private _activePortal = new Subject<TemplatePortal>();
  readonly portal$ = this._activePortal.asObservable();

  setPortal(portal: TemplatePortal): void {
    this._activePortal.next(portal);
  }
}
