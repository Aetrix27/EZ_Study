module.exports = mongoose => {

      const UserSchema = mongoose.Schema(
        {
          username: { type: String, required: true },
          password: { type: String, required: true },
          cards: [{ type: mongoose.Schema.Types.ObjectId, ref: "Card" }],
        },
        { timestamps: { createdAt: "created_at" } }
      
      );
      
      const User = mongoose.model("user", UserSchema);
      return User;
    };