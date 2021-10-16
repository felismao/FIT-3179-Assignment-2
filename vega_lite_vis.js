var vg_1 = "volcanic_activity.json";
vegaEmbed("#volcanic-activity", vg_1, {"actions": false}).then(function(result) {
 // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);

var vg_2 ="volcanic_number_year.json";
vegaEmbed("#volcanic-number-peryear", vg_2, {"actions": false}).then(function(result) {
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
   }).catch(console.error);

var vg_3 ="top_active_volcano.json";
vegaEmbed("#top-volcano", vg_3, {"actions": false}).then(function(result) {
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
   }).catch(console.error);

 var vg_4 ="VEI_barchart.json";
 vegaEmbed("#VEI-barchart", vg_4, {"actions": false}).then(function(result) {
 // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
 }).catch(console.error);

 var vg_5 ="most_death.json";
vegaEmbed("#most-death", vg_5, {"actions": false}).then(function(result) {
// Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);
   