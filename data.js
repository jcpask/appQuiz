/*
For each penguin, draw a line showing the quiz scores of that penguin
With so many penguins a legend and different colors would be meaningless, don't draw them.
For something extra, add a hover effect for the lines(mouseover and mouseout are the names of the events). Have the selected line change color and display a picture of the penguin that that line represents.
*/

var appPromise = d3.json("penguins/classData.json");
appPromise.then(
    function(penguins)
        {
          //functions to call
        }) 
//brings my data in, and calls the function to draw the table.

var screen={width:400, height:500}
var margins={top:10,right:50,bottom:50,left:50}

var setup=function(penguins)
{
    d3.select("svg")
    .attr('width',screen.width)
    .attr('height'),screen.height)
    .append('g')
    .attr('id','graph')
    .attr('transform','translate('+margins.left+','+margins.top+')');
    
var xScale=d3.scaleLinear()
    .domain([0,d3.max(penguins,function(penguin)
    {
        return d[0]
    })])
        .range([0,width])

var yScale=d3.scaleLinear()
    .domain([0,100])
    .range([height,0])

//var cScale=d3.scaleOrdinal(d3.schemePastel1)

var xAxis=d3.axisBottom(xScale)
var yAxis=d3.axisLeft(yscale)
d3.select('svg')
    .append('g')
    .classed('axis',true);

/*
1. Get svg to draw a scatterplot of quiz grade on day 1 for each penguin
2. Add button for day 2 quiz grades
3. Make function to add buttons for other quiz grades, and ensure they remove previous dots; 



var margin = {top: 20, right: 20, bottom: 30, left: 40},
    width = 960 - margin.left - margin.right,
    height = 500 - margin.top - margin.bottom;

var xValue = function(penguin) { return penguin.quiz[0].grade;}, // data -> value
    xScale = d3.scale.linear().range([0, width]), // value -> display
    xMap = function(d) { return xScale(xValue(d));}, // data -> display
    xAxis = d3.svg.axis().scale(xScale).orient("bottom");

var yValue = function(penguin) { return penguin.quiz[0].grade;} // data -> value
    yScale = d3.scale.linear().range([height, 0]), // value -> display
    yMap = function(d) { return yScale(yValue(d));}, // data -> display
    yAxis = d3.svg.axis().scale(yScale).orient("left");


//This function draws my table
var makeTable = function(penguins)
{
    //d3.select("#mainTable").remove();
     var rows = d3.select("#mainTable")
    .selectAll("tr")
    .data(penguins)
    .enter()
    .append("tr");
    
    //this adds a column of images of penguins 
    rows.append("td")
        .append("img")
        .attr("src",function(d)
        {
            return "penguins/" + d.picture;
        //look at why "penguins" etc.
        });

    //These addCol functions are self-designed (not from the language), and take functions as inputs to basically automate the table generating process 
    addCol(rows,function(penguin)
    {
        return penguin.final[0].grade;
    })
    
    addCol(rows,function(penguin)
    {
        return getQuizMean(penguins);
    }) 
     
}
//We want this addCol to be its own function and automate what we did from 37-47
//When building function like this, try leaving the inside of "function()" blank and figure it out as we move forward
//We add "rows" as parameter because it doesn't know what the hell rows is otherwise
var addCol=function(rows, fcn)
    {
       rows.append("td").text(fcn)
    
    }

//These functions calculate the means and other stuff used below as inputs
 var getGrade = function(penguins)
 {
    return penguins.quizes.grade;
 }

var getQuizMean = function(penguin)
    {
        return d3.mean(penguin.quizes,getGrade);
    }

//use this function addCol we created because it tells me what's going on, feels more intuitive, helps me remember; also, if our initial function had a small mistake and I copy/paste it a million times I have all those mistakes, just like adding CSS to everything is easier here too. REMEMBER: function can be packed up and used as a parameter; 

//To add text to next column, a function is needed.
    //Make functions when you realize you're doing too much work (maybe copy/paste a lot, etc.)
    //at its core, d3 is taking the data and creating something with html to match up
 
  /* rows.append("td").text(function(penguin)
        {
            return penguin.final[0].grade
            //study syntax for lines 37/39
        });
    
    //create new column of first quiz grade for each penguin
    rows.append("td").text(function(penguin)
        {
        return penguin.quizes[0].grade
    })*/
