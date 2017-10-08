import { Component, OnInit, Renderer2, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'rich-edit',
  templateUrl: './rich-edit.component.html',
  styleUrls: ['./rich-edit.component.scss']
})
export class RichEditComponent implements OnInit {
  @ViewChild('editor') editor: ElementRef;

  constructor(
    public render: Renderer2,
    public ele: ElementRef
  ) {
    
  }

  ngOnInit() {

  }

  getHtml(){

  }

  getText(){
    
  }

  setBaseTextColor(){

  }

  setBaseFontSize(){

  }

  setPadding(){

  }

  setBackgroundColor(){

  }

  setBackgroundImage(){

  }

  setWidth(){

  }

  setHeight(){

  }

  setTextAlign(){

  }

  setVerticalAlign(){

  }

  setPlaceholder(){

  }

  undo(){
    document.execCommand('undo', false, null);
  }

  redo () {
    document.execCommand('redo', false, null);
  }

  setBold(){
    document.execCommand('bold', false, null);
  }

  setItalic(){
    document.execCommand('italic', false, null);
  }

  setSubscript(){
    document.execCommand('subscript', false, null);
  }

  setSuperscript(){
    document.execCommand('superscript', false, null);
  }

  setStrikeThrough () {
    document.execCommand('strikeThrough', false, null);
  }

  setUnderline () {
      document.execCommand('underline', false, null);
  }

  setBullets () {
      document.execCommand('InsertUnorderedList', false, null);
  }

  setNumbers () {
      document.execCommand('InsertOrderedList', false, null);
  }

  setTextColor (color) {
    // to do **
    //restorerange();
    document.execCommand("styleWithCSS", null, true);
    document.execCommand('foreColor', false, color);
    document.execCommand("styleWithCSS", null, false);
  }

  setTextBackgroundColor (color) {
    // to do **
    //restorerange();
    document.execCommand("styleWithCSS", null, true);
    document.execCommand('hiliteColor', false, color);
    document.execCommand("styleWithCSS", null, false);
  }

  setFontSize (fontSize){
      document.execCommand("fontSize", false, fontSize);
  }

  setHeading (heading) {
      document.execCommand('formatBlock', false, '<h'+heading+'>');
  }

  setIndent () {
      document.execCommand('indent', false, null);
  }

  setOutdent () {
      document.execCommand('outdent', false, null);
  }

  setJustifyLeft () {
      document.execCommand('justifyLeft', false, null);
  }

  setJustifyCenter () {
      document.execCommand('justifyCenter', false, null);
  }

  setJustifyRight () {
      document.execCommand('justifyRight', false, null);
  }

  setBlockquote () {
      document.execCommand('formatBlock', false, '<blockquote>');
  }

  scrollToSelection(){
    // $('body').scrollTop($(window.getSelection().anchorNode).offset().top);
  }

  insertImage(){

  }

  insertHTML(){

  }

  deleteForward(){

  }

  deleteElement(){

  }

  insertLink(){

  }

  setTodo(){

  }

  prepareInsert(){

  }

  backuprange(){

  }

  restorerange(){

  }

  getRange(){}

  getRangeClone(){}

  selectNode(){}

  selectRange(){}

  saveRange(){}

  enabledEditingItems(){}

  focus(){}

  blurFocus(){

  }

  removeFormat(){}

  pasteNormalCallback(){}

  pasteSpecialCallback(){}
}
