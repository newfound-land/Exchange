
 function MyChange(){
            var u = document.getElementById("change").value
            let arr = u.split(' ');
            var requestURL = 'https://api.exchangerate.host/latest?base='+arr[1];
            var request = new XMLHttpRequest();
           request.open('GET', requestURL);
           request.responseType = 'json';
           request.send();
           request.onload = function() {
             var response = request.response.rates;

             
             //let keys = Object.keys(response)
    //          let b = Object.entries(response)
    Object.keys(response).forEach((key) => {
        if(key==arr[1]){
            
    }
})
            Object.keys(response).forEach((keys) => {
                if(keys==arr[3]){
            console.log(keys)
                for (let s of Object.entries(response)) {
                        if(keys==s[0]){
                            let b= arr[0]*s[1]
                            console.log(b)
                            document.getElementById("res").innerHTML = b;
                                                  }   
                
            }
           
          
                }
            }) 
            
        }
     

 
    }

 