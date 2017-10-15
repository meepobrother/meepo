export * from './catalog-page-navs';
export * from './catalog-section';
export * from './model';


import { CatalogPageNavs } from './catalog-page-navs';
import { CatalogSection } from './catalog-section';
import { WidgetSection } from './widget-section';

import { CatalogService, DataPerService } from '../../../design/services';

export const SECTIONS = [
    CatalogPageNavs,
    CatalogSection,
    WidgetSection
];

export const SECTIONS_SERVICES = [
    CatalogService,
    DataPerService
];

