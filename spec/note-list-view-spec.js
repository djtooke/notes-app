function noteListViewTests(){
  var list = new NoteList();
  var listView = new ListView(list);
  list.createNote('Favourite food: Pesto');
  list.createNote('Favourite drink: Seltzer');
  assert.isTrue(listView.display() === '<ul><li><div>Favourite food: Pesto</div></li><li><div>Favourite drink: Seltzer</div></li></ul>', 'test that NoteListView can output HTML string of note texts');
}

noteListViewTests();
