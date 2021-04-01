import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
    },
    name: {
      first: { type: String, required: true },
      last: { type: String, required: true },
    },

    // 필수가 아니면 아래와 같은 형태로 작성해도 된다.
    age: Number,
    email: String,
  },
  // timestamps는 createAt, updateAt을 자동으로 만들어준다.
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);
export default User;