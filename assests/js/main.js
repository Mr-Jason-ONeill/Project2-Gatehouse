// Nav buttons 

$('.goods-in').click(function(){
	$('p').css('color', '#2cf915');
    $('p').text(`Goods In, Mon - Fri: 05:00 - 16:30,  Sat: 05:00 - 14:30, Sun: 05:00 - 11:00. 
     Ambient: Bays: 7 - 16, Eggs: Bays: 13 - 16, Toilet Roll: Bays: 5 - 6, Leaflets/Posters: Bays: 24 
     Office: Bay: 10`);
});

$('.specials').click(function(){
	$('p').css('color', 'yellow');
    $('p').text(` Mon - Sat: 05:00 - 11:00, Sun: Closed. 
    Bays: 17 - 24.  
    Office: Bay: 10 `);
});

$('.tca').click(function(){
	$('p').css('color', '#04015a');
    $('p').text(` All Week: 05:00 - 08:00 (Sometimes 09:00 but must call TCA first). 
    Chilled: Bays: 58 - 65, Frozen: Bays: 66 - 70  
    Office: Bay: 55 `);
});

$('.ptz').click(function(){
	$('p').css('color', '#99e9ff');
    $('p').text(` All Week: 13:00 - Onwards *No earlier* 
    Produce(Potatoes, Bananas, Temp: +4 and up): Bays: 25 - 49, 
    Chilled(Grapes, Berries, Temp: 0 to +3): Bays: 58 - 62
    Meat/Fish: Bays: 63 - 70  
    Office: Bay: 55 `);
});

$('.double-deckers').click(function(){
	$('p').css('color', '#990000');
    $('p').text(` *Be sure to write it on their paper-work too*. 
    TCA & PTZ: Bays: 55 - 57, Goods In & Specials are soft top bays and are fine anywhere. 
     `);
});

$('.other').click(function(){
	$('p').css('color', '#660053');
    $('p').text(` Contractors are usually for VMU(Truck Wash) or Maintenance: Send to correct location, give Contractor card. 
    Collecting trays or pallets are for Pallet Area.
    Pallets: Send to Pallet Area, No card needed.
    Collecting Trays: Bays: 50 - 54, Office: Bay: 52
     `);
});