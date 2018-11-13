module.exports = {

	name: 'tst',

	description: 'Command for testing',

	cooldown: 5,

	execute(message) {
        var units = new Array();
function Calc() {
    units [0] = 25;
    units [1] = 50;
    units [2] = 75;
}

function Calc_totals() {
    var answerValue = 0; 

    for(i=0; i < units.length; i++) 
    { 
        answerValue += Number(units[i]);
    } 
    return answerValue
}

function foo()
{
    Calc();
    var tstMsg = Calc_totals();
    console.log(tstMsg);
}

foo();

	},

};