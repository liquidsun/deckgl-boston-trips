[**demo**](https://wonderful-easley-5aed11.netlify.com/) 

This is an example of the [deck.gl](https://deck.gl/#/examples/core-layers/trips-layer) trips layer for Boston BLue Bikes. 
The application is written by [github.com/stevekirks](https://github.com/stevekirks/deckgl-trips). 
with few amendments from my side:
- Animation speed logic is changed to be able to adjust animation minutes per second of real time
- Additional selection interface item and logic is added to be able to highlight all incoming trips for selected stations
- Minor interface adjustments

The source data - [Bluebikes history data](https://s3.amazonaws.com/hubway-data/index.html) for October 2019.
One wednesday and one sunday from this data are processed to appropriate for the application format.  

Trips routes are calculated using [Graphhopper](https://github.com/graphhopper/graphhopper) routing engine.

To run the application use the content of build folder and put it to a webserver.  
 
### Data format
Sample data is stored in the `public/data` folder.  
