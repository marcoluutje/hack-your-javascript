


function sneakPreview() {

  /* 
   * Select query demo
   */

  var myList = [{FirstName:"Chris",LastName:"Pearson"},
                {FirstName:"Kate",LastName:"Johnson"},
                {FirstName:"Josh",LastName:"Sutherland"},
                {FirstName:"John",LastName:"Ronald"},
                {FirstName:"Steve",LastName:"Pinkerton"}];
  
  
  var q = select FirstName, LastName from myList where FirstName === "Chris";
 
  console.log("Query output: ");
  console.log(q);
  
  
  /* 
   * "HAML" demo
   */
   
  var name = "Audience";
  
  var page = %html {
    %head %title "Hello Joy of Coding!"; 
    %body.main ;    
  };
   
  
  
   
}