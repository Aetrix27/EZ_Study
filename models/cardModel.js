module.exports = mongoose => {
    const cardSchema = mongoose.Schema(
      {
         title : { type: String, required: true },
         content : { type: String, required: true },
         author : { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },

      },
      { timestamps: { createdAt: "created_at" } }
      
    );

    const Card = mongoose.model("card", cardSchema);
    return Card;
  };