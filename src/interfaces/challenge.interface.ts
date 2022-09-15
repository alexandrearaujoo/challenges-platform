import { Challenge, Tag } from "@prisma/client";

export type ITags = Tag;

export type IChallenge = Challenge & {
  challengeTags: ITags[];
};
