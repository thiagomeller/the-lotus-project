import { IProducts } from './../@types/types';
export declare global {
	namespace ReactNavigation {
		interface RootParamList {
			Home: undefined;
			Cart: undefined;
			Product: undefined | { id: string; title: string; description: string; value: string; image: string; subtitle: string; };
			Login: undefined;
			Profile: undefined;
			NewProduct: undefined;

		}
	}
}