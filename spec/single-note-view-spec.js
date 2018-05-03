function singleNoteViewTests(){
  var note = new Note('Favourite drink: Seltzer');
  var singleNoteView = new SingleNoteView(note);
  assert.isTrue(singleNoteView.display() === '<div>Favourite drink: Seltzer</div>', 'Test that single note view object displays a single note');
}

singleNoteViewTests();
