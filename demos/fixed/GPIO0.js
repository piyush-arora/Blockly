Blockly.Blocks['pinMode'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("pinMode")
        .appendField(new Blockly.FieldDropdown([["GPIO_PIN_1", "1"], ["GPIO_PIN_2", "2"]]), "pin")
        .appendField(new Blockly.FieldDropdown([["OUTPUT", "OUTPUT"], ["INPUT", "INPUT"]]), "pinMode");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};