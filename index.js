
    function result(url='https://api.exchangerate.host/latest'){
    var tbl = document.getElementById('inf');
    tbl.innerHTML = ""
    

    var requestURL = url
    var request = new XMLHttpRequest()
    request.open('GET', requestURL)
    request.responseType = 'json'
    request.send()
    request.onload = function() {
    var response = request.response.rates;
    var columns = ['title', 'price']
    var table = document.getElementById('inf');
    var array = Object.entries(response)
        for (var i = 0; i < array.length; i++)
    {
        var row = table.insertRow( -1 ); 
        for( var j = 0; j < columns.length; j++ ){
            var cell = row.insertCell( - 1 ); 
            cell.className = columns[j]; 
            cell.innerHTML = array[i][j]
        }
    }
     Object.keys(response).forEach((key) => {
        var s= document.getElementById('base');
      s.options[s.options.length]= new Option(key);
      
      })
     
}
}
document.addEventListener('DOMContentLoaded', (event) => {
        var e = result();
   });
function OnSelectionChange () {
    var choose = document.getElementById('base')
     var requestURL = 'https://api.exchangerate.host/latest?base='+choose.value;
     result(requestURL)
        }
   

 
