//SMS STRING VARIABLES

var welcome = "Hello ";

var riskSms = " please find the information for Samaritans and Northamptonshire Crisis Telephone Support Service (CATTS) below. Both services offer support 24/7, 365 days a year. Samaritans tel: 116 123, web: https://www.samaritans.org. CATTS tel:  0800 917 0464.";
var dnaSms = " I am sorry that you were unable to attend your appointment today. Please call Changing Minds IAPT on 0300 999 16 16 if you wish to re-book.";
var drugsServiceSms = " please find the contact details for Substance to Solution, a local non-profit provider of drugs and alcohol information and support. Tel: 0808 169 8512 (STAR service for new clients).";
var counsellingNorthamptonSms = " please find the contact details for The Manna House, a local non-profit provider of counselling services. Web: http://www.themannahouseonline.com/mhcs/home Tel: 01604 633304.";
var counsellingKetteringSms = " please find the contact details for Teamwork Counselling, a local non-profit provider of counselling services. Web: https://www.teamworktrust.co.uk/counselling-program Kettering tel: 01536 511993, Corby tel: 01536 400931, Wellingborough tel: 01933 442066. Sent by Changing Minds IAPT.";
var depressionSms = " please find some links to useful self help resources for managing low mood. Northumberland NHS Self Help library: https://web.ntw.nhs.uk/selfhelp/ NHS 'Reading Well' recommended self-help books list: https://reading-well.org.uk/books";
var anxietySms = " please find some links to useful self help resources for managing anxiety. Northumberland NHS Self Help library: https://web.ntw.nhs.uk/selfhelp/ NHS 'Reading Well' recommended self-help books list: https://reading-well.org.uk/books";
var optInSms = " we have tried to contact you recently but have been unable to reach you. If you wish to continue to access support from Changing Minds IAPT, please call the central hub on: 0300 999 16 16. Sent by Changing Minds IAPT.";

//EVENT LISTENERS WITH ANONYMOUS FUNCTION, UPDATE TEXT OUTPUT FUNCTION + PARAMETERS

var riskButton = document.getElementById("risk");
var DNAButton = document.getElementById("DNA");
var drugServiceButton = document.getElementById("drugsService");
var counsellingNorthamptonButton = document.getElementById("counsellingNorthampton");
var counsellingKetteringButton = document.getElementById("counsellingKettering");
var depressionButton = document.getElementById("depression");
var anxietyButton = document.getElementById("anxiety");
var optInButton = document.getElementById("optIn");

function smsToScreen(){

        riskButton.addEventListener("click", function(){
            updateOutputText(riskSms);
        });
    

        DNAButton.addEventListener("click", function(){
            updateOutputText(dnaSms);
        });
    

        drugServiceButton.addEventListener("click", function(){
            updateOutputText(drugsServiceSms);
        });
    

        counsellingNorthamptonButton.addEventListener("click", function(){
            updateOutputText(counsellingNorthamptonSms);
        });
    
        counsellingKetteringButton.addEventListener("click", function(){
            updateOutputText(counsellingKetteringSms);
        });
    

        depressionButton.addEventListener("click", function(){
            updateOutputText(depressionSms);
        });
    

        anxietyButton.addEventListener("click", function(){
            updateOutputText(anxietySms);
        });
    
        optInButton.addEventListener("click", function(){
            updateOutputText(optInSms);
        });
}

smsToScreen();

//NEW TEXT UPDATE FUNCTION MAKING USE OF PARAMETERS FROM EVENT LISTENER FUNCTION

function updateOutputText(uniqueSms) {
    var patientName = document.getElementById("nameInput").value;
    this.uniqueSms = uniqueSms;
    textOutput = document.getElementById("textOutput");
    textOutput.value = welcome + patientName + uniqueSms;
}

//EVENT LISTENER - MOUSE OVER COPY BUTTON + FUNCTION TO CHANGE CLASS OF TOOLTIP

document.getElementById("copyButton").addEventListener("mouseover", tooltipClassUpdate);

function tooltipClassUpdate() {
    document.getElementById("tooltip").className = "tooltip visable";
    document.getElementById("tooltipText").className = "tooltipText visable";
}

//EVENT LISTENER - MOUSE OFF COPY BUTTON + FUNCTION TO CHANGE CLASS BACK TO HIDDEN 

document.getElementById("copyButton").addEventListener("mouseout", tooltipClassRevert);

