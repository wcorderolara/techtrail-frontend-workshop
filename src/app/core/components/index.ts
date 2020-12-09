export * from './header-bar/header-bar.component';
export * from './header-bar-brand/header-bar-brand.component';
export * from './header-bar-links/header-bar-links.component';
export * from './nav/nav.component';
export * from './about/about.component'

import { HeaderBarBrandComponent } from './header-bar-brand/header-bar-brand.component';
import { HeaderBarLinksComponent } from './header-bar-links/header-bar-links.component';
import { HeaderBarComponent } from './header-bar/header-bar.component';
import { NavComponent } from './nav/nav.component';
import { AboutComponent } from './about/about.component';

export const declarations = [
  HeaderBarBrandComponent,
  HeaderBarLinksComponent,
  HeaderBarComponent,
  NavComponent,
  AboutComponent
];
