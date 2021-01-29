import express from 'express';
import { Aggregate } from 'mongoose';

import Restaurant from '../model/restaurant';
import { RestaurantTypeDb } from '../types';
const restaurantsRouter = express.Router();

// eslint-disable-next-line @typescript-eslint/no-misused-promises
restaurantsRouter.get('/', async (req, res) => {
  const currentLocation = [ Number(req.query.lon), Number(req.query.lat) ];
  const itemLimit = 10;
  const maxDistance = 1500;
  const monthDiff = 4;
  const date = new Date();
  date.setMonth(date.getMonth() - monthDiff);

  const promisePopularity = Restaurant.find({
    loc: {
      $near: {
          $geometry: { type: 'Point',  coordinates: currentLocation },
          $maxDistance: maxDistance
      }
    }
  }, null, {
    sort: {
      online: -1,
      popularity: -1
    },
    limit: itemLimit,
  }) as Promise<RestaurantTypeDb[]>;

  const promiseNew = Restaurant.find(
    {
      launch_date: { $gte: date },
      loc: {
        $near: {
          $geometry: { type: 'Point',  coordinates: currentLocation },
          $maxDistance: maxDistance
        }
      }
    },
    null,
    {
      sort: {
        online: -1,
        launch_date: -1
      },
      limit: itemLimit,
    }) as Promise<RestaurantTypeDb[]>;

  const promiseNewNearby: Aggregate<RestaurantTypeDb[]> = Restaurant.aggregate([
    {
      $geoNear: {
        near: {
          type: 'Point',
          coordinates: currentLocation
        },
        key: 'loc',
        distanceField: 'dist',
        maxDistance: maxDistance,
      },
    },
    { $sort: { online: -1, dist: 1 } },
    { $limit: itemLimit }
  ]);

  const [
    restaurantsPopularity,
    restaurantsNew,
    restaurantsNearby
  ] = await Promise.all([
    promisePopularity,
    promiseNew,
    promiseNewNearby
  ]);

  const responseData = {
    sections: [
      {
        title: 'Popular Restaurants',
        restaurants: restaurantsPopularity
      },
      {
        title: 'New Restaurants',
        restaurants: restaurantsNew
      },
      {
        title: 'Nearby Restaurants',
        restaurants: restaurantsNearby.map(p => {
          return {
            blurhash: p.blurhash,
            launch_date: new Date(p.launch_date).toJSON().slice(0, 10),
            location: p.loc.coordinates,
            name: p.name,
            online: p.online,
            popularity: p.popularity,
          };
        }),
      }
    ]
  };

  res.json(responseData);
});

export default restaurantsRouter;