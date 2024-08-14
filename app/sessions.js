// app/sessions.ts
import { createCookieSessionStorage } from "@remix-run/node"; // or cloudflare/deno

const { getSession, commitSession, destroySession } =
  createCookieSessionStorage({
    cookie: {
      name: "__session",
      httpOnly: true,
      maxAge: 60 * 60 * 24 * 2, // 2 days
      path: "/",
      sameSite: "lax",
      secrets: ["s3cret1"],
      secure: true
    }
  });

export { getSession, commitSession, destroySession };
