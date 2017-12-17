
  const timings = (entryType = null, name = null) => {
    let entries;

    if (entryType) {
      entries = window.performance.getEntriesByType(entryType);
    } else {
      entries = window.performance.getEntries();
    }

    console.table(entries, ['name', 'startTime', 'responseEnd', 'duration', 'entryType', 'initiator']);

    if (name) {
      const entry = window.performance.getEntriesByName(name)[0];
      console.log(`${name} took ${entry.responseEnd - entry.startTime}ms to fetch`);
    }
  };

  const sendMetrics = (metrics) => {
    navigator.sendBeacon('/collector', JSON.stringify(metrics));
  };

//  window.addEventListener('DOMContentLoaded', () => {
//    console.log('====Document is ready=====', window.performance);
//
//    timings('navigation');
//    timings('resource');
//    timings('marks');
//    timings('measures');
//    timings('server');
//  });

  window.addEventListener('load', () => {
    console.log('=====All resources finished loading=====', window.performance);

    timings('navigation');
    timings('resource');
    timings('marks');
    timings('measures');
    timings('server');

    const metrics = {
      measures: performance.getEntriesByType('measure'),
      navigation: performance.getEntriesByType('navigation'),
      resources: performance.getEntriesByType('resource')
    };

    sendMetrics(metrics);
  });

  document.getElementById('downloadResourceTest').addEventListener('click', () => {
      console.clear();
      const entryType = 'resource';

      console.log('=========Before Download========')
      console.log('=========Resources========')
      timings(entryType);

      (() => {
        performance.mark('start_image_download');
        const uri = 'https://www.w3.org/Icons/w3c_main.png';
        const image1 = new Image();

        image1.addEventListener('load', () => {
          console.log('=========After Download========')
          console.log('=========Resources========')
          timings(entryType, uri);
          performance.mark('end_image_download');
          console.log('=========All marks========')
          timings('mark');
          performance.measure('measure_download_image', 'start_image_download', 'end_image_download');
          console.log('=========All measures========')
          timings('measure');

          document.getElementById('images').appendChild(image1);
        });

        image1.src = uri;
      })();
  })

  document.getElementById('collectMetrics').addEventListener('click', () => {
    const metrics = {
      measures: performance.getEntriesByType('measure'),
    };

    sendMetrics(metrics);
  });

