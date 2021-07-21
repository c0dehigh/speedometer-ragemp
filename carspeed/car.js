let browser = mp.browsers.new("package://cef/carspeed/index.html");
browser.active = false;



function playerEnterVehicleHandler(vehicle, seat) {
    let player = mp.players.local
    

    mp.events.add('render', () =>
{
        if (player.vehicle && player.vehicle.getPedInSeat(-1))
        {
            browser.active = true;
                let vehicle = player.vehicle;
                let speed = vehicle.getSpeed();
                let classs1 = vehicle.getClass();
                let gear =  vehicle.gear;
                speed = speed * 3.6;
                let speed1 = Math.floor(speed)

                browser.execute(`car(${gear},${speed1},${classs1});`);
        } else {
            browser.active = false;

        }

});
 }
 mp.events.add("playerEnterVehicle", playerEnterVehicleHandler);
