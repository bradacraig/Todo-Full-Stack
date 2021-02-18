const connection = require('./connection')

module.exports = {
  addVolunteer,
  deleteVolunteer,
  getVolunteer
}

function addVolunteer (info, db = connection) {
  const { username, eventId } = info
  return db('eventVolunteers')
    .insert({
      username,
      event_id: eventId
    })
}

function deleteVolunteer (info, db = connection) {
  const { id } = info
  return db('eventVolunteers')
    .where('id', id)
    .delete()
}

function getVolunteer (db = connection) {
  return db('eventVolunteers').select()
}

//
// DnB -christo id, event id

// id 1 christos id, event id
