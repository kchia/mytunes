// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({

  initialize: function() {

    this.on('dequeue', function(song){
      this.remove(song);
    }, this);

    this.on('ended', function(song){
      this.remove(this.at(0));
      if(this.models.length > 0){
        this.playFirst();
      }
    }, this);

  },

  playFirst: function() {
    if(this.models.length > 0) {
      console.log(this.at(0));
      this.at(0).play();
    }
  },

  enqueue: function(song) {
    this.add(song);
    if(this.models.length === 1){
        this.playFirst();
    }
  }

});
