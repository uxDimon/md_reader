import type { MainDB } from "@/db/types";
import { openDB, type IDBPDatabase } from "idb";

let dbPromise: Promise<IDBPDatabase<MainDB>> | null = null;

export async function getDB() {
	if (!dbPromise) {
		dbPromise = openDB<MainDB>("PwaAppDB", 1, {
			upgrade(db) {
				if (!db.objectStoreNames.contains("utils")) {
					db.createObjectStore("utils");
				}

				// const productStore = db.createObjectStore("products", {
				// 	keyPath: "productCode",
				// });
				// productStore.createIndex("by-price", "price");
			},
		});
	}

	return dbPromise;
}

export function closeDB() {
	dbPromise?.then((db) => db.close());
	dbPromise = null;
}
