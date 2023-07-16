function leapYears(leapyear){
    var leapyear = prompt("Can you please give a year ?");
    if(leapyear % 4 === 0 && leapyear % 100 != 0){
         alert(leapyear + " is a leap year.")
        return(0);
        
    }
    
    if(leapyear % 4 === 0 && leapyear % 100 === 0 && leapyear % 400 === 0){
        alert( leapyear +" is a leap year.")
        return(0);
    }

    else {
          alert( leapyear + " is not a leap year .")
       
    }
    
}

leapYears();
