import DataLoader from "dataloader";
import { Upvotes } from "../entities/Upvotes";

export const createUpvoteLoader = () =>
  new DataLoader<{ postId: number; userId: number }, Upvotes | null>(
    async (keys) => {
      const upvotes = await Upvotes.findByIds(keys as any);
      const upvoteIdsToUpvote: Record<string, Upvotes> = {};
      upvotes.forEach((upvote) => {
        upvoteIdsToUpvote[`${upvote.userId | upvote.postId}`] = upvote;
      });

      return keys.map((key) => upvoteIdsToUpvote[`${key.userId | key.postId}`]);
    }
  );
