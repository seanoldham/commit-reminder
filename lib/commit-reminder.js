'use babel';

import CommitReminderView from './commit-reminder-view';
import { CompositeDisposable } from 'atom';

export default {

  commitReminderView: null,
  modalPanel: null,
  subscriptions: null,

  activate(state) {
    this.commitReminderView = new CommitReminderView(state.commitReminderViewState);
    this.modalPanel = atom.workspace.notificationManager.addWarning("Don't forget to git commit!", {dismissable: true});

    // Events subscribed to in atom's system can be easily cleaned up with a CompositeDisposable
    this.subscriptions = new CompositeDisposable();

    // Register command that toggles this view
    this.subscriptions.add(atom.commands.add('atom-workspace', {
      'commit-reminder:toggle': () => this.toggle()
    }));
  },

  deactivate() {
    this.modalPanel.destroy();
    this.subscriptions.dispose();
    this.commitReminderView.destroy();
  },

  serialize() {
    return {
      commitReminderViewState: this.commitReminderView.serialize()
    };
  },

  toggle() {
  }

};
