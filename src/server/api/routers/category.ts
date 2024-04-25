import { createTRPCRouter, protectedProcedure } from "@/server/api/trpc";

export const categoryRouter = createTRPCRouter({
  get: protectedProcedure.query(async ({ ctx }) => {
    return ctx.db.category.findMany({
      orderBy: { name: "asc" },
    });
  }),
});
