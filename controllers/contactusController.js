import Contact from "../models/contactusModel.js";

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

  const contactusController = {addContact };
  export default contactusController;