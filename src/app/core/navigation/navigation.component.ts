import {
  distinctUntilChanged, fromEvent, map, Observable, pairwise, shareReplay, Subject, takeUntil, tap,
  throttleTime
} from 'rxjs';

import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { CdkPortal } from '@angular/cdk/portal';
import { DOCUMENT } from '@angular/common';
import {
  AfterViewInit, Component, Inject, NgZone, OnDestroy, OnInit, ViewChild
} from '@angular/core';

import { PortalBridgeService } from '../services/portal-bridge.service';
import { ThemingService } from '../services/theming.service';

export enum Direction {
  Up = 'Up',
  Down = 'Down'
}

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements AfterViewInit, OnInit, OnDestroy {
  private _destroy = new Subject<unknown>();

  @ViewChild(CdkPortal, { static: true }) portalContent!: CdkPortal;

  isHandset$: Observable<boolean> = this._breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  isToolbarVisible: Direction = Direction.Up;

  constructor(
    @Inject(DOCUMENT) private _document: Document,
    public themingService: ThemingService,
    private _breakpointObserver: BreakpointObserver,
    private _portalBridge: PortalBridgeService,
    private _ngZone: NgZone,

  ) { }

  ngOnInit(): void {
    setTimeout(() => {
      this._portalBridge.setPortal(this.portalContent);
    }, 20);
  }

  ngAfterViewInit(): void {

    setTimeout(() => {
      fromEvent(this._document, 'scroll')
        .pipe(
          throttleTime(50),
          map((ev: any) => (ev.target.scrollingElement.scrollTop)),
          pairwise(),
          map(([y1, y2]): Direction => (y2 < y1 ? Direction.Up : Direction.Down)),
          distinctUntilChanged(),
          takeUntil(this._destroy)
        )
        .subscribe((direction: Direction) => this._ngZone.run(() => this.isToolbarVisible = direction));
    }, 20)
  }

  ngOnDestroy(): void {
    this.portalContent.detach();
    this._destroy.next(null);
  }

  toggleTheme() {
    this.themingService.toggleTheme();
  }

}
