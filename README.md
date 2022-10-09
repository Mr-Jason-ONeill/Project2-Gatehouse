# GATEHOUSE DATA COLLECTION

NavBar = 6 buttons
Each button will display given area and hide the others.
Given area will be in a Form style.
Current design is Excel spreadsheet, Team stare at it for 12 hour shifts, hard on the eyes thus color-style to be dark with color-coded areas to organise efficently.

Left section | Details of vehicle and driver entering premises, may add a button next to submit for search of addtional information.

Middle section | Was to be a search area, to search for specific cards handed out or drivers entered, however no database in this project. So, middle section will display additional information of the vehicle. (using an Api)

Right section | Details of vehicle and driver leaving premises

---------------------------------------------------------------------------------------------------------------
# Api's 
Api's will be gathered from:
https://www.Rapidapi.com
https://www.gov.co.uk
https://www.apispreadsheets.com

---------------------------------------------------------------------------------------------------------------
# Errors
Trying to display data onto page, console displaying error message: 
"Uncaught TypeError: Failed to construct 'XMLHttpRequest': Please use the 'new' operator, this DOM object constructor cannot be called as a function."

function writeToDocument coming up as void also:
" writeToDocument' is declared but its value is never read.ts(6133) " 
= Error sorted, there was extra code at the top of the page, preventing from working, code has been removed.

