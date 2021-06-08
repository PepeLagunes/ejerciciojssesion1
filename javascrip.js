let grettings;
let time=-30;

if(time<0||time>24){
    console.log('Tas chavo')
}
else
{
    if(time<12){
        grettings = 'Good Morning';
    }

    if(time>=12 && time<20){
        grettings = 'Good Afternon';
    }

    if(time>=20 && time<=24){
        grettings = 'Good night';
    }
    console.log(grettings);
}
