import { test as setup } from "./fixtures";

const authFile = "playwright/.auth/user.json";

setup("authenticate", async ({ login, request }) => {
  await login();
  await request.storageState({ path: authFile });
});
