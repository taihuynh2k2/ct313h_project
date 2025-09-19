const db = require("./db");

const Tenant = {
  getAll: (callback) => {
    db.query("SELECT * FROM tenants", callback);
  },

  create: (tenant, callback) => {
    db.query(
      "INSERT INTO tenants (full_name, phone, id_card, room_id, start_date) VALUES (?, ?, ?, ?, ?)",
      [tenant.full_name, tenant.phone, tenant.id_card, tenant.room_id, tenant.start_date],
      callback
    );
  },

  update: (id, tenant, callback) => {
    db.query(
      "UPDATE tenants SET full_name=?, phone=?, id_card=?, room_id=? WHERE id=?",
      [tenant.full_name, tenant.phone, tenant.id_card, tenant.room_id, id],
      callback
    );
  },

  delete: (id, callback) => {
    db.query("DELETE FROM tenants WHERE id=?", [id], callback);
  }
};

module.exports = Tenant;
