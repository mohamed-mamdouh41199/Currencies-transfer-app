
let button_clicked = 0;

function get_from_to()
{
    button_clicked+=1;
    fetch("https://api.currencyfreaks.com/v2.0/rates/latest?apikey=df3d1160dff84e749941f49c74e61b7f")
    .then((result) =>
    {
        console.log(result)  //--> TO CHECK THE FETCH IS OK 
        let mydata =  result.json();    
        return mydata;
    })
    .then((currency) =>
    {
        
        from = document.getElementById('from').value
        to   = document.getElementById('to') .value

        
        from = from.toUpperCase()
        to = to .toUpperCase()
        
        

        console.log("THE RATE OF " + from +  "----->" +  (currency.rates[from]))
        console.log("THE RATE OF " + to +  "----->" +  (currency.rates[to]))


        console.log("=".repeat(40))

    
        // if (!isNaN(from) || !isNaN(to))
        // alert ("You must enter a valid currency code!")
        if(from in currency.rates && to in currency.rates)
        {
            console.log("From " + from + " to " + to)        
        


            if(currency.rates[from] > currency.rates[to]  || currency.rates[from] == currency.rates[to])
            {
                var Rate = (currency.rates[from]/currency.rates[to])
            }
    
            if(currency.rates[from] < currency.rates[to])
            {
                var Rate = (currency.rates[to]/currency.rates[from])
            }
                    
            // console.log(Rate)
    
    
    
            var element = document.getElementById("inner");
            
            var element_val = element.value
    
            // get the val in console
    
            var final_out = element_val*Rate
    
            if(currency.rates[from] > currency.rates[to])
            {
                var final_out = element_val/Rate
            }
    
            if(currency.rates[from] < currency.rates[to])
            {
                var final_out = element_val*Rate
            }
    
    
            console.log("The " + element_val + " " + from + " ---> "+"equals " + final_out + " "+ to );    
            
    
    
            // creation 
            
            let currencies_box = document.querySelector(".currencies")
    
            let result_box = document.querySelector(".output")
    
            let createdText = document.createTextNode("")
            result_box.appendChild(createdText);
            result_box.innerHTML = "";

            if( button_clicked === 1) // to make sure if my result box is clear 
            {
                let createdText = document.createTextNode(element_val + " " + from + " is equal " + final_out.toFixed(3) + " " + to)
                result_box.appendChild(createdText);
                button_clicked-=1
            }
            
            console.log(currencies_box);                        
        }
        else
        {
            console.log(from + " is fstk")            
            alert("please enter the valid currency CODE!")
        }               
        
     })  
     
}
