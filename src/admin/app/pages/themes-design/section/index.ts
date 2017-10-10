export * from './catalog-page-navs';
export * from './catalog-section';

import { CatalogPageNavs } from './catalog-page-navs';
import { CatalogSection } from './catalog-section';
import { CatalogService } from './catalog.service';


export const SECTIONS = [
    CatalogPageNavs,
    CatalogSection
];

export const SECTIONS_SERVICES = [
    CatalogService
]; 