function tooltipClassRevert() {
    document.getElementById("tooltip").className = "tooltip hidden";
    document.getElementById("tooltipText").className = "tooltipText hidden";
}

//EVENT LISTENER FOR CLIPBOARD COPY BUTTON

var copyButton = document.getElementById("copyButton");
copyButton.addEventListener("click", copyToClipboard);

// PREVENT PAGE FROM REFRESHING AFTER TEXT COPIED

copyButton.addEventListener("click", function(event){
    event.preventDefault();
    });

// COPY TO CLIPBOARD + UPDATE TOOLTIP TEXT FUNCTION

        function copyToClipboard() {

            var fullOutputText = document.getElementById("textOutput");
            fullOutputText.select();

            document.execCommand("copy");

            document.getElementById("tooltipText").textContent="Success!";
        }

// REVERT TOOLTIP TEXT BACK TO ORGINAL VALUE WHEN SMS BUTTON IS PRESSED A SECOND TIME

document.addEventListener('click', function(event){
    if (
        
        document.getElementById("tooltipText").textContent == "Success!" &&
        
        event.target.classList.contains('button')){
        revertTooltipText();
    }
});


function revertTooltipText() {
    document.getElementById("tooltipText").textContent="Copy to clipboard";
}


//TESTING KILLSCREEN FUNCTION
function killScreen(){
    document.write("test");
}


// ***********JS FOR EMAIL FUNCTION ADDED HERE*************

// CODE TO CHANGE BUTTONS TO GREEN AND BLUE ON TOGGLE

var blueButtons = document.querySelectorAll(".button");
var i;
var toggleListener = document.getElementById('toggleSwitch');
var onOff = false;

function onOffSwitch(){
    onOff = !onOff;
    return onOff;
}

toggleListener.addEventListener('change', changeBlueToGreen);

function changeBlueToGreen(){
    
    for (i = 0; i < blueButtons.length; i++) {
        blueButtons[i].classList.toggle("green");
    }
}

// CODE TO TOGGLE BETWEEN BUTTON LABELS 

toggleListener.addEventListener('change', toggleButtonText);

//*******TEXT-TOGGLE FUNCTION***********

function toggleButtonText(){

//1 DNA BUTTON TOGGLE
    if(DNAButton.getAttribute("value") === "&nbsp;DNA&nbsp;") {
          DNAButton.setAttribute("value", "Risk info");
    } else {
        DNAButton.setAttribute("value", "DNA");
    }
//END OF DNA BUTTON TOOGLE

//2 RISK BUTTON TEXT TOGGLE

if(riskButton.getAttribute("value") === "risk info") {
    riskButton.setAttribute("value", "Depression");
} else {
  riskButton.setAttribute("value", "risk info");
}
//END OF RISK BUTTON TOOGLE

// 3 DRUG SERVICE BUTTON TEXT TOGGLE

if(drugServiceButton.getAttribute("value") === "drug service") {
    drugServiceButton.setAttribute("value", "Anxiety");
} else {
  drugServiceButton.setAttribute("value", "drug service");
}
//END OF RISK BUTTON TOOGLE

//4 COUNSELLING N-AMPTON BUTTON TEXT TOGGLE

if(counsellingNorthamptonButton.getAttribute("value") === "Counselling South") {
    counsellingNorthamptonButton.setAttribute("value", "Counselling South");
} else {
  counsellingNorthamptonButton.setAttribute("value", "Counselling South");
}
//END OF RISK BUTTON TOOGLE

//5 COUNSELLING KET BUTTON TEXT TOGGLE

if(counsellingKetteringButton.getAttribute("value") === "Counselling North") {
    counsellingKetteringButton.setAttribute("value", "Counselling North");
} else {
  counsellingKetteringButton.setAttribute("value", "Counselling North");
}
//END OF RISK BUTTON TOOGLE

//6 DEPRESSION BUTTON TEXT TOGGLE

if(depressionButton.getAttribute("value") === "Depression") {
    depressionButton.setAttribute("value", "NRIC");
} else {
  depressionButton.setAttribute("value", "Depression");
}
//END OF RISK BUTTON TOOGLE

//7 ANXIETY BUTTON TEXT TOGGLE

if(anxietyButton.getAttribute("value") === "Anxiety") {
    anxietyButton.setAttribute("value", "NDAS");
} else {
  anxietyButton.setAttribute("value", "Anxiety");
}
//END OF RISK BUTTON TOOGLE

//8 OPT IN BUTTON TEXT TOGGLE

if(optInButton.getAttribute("value") === "Opt-In") {
    optInButton.setAttribute("value", "Youth Support");
} else {
  optInButton.setAttribute("value", "Opt-In");
}
//END OF RISK BUTTON TOOGLE

}
//**********END OF TEXT-TOGGLE FUNCTION**************


