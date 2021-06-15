import {CalendarTTS} from './CalendarTTS.js'

(function(){
    // Start the calendar using the #calendar-tts div element
    let calendarTTS = new CalendarTTS('#calendar-tts', {});

    // Use the onValueChange method to set a listener  to catch
    // the click event
    calendarTTS.onValueChange(currentDate => console.log(currentDate));

    // Set some dates as scheduled
    calendarTTS.setDatesAsScheduled([
            new Date(2021, 5, 1),
            new Date(2021, 5, 3,),
            new Date(2021, 5, 4,),
            new Date()
        ]);

})();
