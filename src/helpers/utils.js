function GetAgeInYears() 
{
    var birthDate = new Date(1998, 5, 20);
    var systemDate = new Date();

    var pastTime = (systemDate.getTime() - birthDate.getTime()) / 1000;
    pastTime /= (60 * 60 * 24);
    var age = systemDate.getFullYear() - birthDate.getFullYear();
    //return Math.abs(Math.round(pastTime / 365.25));
    return age;
}

export default GetAgeInYears;