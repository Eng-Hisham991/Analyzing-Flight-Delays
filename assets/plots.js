  
  function BarChart(value) {

    d3.json("Cleaned_Airlines_Data/Final.json").then((data)=> {

      console.log(data)

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

      Average_Overall_Delay = (sumDEP_DELAY_18m + sumDEP_DELAY_18t + sumDEP_DELAY_18w + sumDEP_DELAY_18th + sumDEP_DELAY_18f + sumDEP_DELAY_18sa + sumDEP_DELAY_18su) / (countwn18 + countdl18) 
    
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
          title: "Delay/Cancellation Count",
          width: 500,
          height: 500, 
          yaxis: {title: {text: "Number of Delays/Cancellations"}}
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
        
        var data1 = [traces1, traces2];

        var layout1 = {title: "Average Arrival/Departure time based on Day of the Week",
        width: 1000,
        height: 500, 
        xaxis: {title: {text: "Day of the Week"}},
        yaxis: {title: {text: "Average Delay Time (Hour)"}}
      };

        
        Plotly.newPlot('Line chart', data1,layout1);



        var data3 = [{
            domain: { x: [0, 1], y: [0, 1] },
            value: Average_Overall_Delay,
            title: { text: "Average Departure Time (Hours)" },
            type: "indicator",
            mode: "gauge+number+delta",
            delta: { reference: 2, 'increasing': {'color': "Red"},'decreasing': {'color': "Green"} },
            gauge: { axis: { range: [null, 4] }, 
            'steps': [{'range': [0, 2], 'color': 'green'},
              {'range': [2, 4], 'color': 'red'}], 
              'bar': {'color': "black"},
              'bgcolor': "white"}}
          ];
        
        
        var layout3 = { width: 500, height: 500 };
        Plotly.newPlot('Gauge chart', data3, layout3);



      });
      
    };

  // selecting the selDataset of the html to append the dropdown menu 

function initial(){ 
    
  var dropDown = d3.select("#selDataset");
  
  d3.json("Cleaned_Airlines_Data/Final.json").then((data)=> {
    
    // getting the sample names and looping through them to append each and its values to the dropdown
    var obj = {};
    var ret_arr = [];
    
    for (var i = 0; i < data.length; i++) {
        obj[data[i].Origin_18] = true;
    }
    for (var key in obj) {
        ret_arr.push(key);
    };
    
    console.log(ret_arr);
    for (var i = 0; i < ret_arr.length; i++) {
        dropDown.append("option")
                .text(ret_arr[i])
                .property("value",ret_arr[i]);
         // console.log(dropDown); 
    }
  
    // Use the first sample from the list to build the initial plots
    var firstSample = ret_arr[0];
    BarChart(firstSample);
  
  
  });
  
  };

  function optionChanged(newSample) {
    // Fetch new data each time a new sample is selected
    BarChart(newSample);
  }
  

initial()


