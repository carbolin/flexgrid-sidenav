import { NgModule } from '@angular/core';
import { RouterModule, Routes, UrlSerializer } from '@angular/router';

const routes: Routes = [
  {
    path: 'app',
    loadChildren: () => import('./core/navigation/navigation.module').then(m => m.NavigationModule)
  },
  { path: '**', redirectTo: 'app' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,
    {
      useHash: false,
      initialNavigation: 'enabled',
      onSameUrlNavigation: 'ignore',
      scrollPositionRestoration: 'enabled',
      anchorScrolling: 'enabled',
      scrollOffset: [0, 80],
      paramsInheritanceStrategy: 'always',
      relativeLinkResolution: 'corrected',
      malformedUriErrorHandler:
        (error: URIError, urlSerializer: UrlSerializer, url: string) => urlSerializer.parse('/page-not-found')
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

