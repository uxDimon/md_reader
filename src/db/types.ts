import type { DBSchema } from "idb";

export type ListUtilsValues = {
	count: number;
	theme: "light" | "dark";
};

export type UtilsKey = keyof ListUtilsValues;
export type UtilsValue<K extends UtilsKey> = ListUtilsValues[K];

export interface MainDB extends DBSchema {
	utils: {
		key: UtilsKey;
		value: ListUtilsValues[UtilsKey];
	};
}
