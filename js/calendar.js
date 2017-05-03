var arrivalDate = 0;
var departureDate = 0;
var lastDayOfMonthA = 0;
var lastDayOfMonthB = 0;
var lastClickedMonth = "";
var clickedMonth = "";
var intervalSelected = true;

function resetDates(){
	arrivalDate = 0;
	departureDate = 0;
}

function selectMonth(id, field, nextMonth){
	var side = id.substr(0,1);
	var sMonth = document.getElementById("month" + side.toUpperCase()).value;
	var sYear = document.getElementById("year" + side.toUpperCase()).value;
	document.getElementById(field).value = parseInt(sMonth) + nextMonth;
	if (field == "in_month") {
	    document.getElementById("in_year").value = sYear;
	} else {
	  document.getElementById("out_year").value = sYear;
	}

}

function unselectAll(id,date,lastDayOfMonthA,lastDayOfMonthB){
	var i = 1;
	while (i <= 42) {
	    if (document.getElementById("a" + i) != null) {
	        document.getElementById("a" + i).style.border = "none";
	    }
	    if (document.getElementById("b" + i) != null) {
	        document.getElementById("b" + i).style.border = "none";
	    }
	    arrivalDate = date;
	    departureDate = date;
	    document.getElementById("in_day").value = date;
	    if ((date == lastDayOfMonthB) && (clickedMonth == "b")) {
	        document.getElementById("out_day").value = 1;
	        setDepartureNextMonth(id);
	    } else if ((date == lastDayOfMonthA) && (clickedMonth == "a")) {
	        document.getElementById("out_day").value = 1;
	        setDepartureMonth("b1");
	    } else {
	        document.getElementById("out_day").value = parseInt(date) + 1;
	        setDepartureMonth(id);
	    }
	    setArrivalMonth(id);
	    i++;

	}
	intervalSelected = false;
}

function selectDates() {
    var in_day = parseInt(document.getElementById("in_day").value);
    var out_day = parseInt(document.getElementById("out_day").value);
    var in_month = parseInt(document.getElementById("in_month").value);
    var out_month = parseInt(document.getElementById("out_month").value);
    for (i = 1; i <= 42; i++) {
        var id = clickedMonth + i;
        if (document.getElementById(id).firstChild != null) {
            var date = document.getElementById(id).firstChild.nodeValue;
            if (date != null) {
                date = parseInt(date);
                if (
				     ( ((date >= in_day) && (date <= out_day)) && (in_month==out_month)) ||
                     (
                       (in_month != out_month) && (((clickedMonth == "a") && (date >= in_day)) )
                     )
                    ) {
                    if ((document.getElementById(id).style.border == "none") || (document.getElementById(id).style.border == "") || document.getElementById(id).style.border.split(" ")[0] == "medium") {
                        document.getElementById(id).style.border = "solid red 1px";
                    }
                }
            }
        }
    }

    if ((in_month != out_month) && (clickedMonth == "b")) {
        for (i = 1; i <= 42; i++) {
            var id = clickedMonth + i;
            if (document.getElementById(id).firstChild != null) {
                var date = document.getElementById(id).firstChild.nodeValue;
                if (date != null) {
                    date = parseInt(date);
                    if (
				     (date <= out_day)
                    ) {
                        if ((document.getElementById(id).style.border == "none") || (document.getElementById(id).style.border == "") || document.getElementById(id).style.border.split(" ")[0] == "medium") {
                            document.getElementById(id).style.border = "solid red 1px";
                        }
                    }
                }
            }
        }
    }
}

function setArrivalMonth(id){
	selectMonth(id, "in_month", 0);
}

function setDepartureMonth(id){
	selectMonth(id, "out_month", 0);
}

function setDepartureNextMonth(id){
	selectMonth(id, "out_month", 1);
}

function setArrivalNextMonth(id){
	selectMonth(id, "in_month", 1);
}

function clearAll() {
    document.getElementById("in_day").value = '';
    document.getElementById("out_day").value = '';
    document.getElementById("in_month").value = '';
    document.getElementById("out_month").value = '';
}

function monthReLoaded() {
    clearAll();
    resetDates();
}


