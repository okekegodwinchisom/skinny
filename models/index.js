const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// User Schema
const UserSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  skinType: {
    type: String,
    enum: ['dry', 'oily', 'combination', 'sensitive', 'normal'],
    required: true
  },
  skinConcerns: [{
    type: String,
    enum: ['acne', 'wrinkles', 'darkSpots', 'redness', 'dullness', 'pigmentation']
  }],
  createdAt: {
    type: Date,
    default: Date.now
  }
});

// Skincare Routine Schema
const RoutineSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  name: {
    type: String,
    required: true
  },
  description: {
    type: String
  },
  steps: [{
    type: String,
    required: true
  }],
  createdAt: {
    type: Date,
    default: Date.now
  }
});

// Product Schema
const ProductSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  brand: {
    type: String,
    required: true
  },
  category: {
    type: String,
    enum: ['cleanser', 'toner', 'serum', 'moisturizer', 'sunscreen', 'treatment'],
    required: true
  },
  skinTypes: [{
    type: String,
    enum: ['dry', 'oily', 'combination', 'sensitive', 'normal']
  }],
  skinConcerns: [{
    type: String,
    enum: ['acne', 'wrinkles', 'darkSpots', 'redness', 'dullness', 'pigmentation']
  }],
  description: {
    type: String
  },
  ingredients: [{
    type: String
  }],
  createdAt: {
    type: Date,
    default: Date.now
  }
});

// Recommendation Schema
const RecommendationSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  product: {
    type: Schema.Types.ObjectId,
    ref: 'Product',
    required: true
  },
  routine: {
    type: Schema.Types.ObjectId,
    ref: 'Routine'
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const User = mongoose.model('User', UserSchema);
const Routine = mongoose.model('Routine', RoutineSchema);
const Product = mongoose.model('Product', ProductSchema);
const Recommendation = mongoose.model('Recommendation', RecommendationSchema);

module.exports = {
  User,
  Routine,
  Product,
  Recommendation
};