//Change SMS Button IDs (html) to Email Button IDs

toggleListener.addEventListener('change', changeSmsButtonIdsToEmailIds);

function changeSmsButtonIdsToEmailIds() {

//DNA SMS To Risk Email
    DNAButton.setAttribute("id", "riskEmail");
    riskEmailButton = DNAButton;

//Risk SMS to Depression Email    
    riskButton.setAttribute("id", "depressionEmail");
    depressionEmailButton = riskButton;

//Drug SMS to Anxiety Email    
    drugServiceButton.setAttribute("id", "anxietyEmail");
    anxietyEmailButton = drugServiceButton;

//Counselling South SMS to Counselling South Email    
    counsellingNorthamptonButton.setAttribute("id", "counsellingNorthamptonEmail");
    counsellingNorthamptonEmailButton = counsellingNorthamptonButton;

//Counselling North SMS to Counselling North Email    
    counsellingKetteringButton.setAttribute("id", "counsellingKetteringEmail");
    counsellingKetteringEmailButton = counsellingKetteringButton;

//Depression SMS to NRIC Email    
    depressionButton.setAttribute("id", "NRICEmail");
    NRICEmailButton = depressionButton;

//Anxiety SMS to NDAS Email    
    anxietyButton.setAttribute("id", "depressionEmail");
    NDASEmailButton = anxietyButton;

//Opt-in SMS to Young People's Email    
    optInButton.setAttribute("id", "NDASEmail");
    youngPeopleEmailButton = optInButton;

}
//END    


//TOGGLE TO EMAIL OUTPUT FROM SMS AND BACK

var toggleSwitch = document.querySelector("#toggleSwitch");
var classesForSwitch = toggleSwitch.classList;

toggleListener.addEventListener('change', function() {
    var result = classesForSwitch.toggle("true");

    if(result) {

        //Output Emails on Button Click
        
        riskEmailButton.addEventListener("click", function(){
            updateOutputText(riskEmail);
        });

        depressionEmailButton.addEventListener("click", function(){
            updateOutputText(depressionEmail);
        });

        anxietyEmailButton.addEventListener("click", function(){
            updateOutputText(anxietyEmail);
        });
        counsellingNorthamptonEmailButton.addEventListener("click", function(){
            updateOutputText(counsellingNorthamptonEmail);
        });
        counsellingKetteringEmailButton.addEventListener("click", function(){
            updateOutputText(counsellingKetteringEmail);
        });
        NRICEmailButton.addEventListener("click", function(){
            updateOutputText(NRICEmail);
        });
        NDASEmailButton.addEventListener("click", function(){
            updateOutputText(NDASEmail);
        });
        youngPeopleEmailButton.addEventListener("click", function(){
            updateOutputText(youngPeopleEmail);
        }); 
    } 
    else {

        //Output SMS on button click

        riskButton.addEventListener("click", function(){
            updateOutputText(riskSms);
        });
    

        DNAButton.addEventListener("click", function(){
            updateOutputText(dnaSms);
        });
    

        drugServiceButton.addEventListener("click", function(){
            updateOutputText(drugsServiceSms);
        });
    

        counsellingNorthamptonButton.addEventListener("click", function(){
            updateOutputText(counsellingNorthamptonSms);
        });
    
        counsellingKetteringButton.addEventListener("click", function(){
            updateOutputText(counsellingKetteringSms);
        });
    

        depressionButton.addEventListener("click", function(){
            updateOutputText(depressionSms);
        });
    

        anxietyButton.addEventListener("click", function(){
            updateOutputText(anxietySms);
        });
    
        optInButton.addEventListener("click", function(){
            updateOutputText(optInSms);
        });        
    }
});


// Increase size of .textOutput on toggle to email for desktop size stylesheet 

// Get specific stylesheet

var sheets = document.styleSheets;
var sheet = document.styleSheets[6];

console.log(sheet);


// delete rule for grid row sizes 

// add rule for new grid row sizes, increasing text output row to minimum size suitable for the emails

