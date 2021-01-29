import mongoose from 'mongoose';

import { RestaurantTypeDb } from '../types';

const restaurantSchema = new mongoose.Schema({
  blurhash: {
    type: String,
    required: true,
  },
  launch_date: {
    type: Date,
    required: true,
  },
  loc: {
    type: {
      type: String,
      enum: ['Point'],
      required: true,
    },
    coordinates: {
      type: [Number],
      required: true,
    }
  },
  name: {
    type: String,
    required: true,
  },
  online: {
    type: Boolean,
    required: true,
  },
  popularity: {
    type: Number,
    required: true,
  }
});

restaurantSchema.index({ loc: '2dsphere' });

restaurantSchema.set('toJSON', {
  transform: (_document: any, returnObject: RestaurantTypeDb) => {
    const newReturnObject = {
      blurhash: returnObject.blurhash,
      launch_date: new Date(returnObject.launch_date).toJSON().slice(0, 10),
      location: returnObject.loc.coordinates,
      name: returnObject.name,
      online: returnObject.online,
      popularity: returnObject.popularity,
    };
    delete returnObject._id;
    delete returnObject.__v;
    return newReturnObject;
  },
});

const Restaurant = mongoose.model<RestaurantTypeDb>('Restaurant', restaurantSchema);

export default Restaurant;