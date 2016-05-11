'use babel';

export default class CommitReminderView {

  constructor(serializedState) {
    var count = 0;
    var total = 1000;
    atom.keymaps.onDidFailToMatchBinding(function(event) {
      count++;
      if (count >= total) {
        atom.workspace.notificationManager.addWarning("Don't forget to git commit!", {dismissable: true});
        count = 0;
      }
    })
  }

  // Returns an object that can be retrieved when package is activated
  serialize() {}

  // Tear down any state and detach
  destroy() {
    this.element.remove();
  }

  getElement() {
    return this.element;
  }

}
