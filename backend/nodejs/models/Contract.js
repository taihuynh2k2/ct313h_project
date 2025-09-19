const db = require("./db");

const Contract = {
  getAll: (callback) => {
    db.query("SELECT * FROM contracts", callback);
  },

  create: (contract, callback) => {
    db.query(
      "INSERT INTO contracts (tenant_id, room_id, start_date, end_date, deposit) VALUES (?, ?, ?, ?, ?)",
      [contract.tenant_id, contract.room_id, contract.start_date, contract.end_date, contract.deposit],
      callback
    );
  },

  update: (id, contract, callback) => {
    db.query(
      "UPDATE contracts SET end_date=?, deposit=? WHERE id=?",
      [contract.end_date, contract.deposit, id],
      callback
    );
  },

  delete: (id, callback) => {
    db.query("DELETE FROM contracts WHERE id=?", [id], callback);
  }
};

module.exports = Contract;
