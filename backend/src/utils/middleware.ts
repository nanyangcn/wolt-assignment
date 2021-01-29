import { Request, Response, NextFunction } from 'express';
import logger from './logger';

const unknownEndpoint = (_req: Request, res: Response) => {
  res.status(404).send({
    error: 'unknown endpoint',
  });
};

const errorhandler = (err: Error, _req: Request, _res: Response, next: NextFunction): void => {
  logger.error(err.message);
  next(err);
};

export default {
  errorhandler,
  unknownEndpoint
};