function setDates(id) {
    if (intervalSelected) {
        intervalSelected = false;
        clearAll();
        resetDates();
        var i = 1;
        while (i <= 42) {
            if (document.getElementById("a" + i) != null) {
                document.getElementById("a" + i).style.border = "none";
            }
            if (document.getElementById("b" + i) != null) {
                document.getElementById("b" + i).style.border = "none";
            }
            i++;
        }

    } else {
      intervalSelected = true;
    }
	var date = document.getElementById(id).firstChild.nodeValue;
	lastDayOfMonthA = document.getElementById("days_per_month1").value;
	lastDayOfMonthB = document.getElementById("days_per_month2").value;
	clickedMonth = id.substr(0,1);
	if((document.getElementById(id).className == "cal_open") || (document.getElementById(id).className == "cal_restricted")){
		if(arrivalDate == 0 && departureDate == 0){
			arrivalDate = date;
			departureDate =date;
			document.getElementById("in_day").value=date;
			if(date == lastDayOfMonthA){
				document.getElementById("out_day").value=1;
				setDepartureMonth("b1");
			}else if((date == lastDayOfMonthB)&&(id.substr(0,1) == "b")){
				document.getElementById("out_day").value = 1;
				setDepartureNextMonth(id);
			}else{
				document.getElementById("out_day").value=parseInt(date) + 1;
				setDepartureMonth(id);
			}
			setArrivalMonth(id);
			//}else if((date == lastDayOfMonthA)&&(clickedMonth == "a")&&(departureDate==1)){
			//	alert("bla");
		}else if((date == arrivalDate) || (date == departureDate)){
			if(date == arrivalDate){
				if((date == lastDayOfMonthA)&&(clickedMonth == "a")){
					document.getElementById("in_day").value = 1;
					arrivalDate = 1;
					setArrivalNextMonth(id);
				}else{
					arrivalDate = parseInt(date)+1;
					document.getElementById("in_day").value = parseInt(date)+1;
					setArrivalMonth(id);
				}
			}else if(date == departureDate){
				if((date == lastDayOfMonthA)&&(clickedMonth == "a")){
					document.getElementById("out_day").value = lastDayOfMonthA;
					departureDate = parseInt(lastDayOfMonthA)-1;
					setDepartureMonth(id);
				}else{
					departureDate = parseInt(date)-1;
					if(departureDate == 0){
						departureDate = lastDayOfMonthA;
					}
					document.getElementById("out_day").value = date;
					setDepartureMonth(id);
				}
			}
		}else if((date < departureDate)&&(date > arrivalDate)){
  		  unselectAll(id, date, lastDayOfMonthA, lastDayOfMonthB);

       } else if (((date > parseInt(arrivalDate)) && (clickedMonth == lastClickedMonth)) || (lastClickedMonth == "a" && (clickedMonth == "b"))) {
			departureDate = date;
			if/*((date == lastDayOfMonthB) && (clickedMonth == "b")){
				//document.getElementById("out_day").value = 1;
				setDepartureNextMonth(id);
			}else if*/ ((date == lastDayOfMonthA) && (clickedMonth == "a")) {
				// alert("1\ndate: " + date + "\nlastDayOfMonthA: " + lastDayOfMonthA + "\nclickedMonth: " + clickedMonth);
				//document.getElementById("out_day").value=1;
				setDepartureMonth("b1");
			}else{
				// alert("1\ndate: " + date + "\nlastDayOfMonthB: " + lastDayOfMonthB + "\nlastDayOfMonthA: " + lastDayOfMonthA + "\nclickedMonth: " + clickedMonth);
				document.getElementById("out_day").value=parseInt(date);
				setDepartureMonth(id);
			}
		}else if((date == lastDayOfMonthA)&&(id.substr(0,1) == "a")&&(arrivalDate == 1)&&(departureDate != 1) ){
			arrivalDate = date;
			document.getElementById("in_day").value=date;
			setArrivalMonth(id);
		}else if((date == parseInt(arrivalDate)-1) && (clickedMonth == lastClickedMonth)){
			arrivalDate = date;
			document.getElementById("in_day").value=date;
			setArrivalMonth(id);
		}else{
			unselectAll(id,date,lastDayOfMonthA,lastDayOfMonthB);
		}
		// alert(document.getElementById(id).style.border);
		selectDates();

	}
	lastClickedMonth = clickedMonth;
	if (document.getElementById("in_day").value == document.getElementById("out_day").value &&
		document.getElementById("in_month").value == document.getElementById("out_month").value) {
	    clearAll();
	} else {
	  setCalendarControls();
	}
}

function getDate(dayFld, monthFld, yearFld) {
    var result = new Date(0);
//    result.setDate(parseInt(document.getElementById(dayFld).value));
//    result.setMonth(parseInt(document.getElementById(monthFld).value));
    result.setFullYear(parseInt(document.getElementById(yearFld).value),
                       parseInt(document.getElementById(monthFld).value) - 1, //A numeric value between 0 and 11 representing the month
                       parseInt(document.getElementById(dayFld).value));
    return result;
}

function setCalendarControls() {
    fromCalendar = getCalendarFrom();
    var fromDate = getDate("in_day", "in_month", "in_year");
    fromCalendar._selectedDate = fromDate;
    fromCalendar._textbox.set_Value(fromDate.localeFormat(fromCalendar._format))

    toCalendar = getCalendarTo();
    var toDate = getDate("out_day", "out_month", "out_year");
    toCalendar._selectedDate = toDate;
    toCalendar._textbox.set_Value(toDate.localeFormat(toCalendar._format))

    setDaysCombo();
}
