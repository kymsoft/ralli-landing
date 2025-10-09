"use server"

import { cookies } from "next/headers";


export async function getAnalyticsConsent() {
  const cookieStore = await cookies();
  const consent = cookieStore.get("cookie_consent")?.value;
  return consent === "accepted";
}