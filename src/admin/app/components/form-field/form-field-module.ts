
import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {PlatformModule} from '@angular/cdk/platform';
import {MeepoError} from './error';
import {MeepoFormField} from './form-field';
import {MeepoHint} from './hint';
import {MeepoPlaceholder} from './placeholder';
import {MeepoPrefix} from './prefix';
import {MeepoSuffix} from './suffix';
import { MeepoInput } from './input';

@NgModule({
  declarations: [
    MeepoError,
    MeepoHint,
    MeepoFormField,
    MeepoPlaceholder,
    MeepoPrefix,
    MeepoSuffix,
    MeepoInput
  ],
  imports: [
    CommonModule,
    PlatformModule,
  ],
  exports: [
    MeepoError,
    MeepoHint,
    MeepoFormField,
    MeepoPlaceholder,
    MeepoPrefix,
    MeepoSuffix,
    MeepoInput
  ],
})
export class MeepoFormFieldModule {}
