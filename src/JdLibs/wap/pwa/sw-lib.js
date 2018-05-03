class SwLib {
  isLocalhost() {
    return Boolean(
      window.location.hostname === 'localhost' ||
      // [::1] is the IPv6 localhost address.
      window.location.hostname === '[::1]' ||
      // 127.0.0.1/8 is considered localhost for IPv4.
      window.location.hostname.match(
        /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/
      )
    );
  }
  start_worker(swUrl, env) {
    if ((env === 'IGNORE' || process.env.NODE_ENV === 'production') && 'serviceWorker' in navigator) {
      const publicUrl = new URL(process.env.PUBLIC_URL, window.location);
      if (publicUrl.origin !== window.location.origin) {
        console.log('Error in origin url');
        return;
      }
      this.load(swUrl);
    }
  }

  load(swUrl) {
    window.addEventListener('load', () => {
      if (this.isLocalhost()) {
        this.checkValidServiceWorker(swUrl).then(response => {
          this.registerValidSW(swUrl);
          navigator.serviceWorker.ready.then(() => {
            console.log('This web app is being served cache-first by a service worker.');
          });

        }).catch(err => {
          console.log('checkValidServiceWorker Error', err);
        });

      } else {
        this.registerValidSW(swUrl);
      }
    });
  }

  checkValidServiceWorker(swUrl) {
    return fetch(swUrl)
      .then(response => {
        if (response.status === 404 || response.headers.get('content-type').indexOf('javascript') === -1) {
          // No service worker found. Probably a different app. Reload the page.
          navigator.serviceWorker.ready.then(registration => {
            registration.unregister().then(() => {
              window.location.reload();
            });
          });
          throw new Error('Not valid sw')
        }

      });
  }

  registerValidSW(swUrl) {
    navigator.serviceWorker
      .register(swUrl)
      .then(registration => {
        registration.onupdatefound = () => {
          console.log('inn onupdatefound');
          const installingWorker = registration.installing;
          installingWorker.onstatechange = () => {
            if (installingWorker.state === 'installed') {
              if (navigator.serviceWorker.controller) {
                // At this point, the old content will have been purged and
                // the fresh content will have been added to the cache.
                // It's the perfect time to display a "New content is
                // available; please refresh." message in your web app.
                console.log('New content is available; please refresh.');
              } else {
                // At this point, everything has been precached.
                // It's the perfect time to display a
                // "Content is cached for offline use." message.
                console.log('Content is cached for offline use.');
              }
            }
          };
        };
      })
      .catch(error => {
        console.error('Error during service worker registration:', error);
      });
  }
}
export default new SwLib();