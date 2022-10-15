
// ------------------  Nav buttons 


$('.goods-in').click(function(){
    let goodsInfo = `
       Goods In: Mon - Fri: 05:00 - 16:30, Sat: 05:00 - 14:30, Sun: 05:00 - 11:00 <br/>
       Ambient: Bays 7 - 16, Eggs: Bays: 13 - 16, Toilet Roll: Bays: 5 or 6, Leaflets/Posters: Bay: 24 <br/>
       Office: Bay: 10`;

    $('#info').css('color', '#2cf915');
    $('#info').html(goodsInfo);
});


$('.specials').click(function(){
    let specialsInfo = `
       Specials: Mon - Sat: 05:00 - 11:00, Sun: Closed <br/>
       Specials: Bays: 17 - 24 <br/>
       Office: Bay: 10`;

    $('#info').css('color', 'yellow');
    $('#info').html(specialsInfo);

});


$('.tca').click(function() {
    let tcaInfo = `
        TCA: All Week: 05:00 - 08:00 (Sometimes 09:00 call TCA to ask first) <br/>
        Chilled: Bays: 58 - 65, Frozen: Bays: 66 - 70, Double Deckers: Refer to Double Decker Tab <br/>
        Office: Bay: 55`;

    $('#info').css('color', '#04015a');
    $('#info').html(tcaInfo);

});


$('.ptz').click(function() {
    let ptzInfo = `
        PTZ: All Week: 13:00 onwards *No Earlier than 13:00* <br/>
        Produce: (+4 And Above)(Examples: Potatoes, Bananas), Bays: 25 - 49 <br/>
        Chilled (0 To +3)(Examples: Grapes, Berries), Bays: 58 - 62 <br/>
        Chilled(Meat)(Examples: Steak, Fish Fillet), Bays: 63 - 70 <br/>
     
        Bread (Goes to Goods In Area), Bays: 19 - 21 <br/>
        Produce And Chilled Office: Bay 55, Bread Office: Bay 10 `;

    $('#info').css('color', '#99e9ff');
    $('#info').html(ptzInfo);

});

$('.double-deckers').click(function(){
    let doubleDeckerInfo = `
      ** Be sure to write on driver paperwork ** <br/>
      TCA & PTZ: Bays: 55 - 57 <br/>
      Goods In Bays are all soft top and are fine with Double Deckers ` ;

    $('#info').css('color', '#990000');
    $('#info').html(doubleDeckerInfo);
});

$('.other').click(function() {
    let otherInfo = `
        Contractors (Examples: BVS, Intergral, Crown, KIS, Tennant, CimTech, Rentokil, BetterServe, Dale): Will Require Contractor Cards <br/>
        Delivering Fuel/AdBlue: Send to VMU(Truck Wash), No card needed <br/>
        Collecting Pallets: Send to Pallet Area, No card needed <br/>
        Collecting Trays: Bays: 50 - 54, Office: Bay: 52, Will Require PTZ card ` ;

    $('#info').css('color', '#660053');
    $('#info').html(otherInfo);
}); 

// ---------------------- API related

function getData(cb) {
    var xhr = new XMLHttpRequest();

    xhr.open('GET', baseURL + type + '/');

    xhr.setRequestHeader("X-RapidAPI-Key", "d3615a1840mshb3696a181f253a7p164436jsn6db10d3c81a0") ;
    xhr.setRequestHeader("X-RapidAPI-Host", "motor-carrier-search.p.rapidapi.com");

    xhr.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            cb(JSON.parse(this.responseText) );
        }
    };

    xhr.send();
}

$('vehicle-form').on('submit', function (e) {
    e.preventDefault();

    const $form = $(e.currentTarget);
    const formData = $form.serializeArray();
    const type = $formData.filter(function(item) { return item.name === 'type'})[0].value;

    getData(type, function(data) {
        console.log(data)
        document.getElementById('data').innerHTML = data;
    });
})