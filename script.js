let textarea = document.getElementById("textArea");
textarea.addEventListener("input", function(){
  
    let text=this.value;
    let char = text.length;
    document.getElementById("char").innerHTML=char;
    
   //The trim() method removes whitespace from both ends of a string and returns a new string
    text = text.trim();

   // The split() method divides a String into an ordered list of substrings
    text=text.split(" ");

   //The filter() method creates a new array with all elements that pass the test
    text =text.filter(function(elm){
        return elm !="";
    });
    
   
    document.getElementById("word").innerHTML=text.length;

})