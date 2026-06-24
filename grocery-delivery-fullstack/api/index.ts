import type { VercelRequest, VercelResponse } from "@vercel/node";
import handler from "../server/index.js";

export default function (req: VercelRequest, res: VercelResponse) {
  return handler(req, res);
}
