(function(exports){
  function NoteController(noteList){
    this.noteList = noteList;
    this.noteList.createNote('Favourite drink: Seltzer');
    this.listView = new ListView(this.noteList);
  }

  NoteController.prototype.insertHTML = function() {
    document.getElementById('app').innerHTML = this.listView.display();
  };


  exports.NoteController = NoteController;

})(this);
