function billWithSettings(){

var theCallCost = 0;
var theSmsCost = 0;
var theWarningLevel = 0;
var theCriticalLevel = 0;

var callCostTotal = 0;
var smsCostTotal = 0;


function setCallCost(callCost){
    theCallCost = callCost
    
 }

function getCallCost(){
    return theCallCost;
}

function setSmsCost(smsCost){
    theSmsCost = smsCost
    
 }

function getSmsCost(){
    return theSmsCost;
}

function setWarningLevel (warningLevel){
    theWarningLevel = warningLevel;
}

function getWarningLevel (warningLevel){
    return theWarningLevel
}


function setCriticalLevel (criticalLevel){
    theCriticalLevel = criticalLevel;
}

function getCriticalLevel (criticalLevel){
    return theCriticalLevel
}

function makeCall(){
    if (!hasReachedcriticalLevel){

        callCostTotal += theCallCost;

    }
    
}
function getTotalCallCost(){

    return callCostTotal;
}

function getTotalCost(){

return callCostTotal + smsCostTotal;

}
function getTotalSmsCost(){
return smsCostTotal;
    
}
function sendSms(){

    if(!hasReachedcriticalLevel){
        smsCostTotal += theSmsCost

    }
}

function hasReachedcriticalLevel(){
    
    getTotalCost() >= getCriticalLevel()
}

function totalClassName(){
    
    if (hasReachedcriticalLevel){

        return 'critical'
    }
  
        if (getTotalCost() >= getWarningLevel()){

            return "warning"
        }
        
    }
    


    return {
        getCallCost,
        setCallCost,
        setSmsCost,
        getSmsCost,
        setWarningLevel,
        getWarningLevel,
        setCriticalLevel,
        getCriticalLevel,
        makeCall,
        hasReachedcriticalLevel,
        getTotalCallCost,
        getTotalCost,
        getTotalSmsCost,
        sendSms,
        totalClassName,

    
    }
}