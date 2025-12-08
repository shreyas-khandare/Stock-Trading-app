const {Schema} = require("mongoose");

const OrdersSchema = new Schema({
    name: String,
    qty: Number,
    price: Number,
    mode: String,
    // Enhanced fields for better order management
    status: {
        type: String,
        default: "PENDING",
        enum: ["PENDING", "COMPLETED", "CANCELLED"]
    }
}, {
    // Automatically add createdAt and updatedAt timestamps
    timestamps: true
});

module.exports = { OrdersSchema };