import convict from 'convict';
import validator from 'convict-format-with-validator';
import { RestSchema } from './index.js';

convict.addFormats(validator);

export const configRestSchema = convict<RestSchema>({
  HOST: {
    doc: 'IP address of incoming connections',
    format: 'ipaddress',
    env: 'HOST',
    default: null
  },
  PORT: {
    doc: 'Port for incoming connections',
    format: 'port',
    env: 'PORT',
    default: null
  },
  SALT: {
    doc: 'Salt for password hash',
    format: String,
    env: 'SALT',
    default: null
  },
  DB_HOST: {
    doc: 'IP address of the database server (MongoDB)',
    format: 'ipaddress',
    env: 'DB_HOST',
    default: null
  },
  DB_USER: {
    doc: 'Username to connect to the database',
    format: String,
    env: 'DB_USER',
    default: null,
  },
  DB_PASSWORD: {
    doc: 'Password to connect to the database',
    format: String,
    env: 'DB_PASSWORD',
    default: null,
  },
  DB_PORT: {
    doc: 'Port to connect to the database (MongoDB)',
    format: 'port',
    env: 'DB_PORT',
    default: null,
  },
  DB_NAME: {
    doc: 'Database name (MongoDB)',
    format: String,
    env: 'DB_NAME',
    default: null
  },
  UPLOAD_DIRECTORY: {
    doc: 'Directory for upload files',
    format: String,
    env: 'UPLOAD_DIRECTORY',
    default: null
  },
  STATIC_DIRECTORY: {
    doc: 'Directory with static resources',
    format: String,
    env: 'STATIC_DIRECTORY',
    default: null
  },
  JWT_SECRET: {
    doc: 'Secret for sign JWT',
    format: String,
    env: 'JWT_SECRET',
    default: null
  },
  JWT_ALGORITHM: {
    doc: 'Algorithm for sign JWT',
    format: String,
    env: 'JWT_ALGORITHM',
    default: null
  },
  JWT_EXPIRED_TIME: {
    doc: 'Expires in for JWT',
    format: String,
    env: 'JWT_EXPIRED_TIME',
    default: null
  }
});
