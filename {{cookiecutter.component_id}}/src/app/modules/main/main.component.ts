import {
  ChangeDetectionStrategy, Component, Inject, Optional,
} from '@angular/core';

import { assetUrl, SingleSpaProps, SingleSpaPropsToken } from '@single-spa-local';
import { LocalizationService } from '../../common/core/services/localization/localization.service';

import { ToggleHeaderBus } from '@galileo/common-typings';

@Component({
  selector: 'app-main-page',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainComponent {
  yoshiUrl = assetUrl('yoshi.png');

  currentLang: string;

  languages: string[];

  constructor(
    @Optional() @Inject(SingleSpaPropsToken) private props: SingleSpaProps,
    private localizationService: LocalizationService,
  ) {
    this.languages = localizationService.getConfiguration().availableLanguages;
    this.currentLang = localizationService.getConfiguration().currentLang;
  }

  handleLangSelect(lang: string): void {
    this.localizationService.setActiveLang(lang);
  }

  headerToggle(hide?: boolean) {
    new ToggleHeaderBus().publish({ hide });
  }
}
