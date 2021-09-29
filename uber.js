var readlineSync=require("readline-sync");
var place=["Huskur","D-Mart","Electronic-City","Sarjapura","Santipura"]
console.log("******************welcome manvi in raide Aplication🚗🚗🚗🚗🚗🚗🚗🚗🚗")
console.log(place)
var a=0;
console.log("chosse rider which rider number you want to choose")
var random1Ofplace = place[Math.floor(Math.random() * place.length)];
var random2Ofplace = place[Math.floor(Math.random() * place.length)];
var random3Ofplace = place[Math.floor(Math.random() * place.length)];
console.log(`1.🧑‍✈️rider-one ${random1Ofplace}\n 2.🧑‍✈️rider-two ${random2Ofplace}\n 3.🧑‍✈️rider-three ${random3Ofplace}`)
var count1=0
var count2=0
var count3=0
let km1=0
let km2=0
let km3=0
function choose_rider(){
    var rider_option=readlineSync.question("choose which rider u want to choose\n 1.rider-one \n 2. rider-two \n 3. rider-three\n....=")
    console.log("Welcome Manvi for chossed me🚗")
    console.log("manvi i am accepting your booking🚗")
    
        if (rider_option==1){
            count1=count1+1
            km=readlineSync.questionInt("enter the kilomitar how much kilomitar u want to go=")
            km1+=km
        }
        else if (rider_option==2){
            count2=count2+1
            km=readlineSync.questionInt("enter the kilomitar how much kilomitar u want to go=")
            km2+=km
        }
        else if (rider_option==3){
            count3=+1
            km=readlineSync.questionInt("enter the kilomitar how much  kilomitar u want to go =")
            km3+=km
        }
}
function book(){
    var option=readlineSync.question("chosse what u want to choose book ya cancle 🚗\n 1.booking \n 2.cancle=")
    if (option=='1'){
        console.log('Your booking is confirm:')
        choose_rider()
    }
    else{
        return 'no'
    }
}
book()
function a_gain(){
    op=readlineSync.question('u want to again booking 1 or 2 :- ')
    if (op=='1'){
        book()
        a_gain()
    }
    else{
        return 'no'
    }
}
a_gain()
function onwer_deatils(){
    var onwer=readlineSync.question("choose which rider deatil  onwer wants to know 1 or 2 or 3:=")
    let per_km_rs=5
    if (onwer=="1"){
        console.log("today rider1 did",count1,"rides")
        console.log("rides1 rodes",km1,"km,Total Amout =>",km1*per_km_rs)
    }
    else if (onwer=="2"){
        console.log("today rider did",count2,"rides")
        console.log("rides2 rodes",km2,"km,Total Amount =>",km2*per_km_rs)
    }
    else if (onwer=="3"){
        console.log("today rider did",count3,"rides")
        console.log("rides2 rodes",km3,"km,Total Amount =>",km3*per_km_rs)
    }
}
onwer_deatils()
function see_deatils_again(){
    onwer_see_agin=readlineSync.question("choose oner wants to see again🚗 yes/no 1 or 2=")
    if (onwer_see_agin=="1"){
        onwer_deatils()
        see_deatils_again()
    }
    else if (onwer_see_agin=="2"){
        console.log("no i dont want to see")
        console.log("*************THANKU MANVI***********")
    }
}
see_deatils_again()
