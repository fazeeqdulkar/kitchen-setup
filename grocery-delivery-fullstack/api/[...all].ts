import type { VercelRequest, VercelResponse } from "@vercel/node";
import app from "../server";

export default async function handler(
  req: VercelRequest,
  res: VercelResponse
) {
  return new Promise<void>((resolve) => {
    // Handle the request through the Express app
    app(req as any, res as any);

    // Resolve when response is finished
    res.on("finish", () => {
      resolve();
    });

    // Safety timeout
    setTimeout(() => {
      if (!res.headersSent) {
        res.status(500).json({ error: "Request timeout" });
      }
      resolve();
    }, 30000);
  });
}
