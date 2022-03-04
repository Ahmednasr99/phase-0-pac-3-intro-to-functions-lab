function shout(string) {
    return string.toUpperCase();
  }
 console.log(shout("hello")) ;

function whisper(string) {
    return string.toLowerCase();
  }
 console.log(whisper("HELLO")) ;

 function logShout(string) {
    return console.log(string.toUpperCase());
  }
 console.log(logShout("hello")) ;

function logWhisper(string) {
    return console.log(string.toLowerCase());
  }
 console.log(logWhisper("HELLO")) ;


 

function sayHiToHeadphonedRoommate(string) {
    if(string.toLowerCase()){

        return "I can't hear you!";
    }
     else if(string.toUpperCase()){

        return "YES INDEED!";
    }
     else if (string=="Let's have dinner together!"){
        return "I would love to!";
    }
     else
    return -1;
    
     
    }
sayHiToHeadphonedRoommate("HELLO");
sayHiToHeadphonedRoommate("hello");

