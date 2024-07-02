import jsdom from "jsdom";
import { test as base } from "@playwright/test";

interface ApiFixtures {
  login: (email?: string) => Promise<void>;
}

export const test = base.extend<ApiFixtures>({
  login: ({ request }, use) =>
    use(async (email = "sample@playwright.dev") => {
      const response = await request.get("/users/sign_in");
      const dom = new jsdom.JSDOM(await response.text());
      const csrfToken =
        dom.window.document
          .querySelector('meta[name="csrf-token"]')
          ?.getAttribute("content") ?? "";

      await request.post("/users/sign_in", {
        form: {
          "user[email]": email,
          "user[password]": "qwerty123",
          authenticity_token: csrfToken,
        },
      });
    }),
});
