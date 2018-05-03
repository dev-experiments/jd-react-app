import SwLib from './JDLibrary/pwa/sw-lib';

//const enableCache = false;

//const CACHE_NAME = 'pwa-app-cache';
let swUrl = '';
export default function Start() {
  if (process.env.NODE_ENV === 'production') {
     swUrl = `${process.env.PUBLIC_URL}/service-worker.js`; 
  }else{
     swUrl = `${process.env.PUBLIC_URL}/service-worker-dev.js`; 
  }
  SwLib.start_worker(swUrl, 'IGNORE'); // pass IGNORE to work in local
}