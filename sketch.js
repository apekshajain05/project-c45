var form;
var taskName;
var input,button,title;
var ToDo;


function setup() {
  createCanvas(windowWidth,windowHeight);
  database=firebase.database(); 
  title=createElement("h1");
  title.html("TO DO LIST");
  title.position(430,30);
   input=createInput("Enter a Task");
   input.position(470,150);
   button=createButton("Add Task");
   button.position(650,150);
   button.mousePressed(submitData);
  
}

function draw() {
  background(255,255,255);  
  

}

function submitData(){
  textSize(30);
  text("Added",400,200);
  var data={
    taskName: input.value()
  }
  var db=database.ref("ToDo");
  db.push(data);
  //console.log(data);
  
 
}
