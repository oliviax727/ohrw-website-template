/// <reference types="node" />

import { default as exampleModuleFunction } from "./example";
import type { EntryFunction } from "./modules";

const entry: EntryFunction = async function () {
	console.log("Loading bundled modules ...");

	try {
		await exampleModuleFunction();
	} catch (error: unknown) {
		console.log("An error occured while trying to load the bundled modules: " + (error as string) + ";");

		if (error instanceof Error) {
			console.log("In: " + (error.stack ?? "[stack unavailable]"));
		} else {
			console.trace();
		}
	} finally {
		console.log("Modules successfully loaded.");
	}
};

export default entry;
