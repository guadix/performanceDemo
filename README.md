# performanceDemo
A very small demostration of some of the concepts talked on: https://docs.google.com/presentation/d/10dYWrEQdvUIZJ9PG18GVDOGw9Hhsp77IVs-uLlspLuA/edit#slide=id.gc6f90357f_0_47

Mainly User Timing measures and marks, Navigation and Resource Timing. Also using the Beacon to send data.

## Installation

```
$ git clone <this repo>
$ cd <this repo>
$ npm install
$ node index.js
```

Open http://localhost:3000

## Using it
Have the browser console open all the time, as all the information is displayed there.

### Navigation and Resource Timings
On load, it will appear on the console the performance entries for these two interface. After clicking on Download Resource Test, the logs will appear again, this time with the data of the new resource.

### User Timing Measure and Marks
After clicking Download Resource Test, a mark will be added. When the resource is downloaded another mark is added and the measure taken. The measure will appear on the console.

### Beacon
On page load a beacon is sent to the server, with the Resource and Navigation entries.
After effectively downloading the image, another beacon is sent just with the measure taken in the previous step.
