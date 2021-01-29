import dotenv from 'dotenv';
import { decode } from 'js-base64';

dotenv.config();

const PORT = process.env.PORT || 3001;
const str = 'bW9uZ29kYitzcnY6Ly9uYW55YW5nY246bmFuMTk5M3lhbmc1NjMwQGNsdXN0ZXIwLnQ1aGdzLm1vbmdvZGIubmV0L3dvbHQtcmVzdGF1cmFudD9yZXRyeVdyaXRlcz10cnVlJnc9bWFqb3JpdHk=';
// eslint-disable-next-line @typescript-eslint/no-unsafe-call
const MONGODB_URI: string = decode(str) as string;

export default {
  PORT,
  MONGODB_URI
};