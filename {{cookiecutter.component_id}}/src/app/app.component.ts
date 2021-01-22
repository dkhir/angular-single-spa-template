import {
  ChangeDetectionStrategy, Component, ElementRef, OnInit, Renderer2,
} from '@angular/core';

import { SvgService } from './common/core/services/svg';

@Component({
  selector: 'app-root-starter',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements OnInit {
  title = '{{ cookiecutter.component_id }}';

  constructor(
    private svgService: SvgService,
    private elementRef: ElementRef,
    private renderer: Renderer2,
  ) {}

  ngOnInit(): void {
    this.appendSpriteToDOM(this.svgService.sprite);
  }

  private appendSpriteToDOM(sprite: HTMLElement): void {
    this.renderer.appendChild(this.elementRef.nativeElement, sprite);
  }
}
