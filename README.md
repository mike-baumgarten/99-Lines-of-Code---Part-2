Info
•	This lab consists of two parts
•	In this second iteration you will be transforming part 1 of the lab
•	You should copy your files from part 1 and paste them along with this README file into a new folder linked to a new github repository
New Objectives
•	Put a button in the HTML that says Sing!
    o	Stepping Stone: When you click the button, all the console.log statements from the previous lab should happen. They SHOULD NOT happen before the button is clicked.
•	When you have the button setup and working correctly as described, then:
    o	Delete the div with class friend and the headings and paragraphs it contains from your html file
    o	Go to your code where you are "singing the song" and accomplish the following using DOM:
        	For every one of your friends, create a div with class friend
        	Put an h3 containing your friend's name in the div
        	Then, instead of using console.log to put the song lyrics in the console, create a paragraph for each song lyric line and put that paragraph in the friend div.
•	To Recap:
    o	When you have made these modifications, the page should start out just showing a button labeled "Sing!"
    o	Nothing will be logged to the console
    o	Clicking the button will cause 5 div elements with class name friend to be added to the page, one for each of your friends
    o	Each div contains a friend's name as an h3 and 99 paragraphs, each one representing a lyric line that you previously were logging to the console in part 1 of this lab.
Hints
    •	You will be using DOM functions to complete this portion of the lab
    •	Remember that elements can be added to other elements
        o	document.body.appendChild(someElement);
        o	someOtherElement.appendChild(anotherElement);
