/* eslint-disable no-console */
import { LightningElement,track,api } from 'lwc';

export default class Account360 extends LightningElement {
@track hdc=false;
@api recId;
@track a;
@track res;
@track FinalCutRest;
connectedCallback(){
    console.log('RECORDID::'+this.recId);
    this.a=window.location.href;
    console.log('URL::'+this.a);
    this.res = this.a.substring(this.a.length - 23, this.a.length);
    console.log('CUT URL::'+this.res);
    this.FinalCutRest = this.res.substring(0, 18);
    console.log('FINAL CUT URL::'+this.FinalCutRest);
}
  handleHDC(){
    console.log('RECORDID::'+this.recId);
    console.log('INSIDE');  
    this.hdc=true;
  }  
}