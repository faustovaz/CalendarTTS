import {CalendarTTS} from './CalendarTTS.js'

(function(){
    let calendarTTS = new CalendarTTS('#calendar-tts', {});
    calendarTTS.onValueChange(currentDate => {
        console.log(currentDate);
    })
})();
