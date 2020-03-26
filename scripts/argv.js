function getArgv() {
  var argvsArray = process.argv.splice(2);
  var options = {
    styleDir: 'es',
  };
  argvsArray.forEach(function(item) {
    var keysToValue = item.split('=');
    var key = keysToValue[0].replace(/^--/, '');
    var value = keysToValue[1];

    options[key] = value;
  });
  return options;
}

var argvs = getArgv();

module.exports = argvs;
