const Lead = require('./Lead');
const Note = require('./Note');

Note.belongsTo(Lead, {
    foreignKey: 'lead_id',
    onDelete:'SET NULL'
});

Lead.hasMany(Note, {
    foreignKey:'lead_id'
});

module.exports = {Lead, Note};