import type { VercelRequest, VercelResponse } from "@vercel/node";
import app from "../../server";

export default async function handler(
  req: VercelRequest,
  res: VercelResponse
) {
  return new Promise((resolve, reject) => {
    app(req as any, res as any);
    res.on("end", resolve);
    res.on("error", reject);
  });
}
