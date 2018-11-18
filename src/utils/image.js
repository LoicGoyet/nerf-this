export const testImage = (url, timeoutT) =>
  new Promise((resolve, reject) => {
    const timeout = timeoutT || 5000;
    let timer;
    const img = new Image();

    img.onerror = img.onabort = function() {
      clearTimeout(timer);
      reject('error');
    };

    img.onload = function() {
      clearTimeout(timer);
      resolve('success');
    };

    timer = setTimeout(() => {
      // reset .src to invalid URL so it stops previous
      // loading, but doens't trigger new load
      img.src = '//!!!!/noexist.jpg';
      reject('timeout');
    }, timeout);

    img.src = url;
  });
