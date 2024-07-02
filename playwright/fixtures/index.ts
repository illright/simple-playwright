import { mergeTests } from "@playwright/test";

import { test as apiTest } from "./api";

export const test = mergeTests(apiTest);

export { expect } from "@playwright/test";
