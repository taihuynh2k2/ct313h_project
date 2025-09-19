const db = require("./db");

const Room = {
  getAll: (callback) => {
    db.query("SELECT * FROM rooms", callback);
  },

  create: (room, callback) => {
    db.query(
      "INSERT INTO rooms (room_name, price, status) VALUES (?, ?, ?)",
      [room.room_name, room.price, room.status],
      callback
    );
  },

  update: (id, room, callback) => {
    db.query(
      "UPDATE rooms SET room_name=?, price=?, status=? WHERE id=?",
      [room.room_name, room.price, room.status, id],
      callback
    );
  },

  delete: (id, callback) => {
    db.query("DELETE FROM rooms WHERE id=?", [id], callback);
  }
};

module.exports = Room;
