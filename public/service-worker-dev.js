(function() {
    'use strict';
  
    var staticFilesToCache = [
      '.',
      'index.html',
      '/static/js/bundle.js',
      'http://localhost:3000/static/media/icomoon.b392f101.woff2',
      'https://fonts.gstatic.com/s/roboto/v16/RxZJdnzeo3R5zSexge8UUVtXRa8TVwTICgirnJhmVJw.woff2'
    ];
  
    var staticCaches = 'wap-hotels';  //Will use Cache, falling back to Network.
    var apiCaches = "wap-hotels-api"; //Will use Cache then Network.
  
    self.addEventListener('install', function(event) {
      console.info('##Service Worker## Attempting to install service worker and cache static assets');
      event.waitUntil(
        caches.open(staticCaches)
              .then(function(cache) {
                return cache.addAll(staticFilesToCache);
              })
              // .then(function(){
              //    self.skipWaiting();
              // })
      );
    });
  
    self.addEventListener('activate', function(event) {
      console.log('##Service Worker## Activating new service worker...');
  
      var cacheWhitelist = [staticCaches,apiCaches];
  
      event.waitUntil(
        caches.keys().then(function(cacheNames) { console.log('cacheNames', cacheNames);
          return Promise.all(
             cacheNames.map(function(cacheName) {
              if (cacheWhitelist.indexOf(cacheName) === -1) {
                return caches.delete(cacheName);
              }
            })
          );
        })
        // .then(function(val){
        //    return self.clients.claim()
        // })
      );
    });
  
    /* if found in CACHE then return from CACHE else from NETWORK */
    self.addEventListener('fetch', function(event) {
      // console.log('Fetch event for >>>> ', event.request.url);
      event.respondWith(
        caches.match(event.request)
          .then(function(response) {
            if (response) {
              console.log('Found ', event.request.url, ' in cache');
              return response;
            }
  
            console.warn('##Service Worker##  Not in Cache... Making Network request for  ', event.request.url);
  
            return fetch(event.request)
                    .then(function(response) {
                      if (response.status === 404) {
                        return caches.match('/offline.html');
                      }
                      //This code prevents caching Github api responses.
                      if (event.request.url.indexOf('github') > -1 ) {
                          console.info('##Service Worker##  GitHub API requests will not be cached.');
                          return response;
                      }
  
                      return response
                    });
          })
          .catch(function(error) {
            console.error('##Service Worker##  Failed to fetch', event.request.url);
            return caches.match('/offline.html');
          })
      );
    });
  
  })();
  