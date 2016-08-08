'use strict';

goog.provide('Blockly.JavaScript.colour');

goog.require('Blockly.JavaScript');


Blockly.JavaScript['pinMode'] = function(block) {
  var dropdown_pin = block.getFieldValue('pin');
  var dropdown_pinmode = block.getFieldValue('pinMode');
  // TODO: Assemble JavaScript into code variable.
  var code = 'LOL;\n';
  return code;
};