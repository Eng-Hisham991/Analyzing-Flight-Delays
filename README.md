# Analzying Flight Delays 
<br> 

<img src = "https://www.aircraftcompare.com/wp-content/uploads/2019/12/airplane-sunset.jpg" height = 400 width = 600>

#### Dataset: https://www.kaggle.com/yuanyuwendymu/airline-delay-and-cancellation-data-2009-2018

## Background
<br> 

The purpose of this project is to analyze the flight delays/cancellations for two airlines, Southwest and Delta, in 2 different years, 2009 and 2018. 

We will analyze the number of delays and the time it takes till departure after delay based off the month and the airport. We will specifically be looking at more busy months like June, July, August, and December. 

## Steps 
<br> 

### Task 1: Data Exploration and Cleanup 

Our first task was to minimize our data so it can be optimal for use. This was done in Excel and in Python. Excel was used to remove unnecessary rows and Python was used to filter the data based on the months and airlines of interest and to join the 2009 and 2018 data together. 

### Task 2: Uploading the data to MongoDB 

The next step was to upload the data to MongoDB using Mongo atlas to be used later in the flask app. 

### Task 3: Creating the Flask app 

Create the flask app with different routes and import the data from Mongo atlas on the cloud to the app. 

### Task 4: Create the js, HTML, and CSS for the visualizations 

In js, code was modified to create the 3 visualizations. The first is a bar chart, the second a gauge chart, and the third a line chart. As we did this, the HTML of the dashboard was created as well as features such as buttons and dropdowns. 

### Task 5: Uploading the app in AWS through Elastic Beanstalk

We uploaded the app into AWS through elastic beanstalk following different instructions such as creating different files txt and py and uploading them. 

## How to use

 - Select from the lists a departure airport then the month then the charts will be updated accordingly.
 
 App is available on AWS: https://ukm Enjoy!
 
 Hisham (@Eng-Hisham991), Abdullah (@Abdullah101298) and Mercy (@mercymuigai)






