import { z } from "zod";

export const messageSchema = z.object({
  content: z.
    string().
    min(2, "Message must be atleast 2 characters long").
    max(300, "Message must be no more than 300 characters long"),
});
