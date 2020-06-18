function BarChart(value) {
  var dataUrl = "/api/v1.0/Final_Airlines_Data";
  d3.json("/api/v1.0/Final_Airlines_Data").then((data)=>{
    
    console.log(data);
    console.log(data.map(item=>item.Origin_09));

    countwn09 = 0; 
    countdl09 = 0;
    countwn18 = 0; 
    countdl18 = 0;

    for (var i = 0; i < data.length; i++) {
      if (data[i].Origin_09 == value && data[i]['Airline_Identifier'] == 'WN')   {
        countwn09 = countwn09+1;
      }
      if (data[i].Origin_09 == value && data[i]['Airline_Identifier'] == 'DL')   {
        countdl09 = countdl09+1; 
      }

      if (data[i].Origin_18 == value && data[i]['Airline_Identifier'] == 'WN')   {
        countwn18 = countwn18+1;
      }
      if (data[i].Origin_18 == value && data[i]['Airline_Identifier'] == 'DL')   {
        countdl18 = countdl18+1; 
      }

    };
   
    countm = 0
    countt = 0 
    countw = 0 
    countth=0 
    countf=0 
    countsa=0 
    countsu = 0 
    sumARR_DELAY_18m = 0 
    sumARR_DELAY_18t = 0 
    sumARR_DELAY_18w = 0 
    sumARR_DELAY_18th=0 
    sumARR_DELAY_18f=0 
    sumARR_DELAY_18sa=0 
    sumARR_DELAY_18su = 0 
    sumDEP_DELAY_18m = 0 
    sumDEP_DELAY_18t = 0 
    sumDEP_DELAY_18w = 0 
    sumDEP_DELAY_18th=0 
    sumDEP_DELAY_18f=0 
    sumDEP_DELAY_18sa=0 
    sumDEP_DELAY_18su = 0 

    for (var i = 0; i < data.length; i++) {
      if (data[i].Origin_18 == value && data[i]['Weekday_of_Flight_18'] == 'Monday')   {
        countm = countm+1;
        sumARR_DELAY_18m = (data[i]['ARR_DELAY_18'] + sumARR_DELAY_18m) ; 
        sumDEP_DELAY_18m = (data[i]['DEP_DELAY_18'] + sumDEP_DELAY_18m) ;   
      }
      else if (data[i].Origin_18 == value && data[i]['Weekday_of_Flight_18'] == 'Tuesday')   {
        countt = countt+1; 
        sumARR_DELAY_18t = (data[i]['ARR_DELAY_18'] + sumARR_DELAY_18t) ; 
        sumDEP_DELAY_18t = (data[i]['DEP_DELAY_18'] + sumDEP_DELAY_18t) ; 
      }
      else if (data[i].Origin_18 == value && data[i]['Weekday_of_Flight_18'] == 'Wednesday')   {
        countw = countw+1;
        sumARR_DELAY_18w = (data[i]['ARR_DELAY_18'] + sumARR_DELAY_18w); 
        sumDEP_DELAY_18w = (data[i]['DEP_DELAY_18'] + sumDEP_DELAY_18w) ; 
      }
      else if (data[i].Origin_18 == value && data[i]['Weekday_of_Flight_18'] == 'Thursday')   {
        countth = countth+1; 
        sumARR_DELAY_18th = (data[i]['ARR_DELAY_18'] + sumARR_DELAY_18th) ; 
        sumDEP_DELAY_18th = (data[i]['DEP_DELAY_18'] + sumDEP_DELAY_18th) ; 
      }
      else if (data[i].Origin_18 == value && data[i]['Weekday_of_Flight_18'] == 'Friday')   {
        countf = countf+1; 
        sumARR_DELAY_18f = (data[i]['ARR_DELAY_18'] + sumARR_DELAY_18f) ; 
        sumDEP_DELAY_18f = (data[i]['DEP_DELAY_18'] + sumDEP_DELAY_18f) ; 
      }
      else if (data[i].Origin_18 == value && data[i]['Weekday_of_Flight_18'] == 'Saturday')   {
        countsa = countsa+1; 
        sumARR_DELAY_18sa = (data[i]['ARR_DELAY_18'] + sumARR_DELAY_18sa) ; 
        sumDEP_DELAY_18sa = (data[i]['DEP_DELAY_18'] + sumDEP_DELAY_18sa) ; 
      }
      else if (data[i].Origin_18 == value && data[i]['Weekday_of_Flight_18'] == 'Sunday')   {
        countsu = countsu+1; 
        sumARR_DELAY_18su = (data[i]['ARR_DELAY_18'] + sumARR_DELAY_18su) ; 
        sumDEP_DELAY_18su = (data[i]['DEP_DELAY_18'] + sumDEP_DELAY_18su) ; 
      }

    };
    console.log(sumARR_DELAY_18m);
      Average_Overall_Delay = (sumDEP_DELAY_18m + sumDEP_DELAY_18t + sumDEP_DELAY_18w + sumDEP_DELAY_18th + sumDEP_DELAY_18f + sumDEP_DELAY_18sa + sumDEP_DELAY_18su) / (countwn18 + countdl18) 
      console.log(Average_Overall_Delay);
      var trace1= {
            x : ['Southwest','Delta'],
            y : [countwn09,countdl09], 
            name: '2009',
            type : "bar",
        
          }

        var trace2= {
            x : ['Southwest','Delta'],
            y : [countwn18,countdl18], 
            name: '2018',
            type : "bar",
        
          }
        
        var data = [trace1,trace2];
        var layout = {
          title: "Delay Count",
          width: 500,
          height: 500, 
          yaxis: {title: {text: "Number of Delays"}}
        };
        
        Plotly.newPlot("bar", data, layout); 
        console.log()
        var traces1 = {
          x: ['Monday', 'Tuesday', 'Wednesday', 'Thursday','Friday','Saturday','Sunday'],
          y: [sumARR_DELAY_18m/countm,sumARR_DELAY_18t/countt,sumARR_DELAY_18w/countw,sumARR_DELAY_18th/countth,sumARR_DELAY_18f/countf,sumARR_DELAY_18sa/countsa,sumARR_DELAY_18su/countsu],
          type: 'scatter',
          name: 'Arrivals'
        };
        
        var traces2 = {
          x: ['Monday', 'Tuesday', 'Wednesday', 'Thursday','Friday','Saturday','Sunday'],
          y: [sumDEP_DELAY_18m/countm,sumDEP_DELAY_18t/countt,sumDEP_DELAY_18w/countw,sumDEP_DELAY_18th/countth,sumDEP_DELAY_18f/countf,sumDEP_DELAY_18sa/countsa,sumDEP_DELAY_18su/countsu],
          type: 'scatter',
          name: 'Departures'
        };
        
        var data1 = [traces1, traces2];

        var layout1 = {title: "Average Arrival/Departure time based on Day of the Week",
        width: 1000,
        height: 500, 
        xaxis: {title: {text: "Day of the Week"}},
        yaxis: {title: {text: "Average Delay Time (Hour)"}}
      };

        
        Plotly.newPlot("Line_chart", data1,layout1);



        var data = [
          {
            domain: { x: [0, 1], y: [0, 1] },
            value: Average_Overall_Delay,
            title: { text: "Average Departure Time (Hours)" },
            type: "indicator",
            mode: "gauge+number+delta",
            delta: { reference: 1.5 },
            gauge: { axis: { range: [null, 4] } }
          }
        ];
        
        var layout = { width: 500, height: 500 };
        Plotly.newPlot("Gauge_chart", data, layout);


      //}).catch(function(error) {
      //   console.log(error)
      });
      
};

