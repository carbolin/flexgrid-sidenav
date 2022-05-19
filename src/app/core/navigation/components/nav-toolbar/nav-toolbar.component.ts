import { Observable } from 'rxjs';
import { PortalBridgeService } from 'src/app/core/services/portal-bridge.service';

import { TemplatePortal } from '@angular/cdk/portal';
import { Component, EventEmitter, Input, Output } from '@angular/core';

import { Direction } from '../../navigation.component';

@Component({
  selector: 'app-nav-toolbar',
  templateUrl: './nav-toolbar.component.html',
  styleUrls: ['./nav-toolbar.component.scss'],
})
export class NavToolbarComponent {
  @Input()
  set isHandset(isHandset: boolean | null) { this._isHandset = isHandset; }
  get isHandset(): boolean | null { return this._isHandset; }
  private _isHandset: boolean | null = false;

  @Input()
  set isToolbarVisible(isToolbarVisible: Direction | null) { this._isToolbarVisible = isToolbarVisible; }
  get isToolbarVisible(): Direction | null { return this._isToolbarVisible; }
  private _isToolbarVisible: Direction | null = Direction.Up;

  @Output() toggleSideNav = new EventEmitter();

  portal$: Observable<TemplatePortal>;

  constructor(private _portalBridge: PortalBridgeService) {
    this.portal$ = this._portalBridge.portal$;
  }

  onToggleSideNav(): void {
    this.toggleSideNav.emit();
  }
}
