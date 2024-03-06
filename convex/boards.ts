import { v } from "convex/values";
import { query } from "./_generated/server";
import { getAllOrThrow } from "convex-helpers/server/relationships";

export const get = query({
    args: {
        orgId: v.string(),
        search: v.optional(v.string()),
        favorites: v.optional(v.string()),
    },
    handler: async (ctx, args) => {
        const identify = await ctx.auth.getUserIdentity();

        if (!identify) {
            throw new Error("Unauthorized");
        }

        if (args.favorites) {
            const favoritedBoards = await ctx.db
                .query("userFavorites")
                .withIndex("by_user_org", (q) =>
                    q.eq("userId", identify.subject).eq("orgId", args.orgId)
                ).order('desc').collect();

            const ids = favoritedBoards.map((b) => b.boardId)

            const boards = await getAllOrThrow(ctx.db, ids)

            return boards.map((board) => ({
                ...board,
                isFavorite: true
            }))
        }
    },
});
