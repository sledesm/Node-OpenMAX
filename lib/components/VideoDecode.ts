//This file is auto-generated from 'node headerGeneration/generateComponents.js' 

import util = require('util')
import omx = require('../../')

export class VideoDecode extends omx.Component {
  constructor() {
    super('video_decode');
    var self = this;
    this.init(omx.ILCLIENT_CREATE_FLAGS.ILCLIENT_DISABLE_ALL_PORTS | omx.ILCLIENT_CREATE_FLAGS.ILCLIENT_ENABLE_INPUT_BUFFERS | omx.ILCLIENT_CREATE_FLAGS.ILCLIENT_ENABLE_OUTPUT_BUFFERS);
    this.component.setPorts(130, 131);
  }
  
  setVideoPortFormat (eCompressionFormat: omx.OMX_VIDEO_CODINGTYPE) {
    var format = this.component.getParameter(this.component.in_port, omx.OMX_INDEXTYPE.OMX_IndexParamVideoPortFormat);
    format.eCompressionFormat = eCompressionFormat;
    this.component.setParameter(this.component.in_port, omx.OMX_INDEXTYPE.OMX_IndexParamVideoPortFormat, format);
  };
}