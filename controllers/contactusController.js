import Contact from "../models/contactusModel.js";

export async function getAll(req, res) {
  try {
    const contacts = await Contact.find();
    res.json({ message: contacts });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Internal Server Error" });
  }
}

export async function getContactById(req, res) {
  const id = req.params.id;

  try {
    const contact = await Contact.findById(id);
    if (!contact) {
      return res.status(404).json({ message: "Contact not found" });
    }
    res.json(contact);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Internal Server Error" });
  }
}

export async function addContact(req, res, next) {
  try {
    let body = req.body;
    let newContact = new Contact(body);
    await newContact.save();
    res.status(200).send({ success: true, message: newContact });
  } catch (e) {
    return res.status(500).send(e);
  }
}

export async function deleteContactById(req, res) {
  const id = req.params.id;

  try {
    const deletedContact = await Contact.findByIdAndDelete(id);
    if (!deletedContact) {
      return res.status(404).json({ message: "Contact not found" });
    }
    res.json({ message: "Contact deleted successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Internal Server Error" });
  }
}
