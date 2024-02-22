#! C:\Users\STEVE PC\desktop\alt_commander node

const list = require('./cli/list')
const add = require('./cli/add')
const { program } = require('commander')
const db = require('./db')


db.connect();

program
.command('list')
.description('list all the TODO tasks')
.action(list);

program
.command('add <task>')
.description('Add a new TODO task')
.action(add)


program.parse();