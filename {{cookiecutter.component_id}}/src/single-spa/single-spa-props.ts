import { AppProps } from 'single-spa';
import { BehaviorSubject } from 'rxjs';

export const singleSpaPropsStream = new BehaviorSubject<Partial<SingleSpaProps>>({});

// Add any custom single-spa props you have to this type def
// https://single-spa.js.org/docs/building-applications.html#custom-props
export type SingleSpaProps = AppProps & {
  prefix: string;
  deployUrl: string;
  apiUrl: string;
  lang: string;
  languages: string[];
};
