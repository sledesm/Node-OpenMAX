//This file is auto-generated from 'node headerGeneration/generateComponents.js' 

var omx = require('../../');
var Component = omx.Component;
var ILCLIENT_CREATE_FLAGS = omx.ILCLIENT_CREATE_FLAGS;
var OMX_STATETYPE = omx.OMX_STATETYPE;
var OMX_INDEXTYPE = omx.OMX_INDEXTYPE;

function Visualisation() {
  if (!(this instanceof Visualisation)) {
    return new Visualisation();
  }
  var self = this;
  this.init(ILCLIENT_CREATE_FLAGS.ILCLIENT_DISABLE_ALL_PORTS | ILCLIENT_CREATE_FLAGS.ILCLIENT_ENABLE_INPUT_BUFFERS | ILCLIENT_CREATE_FLAGS.ILCLIENT_ENABLE_OUTPUT_BUFFERS);
  this.component.setPorts(140, 141);

  self.on('finish', function () {
    console.log('Visualisation on finish');
    self.component.emptyBuffer(undefined, function () {
      self.component.changeState(OMX_STATETYPE.OMX_StateIdle);
      self.component.changeState(OMX_STATETYPE.OMX_StateLoaded);
    });
  });
}

Visualisation.prototype = new Component('visualisation');



module.exports = Visualisation;