
function Cal1() 
{
    var getMonth = (document.getElementById("ddmmyy1").valueAsDate.getMonth());
    var getMonthNum = (getMonth ) * 30;
    var getDay = (document.getElementById("ddmmyy1").valueAsDate.getDate());
    var t = Math.abs(getMonthNum + getDay);
    var C = 727.608;
    var A = 43.725;
    var incos = (((2 * (3.14)) / 365) * (t - 172));
    var cos = Math.cos(incos);
    var result = ((A * cos) + C) * 10;
    result /= 10;
    var resultFinal = result.toFixed(3);
    document.getElementById("result1").innerHTML = resultFinal;
}    
       
function Cal2() 
{
    var getMonth = (document.getElementById("ddmmyy2").valueAsDate.getMonth());
    var getMonthNum = (getMonth ) * 30;
    var getDay = (document.getElementById("ddmmyy2").valueAsDate.getDate());
    var t = Math.abs(getMonthNum + getDay);    
    var C = 727.558;
    var A = 37.225;
    var incos = (((2 * (3.14)) / 365) * (t - 172));
    var cos = Math.cos(incos);
    var result = ((A * cos) + C) * 10;
    result /= 10;
    var resultFinal = result.toFixed(3);
    document.getElementById("result2").innerHTML = resultFinal;
}    
    
    