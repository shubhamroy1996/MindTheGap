import mongoose from "mongoose";

const blacklistTokenSchema = new mongoose.Schema(
  {
    token: {
      type: String,
      required: [true, "token is required and to be added in blacklist"],
    },
  },
  { timestamps: true },
);

const tokenBlacklistModel = mongoose.model(
  "blackListTokens",
  blacklistTokenSchema,
);

export default tokenBlacklistModel;
