
function get_from_to()
{
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
        // document.write("The " + element_val + " " + from + " ---> "+"equals " + final_out + " "+ to ); 
        // document.write(`<h2> ${final_out}  </h2>`)   


       // creation 
        
       let select_ell = document.querySelector(".currencies")

       let out_box = document.querySelector(".output")

       let createdText = document.createTextNode(final_out.toFixed(2) + " " + to)


        // add the ele.
        
        // select_ell.setAttributeNode = (createdAtt);
        

        // Append text to ele
        out_box.appendChild(createdText);


        // Append el to ele
        select_ell.appendChild(out_box);


        // Append ele to body not in console
        document.body.appendChild(select_ell);
        console.log(select_ell);
     })           
}
