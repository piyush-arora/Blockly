function pinMode(p,m)
{
  var argument = {
      pin:p,
      mode:m
      
    }
    argument = JSON.stringify(argument);
    SendMessage("Blockly","pinMode",argument);

}

function digitalWrite(p,s)
{
    var argument = {
      pin:p,
      status:s
      
    }
    argument = JSON.stringify(argument);
    SendMessage("Blockly","digitalWrite",argument);

}
