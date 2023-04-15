
        // var t = ;
        document.getElementById('ddmmyy').value = new_Date().toISOString().substring(0, 10);
        function date_new() {
            var time5 = (document.getElementById("ddmmyy").valueAsNumber);
            var getmonth = (document.getElementById("ddmmyy").valueAsDate.getMonth());
            var getday = (document.getElementById("ddmmyy").valueAsDate.getDate());
            var getMonthsubstract = (getmonth ) * 30;
            var getdaysubstract = (getday );
            var t = Math.abs(getMonthsubstract + getdaysubstract);
            console.log(cal);
            console.log(getmonth);
            console.log(getday);
            console.log(t);
            var A = 357;
            var incos = (((2 * (3.14)) / 365) * (t - 172));
            var cos = Math.cos(incos);
            var C = 739.5;
            var result = ((A * cos) + C) * 10;
            var xy = Math.floor(result);
            xy /= 10;
            var yx = Math.floor(xy / 60);
            document.getElementsByClassName("result1").innerHTML = xy;
            document.getElementById("alaskaHour").innerHTML = yx;
        }
    
        var time5 = (document.getElementById("ddmmyy").valueAsNumber);
        var getmonth = (document.getElementById("ddmmyy").valueAsDate.getMonth() + 1);
        var getday = (document.getElementById("ddmmyy").valueAsDate.getDate());
        var cal = (((((time5 / 1000) / 60) / 60) / 24) / 30) / 12;
        var getMonthsubstract = (getmonth - 6) * 30;
        var getdaysubstract = (getday - 21) - 2;
        var t = Math.abs(getMonthsubstract + getdaysubstract);
        while (t >= 173) {
            t -= 1;
        }
        var A = 357;
        var incos = (((2 * (3.14)) / 365) * (t - 172));
        var cos = Math.cos(incos);
        var C = 739.5;
        var result = ((A * cos) + C) * 10;
        var xy = (Math.floor(result));
        xy /= 10;
        var yx = Math.floor(xy / 60);
        document.getElementsByClassName("result1").innerHTML = xy;
        document.getElementById("alaskaHour").innerHTML = yx;
    