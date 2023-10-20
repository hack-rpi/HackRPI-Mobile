function Time_Converte(Time){
    const Hour = parseInt(Time.split(":")[0]);
    const Minute = Time.split(":")[1];
    if(0 <= Hour && Hour <= 11){
        return Hour + ":" + Minute + " AM";
    }
    else if(Hour == 0){
        return "12:" + Minute + " AM";
    }
    else{
        return Hour - 12 + ":" + Minute + " PM";
    }
}
export default Time_Converte;
