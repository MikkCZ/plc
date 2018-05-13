<!-- Begin
//var baner_js_text = new Array ("Nekoukejte na svět jen skrz wokna...", "...zkuste Linux", "");
var baner_js_text = new Array ("Je tu opět... Linuxový víkend", "...24.5.v posluchárně 209, ČVUT FEL Praha", "...možná přijde i Shuttleworth!", "");

document.write('<div id="baner_js_space">');
document.write('</div>');

var def_10='A',def_11='B',def_12='C',def_13='D',def_14='E',def_15='F';
var max_colorVal=15;
var min_colorVal=0;
var colorVal=max_colorVal;
var div_count=0;
var timeOutVal=150;

function baner_fade_desat(getColorIntVal) {
    if(getColorIntVal>=10) {
        for(var i=min_colorVal; i<=max_colorVal; i++) {
            if(getColorIntVal==i) {
                return(eval('def_' + i));
            }
        }
    } else { return(getColorIntVal);    }
}

function writeDiv() {
    document.getElementById("baner_js_space").innerHTML = '<font style="color: #' + joinColor(baner_fade_desat(colorVal)) + '; font-size: 0.6em"><b>' + baner_js_text[div_count] + '</span></b></font>';

    if((colorVal>min_colorVal) && (colorVal!=min_colorVal)) {
    colorVal--;
    } else {
    colorVal=max_colorVal;
    if(div_count<baner_js_text.length) {
        div_count++;
    }
    if(div_count==baner_js_text.length) {
        div_count = 0;
        colorVal = max_colorVal;
    }
    }
    
    if(baner_js_text[div_count]=="") {
    setTimeout("writeDiv()",300);
    } else {
    if(div_count<baner_js_text.length) {
        setTimeout("writeDiv()",timeOutVal);
    }
    }
}

function joinColor(getColor) {
    return (getColor + '0' + getColor + '0' + getColor + '0');
}


writeDiv();
// End -->
