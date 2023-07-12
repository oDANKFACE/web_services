const express = require('express');
const router = express.Router();
const {listContacts, getContact, createContact, updateContact, deleteContact} = require('../controllers/contacts');

router.get('/', listContacts);
router.get('/:id', getContact);
router.post('/', createContact);
router.put('/:id', updateContact);
router.delete('/:id', deleteContact);

module.exports = router;