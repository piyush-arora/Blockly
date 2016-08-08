Blockly.Blocks['pinMode'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("pinMode")
        .appendField(
                        new Blockly.FieldDropdown
                            (
                                [
                                    ["GPIO_PIN_0", "1"], 
                                    ["GPIO_PIN_1", "2"],
                                    ["GPIO_PIN_4", "4"],
                                    ["GPIO_PIN_7", "8"],
                                    ["GPIO_PIN_8", "16"],
                                    ["GPIO_PIN_10", "32"],
                                    ["GPIO_PIN_11", "64"],
                                    ["GPIO_PIN_14", "128"],
                                    ["GPIO_PIN_15", "256"],
                                    ["GPIO_PIN_17", "512"],
                                    ["GPIO_PIN_18", "1024"],
                                    ["GPIO_PIN_19", "2048"],
                                    ["GPIO_PIN_21", "4096"],
                                    ["GPIO_PIN_22", "8192"],
                                    ["GPIO_PIN_23", "16384"],
                                    ["GPIO_PIN_24", "32768"],
                                    ["GPIO_PIN_25", "65536"]

                                ]
                            ),
                     "pin")
        .appendField(new Blockly.FieldDropdown([["OUTPUT", "true"], ["INPUT", "false"]]), "mode");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip('');
    this.setHelpUrl(Blockly.Msg.CONTROLS_IF_HELPURL);
  }
};

Blockly.Blocks['digitalWrite'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("digitalWrite")
        .appendField(
                        new Blockly.FieldDropdown
                            (
                                [
                                    ["GPIO_PIN_0", "1"], 
                                    ["GPIO_PIN_1", "2"],
                                    ["GPIO_PIN_4", "4"],
                                    ["GPIO_PIN_7", "8"],
                                    ["GPIO_PIN_8", "16"],
                                    ["GPIO_PIN_10", "32"],
                                    ["GPIO_PIN_11", "64"],
                                    ["GPIO_PIN_14", "128"],
                                    ["GPIO_PIN_15", "256"],
                                    ["GPIO_PIN_17", "512"],
                                    ["GPIO_PIN_18", "1024"],
                                    ["GPIO_PIN_19", "2048"],
                                    ["GPIO_PIN_21", "4096"],
                                    ["GPIO_PIN_22", "8192"],
                                    ["GPIO_PIN_23", "16384"],
                                    ["GPIO_PIN_24", "32768"],
                                    ["GPIO_PIN_25", "65536"]

                                ]
                            ),
                    "pin"
                    )
        .appendField(
                        new Blockly.FieldDropdown
                            (
                                [
                                    ["HIGH", "true"],
                                    ["LOW", "false"]
                                ]
                            ),
                             "status"
                    );

    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(130);
    this.setTooltip('');
    this.setHelpUrl(Blockly.Msg.CONTROLS_IF_HELPURL);
  }
};


Blockly.Blocks['delay'] = {
  init: function() {
    this.appendValueInput("delay")
        .setCheck("Number")
        .appendField("delay");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(290);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};