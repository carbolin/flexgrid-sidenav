import { BehaviorSubject, Observable } from 'rxjs';

import { DOCUMENT } from '@angular/common';
import { Inject, Injectable, Renderer2, RendererFactory2 } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class ThemingService {
  private _isDark = new BehaviorSubject<boolean>(true);
  isDark$: Observable<boolean> = this._isDark.asObservable();

  renderer: Renderer2;

  constructor(rendererFactory: RendererFactory2, @Inject(DOCUMENT) private _document: Document) {
    this.renderer = rendererFactory.createRenderer(null, null);
  }

  toggleTheme() {
    this._isDark.next(!this._isDark.value);
    this._isDark.value ? this.renderer.removeClass(this._document.body, 'my-light-theme') : this.renderer.addClass(this._document.body, 'my-light-theme');
  }
}
