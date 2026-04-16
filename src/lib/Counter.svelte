<script lang="ts">
	import { dbUtilsServices } from "@/db/utils.services";
	import { onMount } from "svelte";

	let count: number = $state(0);
	const increment = async () => {
		count += 1;

		dbUtilsServices.put("count", count);
	};

	onMount(async () => {
		const dbCount = await dbUtilsServices.get("count");
		if (dbCount) count = dbCount;
	});
</script>

<button onclick={increment}>
	count is {count}
</button>
