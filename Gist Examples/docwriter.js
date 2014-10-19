/* using document.write() to easily insert a styled 
div with our message into the browser window!
-- created by Lane Boyer | github.com/laneboyerre | lane.boyer.re@gmail.com --
*/

var content = "Some writing inside the DOM!";

var content_2 = "";
var content_2_extended = "<p>" + "I am dynamically styled!" + "</p>"; /* To change the contents you just need to alter "I am dynamically styled!" and leave the <p>..</p> tags alone. */

document.write("<div style='height:400px;background:rgba(0,60,80,0.4);color:white;" 
             + "box-shadow:3px 3px 3px rgba(0,0,0,0.75);width:60%;margin:0px 0px auto;'>"
             + "<p>" + content + "</p></div>");

/* now lets prepare content_2 since we initilized it above. Then we will also
write the content_2 var we assign some content to insert! Notice how we don't
need to use style="background:rg...etc" this time.The main file is pulling
the rules for the div from customstyle.css . Utilizing CSS allows us to free
up space to focus on content! And it is easy! */

content_2 = "<div id='content_2'>" + content_2_extended + "</div>";  /* content_2_extended was created above and used here! */
document.write(content_2);