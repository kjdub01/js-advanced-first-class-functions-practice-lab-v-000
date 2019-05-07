const logDriverNames = function(drivers) {
  drivers.forEach( function (driver) {
    console.log(driver.name);
  });
};

const logDriverByHometown = function (drivers, location) {
  drivers.forEach(function (driver) {
    if (driver.hometown === location) {
      console.log(driver.name)
    };
  });
}