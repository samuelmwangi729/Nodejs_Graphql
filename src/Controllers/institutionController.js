const Institution = require("../Models/Institution");

const createInstitution = async (data) => {
  const { name, email, address } = data;

  if (!name || !name.trim()) {
    throw new Error("Institution name is required.");
  }

  return await Institution.create({
    name: name.trim(),
    email,
    address,
  });
};

const getInstitutions = async () => {
  return await Institution.find().sort({ createdAt: -1 });
};

const getInstitutionById = async (id) => {
  const institution = await Institution.findById(id);

  if (!institution) {
    throw new Error("Institution not found.");
  }

  return institution;
};

const updateInstitution = async (id, data) => {
  const institution = await Institution.findById(id);

  if (!institution) {
    throw new Error("Institution not found.");
  }

  const { name, email, address, status } = data;

  if (name !== undefined) {
    if (!name.trim()) {
      throw new Error("Institution name cannot be empty.");
    }

    institution.name = name.trim();
  }

  if (email !== undefined) {
    institution.email = email;
  }

  if (address !== undefined) {
    institution.address = address;
  }

  if (status !== undefined) {
    institution.status = status;
  }

  return await institution.save();
};


module.exports = {
  createInstitution,
  getInstitutions,
  getInstitutionById,
  updateInstitution
};