const Lead = require('./Lead');
const Note = require('./Note');

Note.belongsTo(Lead, {
    foreignKey: 'lead_id',
    onDelete:'CASCADE'
});

Lead.hasMany(Note, {
    foreignKey:'lead_id'
});

module.exports = {Lead, Note};