function noteControllerTests(){
  var noteController = new NoteController(new NoteList());
  noteController.insertHTML();
  assert.isTrue(document.getElementById('app').innerHTML === '<ul><li><div>Favourite drink: Seltzer</div></li></ul>', 'Test that string can be posted to HTML');
}

noteControllerTests();