function BarChart1(value) {
  var dataUrl = "/api/v1.0/Final_Airlines_Data";
  
  d3.json(dataUrl).then(function(data) {  //, function(error, data){   //}
    
    console.log(data);

    countwn09 = 0; 
    countdl09 = 0;
    countwn18 = 0; 
    countdl18 = 0;

    for (var i = 0; i < data.length; i++) {
      if (data[i].Flight_By_Month == value && data[i]['Airline_Identifier'] == 'WN')   {
        countwn09 = countwn09+1;
      }
      if (data[i].Flight_By_Month == value && data[i]['Airline_Identifier'] == 'DL')   {
        countdl09 = countdl09+1; 
      }

      if (data[i].Flight_By_Month == value && data[i]['Airline_Identifier'] == 'WN')   {
        countwn18 = countwn18+1;
      }
      if (data[i].Flight_By_Month == value && data[i]['Airline_Identifier'] == 'DL')   {
        countdl18 = countdl18+1; 
      }

    };

    countm = 0
    countt = 0 
    countw = 0 
    countth=0 
    countf=0 
    countsa=0 
    countsu = 0 
    sumARR_DELAY_18m = 0 
    sumARR_DELAY_18t = 0 
    sumARR_DELAY_18w = 0 
    sumARR_DELAY_18th=0 
    sumARR_DELAY_18f=0 
    sumARR_DELAY_18sa=0 
    sumARR_DELAY_18su = 0 
    sumDEP_DELAY_18m = 0 
    sumDEP_DELAY_18t = 0 
    sumDEP_DELAY_18w = 0 
    sumDEP_DELAY_18th=0 
    sumDEP_DELAY_18f=0 
    sumDEP_DELAY_18sa=0 
    sumDEP_DELAY_18su = 0 

    for (var i = 0; i < data.length; i++) {
      if (data[i].Flight_By_Month == value && data[i]['Weekday_of_Flight_18'] == 'Monday')   {
        countm = countm+1;
        sumARR_DELAY_18m = (data[i]['ARR_DELAY_18'] + sumARR_DELAY_18m) ; 
        sumDEP_DELAY_18m = (data[i]['DEP_DELAY_18'] + sumDEP_DELAY_18m) ;   
      }
      else if (data[i].Flight_By_Month == value && data[i]['Weekday_of_Flight_18'] == 'Tuesday')   {
        countt = countt+1; 
        sumARR_DELAY_18t = (data[i]['ARR_DELAY_18'] + sumARR_DELAY_18t) ; 
        sumDEP_DELAY_18t = (data[i]['DEP_DELAY_18'] + sumDEP_DELAY_18t) ; 
      }
      else if (data[i].Flight_By_Month == value && data[i]['Weekday_of_Flight_18'] == 'Wednesday')   {
        countw = countw+1;
        sumARR_DELAY_18w = (data[i]['ARR_DELAY_18'] + sumARR_DELAY_18w); 
        sumDEP_DELAY_18w = (data[i]['DEP_DELAY_18'] + sumDEP_DELAY_18w) ; 
      }
      else if (data[i].Flight_By_Month == value && data[i]['Weekday_of_Flight_18'] == 'Thursday')   {
        countth = countth+1; 
        sumARR_DELAY_18th = (data[i]['ARR_DELAY_18'] + sumARR_DELAY_18th) ; 
        sumDEP_DELAY_18th = (data[i]['DEP_DELAY_18'] + sumDEP_DELAY_18th) ; 
      }
      else if (data[i].Flight_By_Month == value && data[i]['Weekday_of_Flight_18'] == 'Friday')   {
        countf = countf+1; 
        sumARR_DELAY_18f = (data[i]['ARR_DELAY_18'] + sumARR_DELAY_18f) ; 
        sumDEP_DELAY_18f = (data[i]['DEP_DELAY_18'] + sumDEP_DELAY_18f) ; 
      }
      else if (data[i].Flight_By_Month == value && data[i]['Weekday_of_Flight_18'] == 'Saturday')   {
        countsa = countsa+1; 
        sumARR_DELAY_18sa = (data[i]['ARR_DELAY_18'] + sumARR_DELAY_18sa) ; 
        sumDEP_DELAY_18sa = (data[i]['DEP_DELAY_18'] + sumDEP_DELAY_18sa) ; 
      }
      else if (data[i].Flight_By_Month == value && data[i]['Weekday_of_Flight_18'] == 'Sunday')   {
        countsu = countsu+1; 
        sumARR_DELAY_18su = (data[i]['ARR_DELAY_18'] + sumARR_DELAY_18su) ; 
        sumDEP_DELAY_18su = (data[i]['DEP_DELAY_18'] + sumDEP_DELAY_18su) ; 
      }

    };
    
        Average_Overall_Delay = (sumDEP_DELAY_18m + sumDEP_DELAY_18t + sumDEP_DELAY_18w + sumDEP_DELAY_18th + sumDEP_DELAY_18f + sumDEP_DELAY_18sa + sumDEP_DELAY_18su) / (countwn18 + countdl18) 
        console.log(Average_Overall_Delay);
        var trace1= {
          x : ['Southwest','Delta'],
          y : [countwn09,countdl09], 
          name: '2009',
          type : "bar",
      
        }
    
        var trace2= {
            x : ['Southwest','Delta'],
            y : [countwn18,countdl18], 
            name: '2018',
            type : "bar",
        
          }
      
        var data = [trace1,trace2];
        var layout = {
          title: "Delay Count",
          width: 500,
          height: 500, 
          yaxis: {title: {text: "Number of Delays"}}
        };
      
        Plotly.newPlot("bar", data, layout); 
    
        var traces1 = {
          x: ['Monday', 'Tuesday', 'Wednesday', 'Thursday','Friday','Saturday','Sunday'],
          y: [sumARR_DELAY_18m/countm,sumARR_DELAY_18t/countt,sumARR_DELAY_18w/countw,sumARR_DELAY_18th/countth,sumARR_DELAY_18f/countf,sumARR_DELAY_18sa/countsa,sumARR_DELAY_18su/countsu],
          type: 'scatter',
          name: 'Arrivals'
          };
      
        var traces2 = {
          x: ['Monday', 'Tuesday', 'Wednesday', 'Thursday','Friday','Saturday','Sunday'],
          y: [sumDEP_DELAY_18m/countm,sumDEP_DELAY_18t/countt,sumDEP_DELAY_18w/countw,sumDEP_DELAY_18th/countth,sumDEP_DELAY_18f/countf,sumDEP_DELAY_18sa/countsa,sumDEP_DELAY_18su/countsu],
          type: 'scatter',
          name: 'Departures'
        };
      var wh = console.log(sumDEP_DELAY_18m)
      var data1 = [traces1, traces2];
      console.log(data1)
      var layout1 = {title: "Average Arrival/Departure time based on Day of the Week",
        width: 1000,
        height: 500, 
        xaxis: {title: {text: "Day of the Week"}},
        yaxis: {title: {text: "Average Delay Time (Hour)"}}
      };
    
      
      Plotly.newPlot("Line_chart", data1,layout1);
      var data = [
            {
              domain: { x: [0, 1], y: [0, 1] },
              value: Average_Overall_Delay,
              title: { text: "Average Departure Time (Hours)" },
              type: "indicator",
              mode: "gauge+number+delta",
              delta: { reference: 1.5 },
              gauge: { axis: { range: [null, 4] } }
            }
          ];
          
          var layout = { width: 500, height: 500 };
          Plotly.newPlot("Gauge_chart", data, layout);
    
    
  // }).catch(function(error) {
  //   console.log(error)
  });
        
};


  // selecting the selDataset of the html to append the dropdown menu 

function initial(){ 
    
  var dropDown = d3.select("#selDataset");
  var firstSample = dropDown.property('value');
     console.log(firstSample)
    BarChart(firstSample);
   
};

function initial1(){ 
  
  var dropDown = d3.select("#selDataset1");
  var firstSample = dropDown.property('value');

    console.log(firstSample)
    BarChart1(firstSample);
  
    
};


function optionChanged(newSample) {
    // Fetch new data each time a new sample is selected
    BarChart(newSample);
};

function optionChanged1(newSample) {
    // Fetch new data each time a new sample is selected
    BarChart1(newSample);
};
  

initial();
initial1();





