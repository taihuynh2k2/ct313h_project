const db = require("./db");

const Invoice = {
  getAll: (callback) => {
    db.query("SELECT * FROM invoices", callback);
  },

  create: (invoice, callback) => {
    db.query(
      "INSERT INTO invoices (tenant_id, room_id, amount, invoice_date) VALUES (?, ?, ?, ?)",
      [invoice.tenant_id, invoice.room_id, invoice.amount, invoice.invoice_date],
      callback
    );
  },

  updateStatus: (id, status, callback) => {
    db.query("UPDATE invoices SET status=? WHERE id=?", [status, id], callback);
  },

  delete: (id, callback) => {
    db.query("DELETE FROM invoices WHERE id=?", [id], callback);
  }
};

module.exports = Invoice;
