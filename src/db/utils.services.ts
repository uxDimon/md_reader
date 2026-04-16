import { getDB } from "@/db/client";
import type { UtilsKey, UtilsValue } from "@/db/types";

export const dbUtilsServices = {
	async get<T extends UtilsKey>(key: T): Promise<UtilsValue<T> | undefined> {
		const db = await getDB();
		return db.get("utils", key) as Promise<UtilsValue<T> | undefined>;
	},
	async put<K extends UtilsKey>(key: K, value: UtilsValue<K>): Promise<void> {
		const db = await getDB();
		await db.put("utils", value, key);
	},
};
