export * from './catalog-page-navs';
export * from './catalog-section';
export * from './model';


import { CatalogPageNavs } from './catalog-page-navs';
import { CatalogSection } from './catalog-section';
import { WidgetSection } from './widget-section';


import { CatalogService } from './catalog.service';
import { DataPerService } from './data-per.service';

export const SECTIONS = [
    CatalogPageNavs,
    CatalogSection,
    WidgetSection
];

export const SECTIONS_SERVICES = [
    CatalogService,
    DataPerService
]; 


export { CatalogService } from './catalog.service';
export { DataPerService } from './data-per.service';