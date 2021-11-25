const loki = require('lokijs')
const config = require('config');

const db = new loki(config.get('db.filename'));
const tasks = db.addCollection('tasks');
const sequence = db.addCollection('sequence');
sequence.insert({ key: 'seq', value: 1 });

module.exports = {
  tasks,
  sequence,
};
