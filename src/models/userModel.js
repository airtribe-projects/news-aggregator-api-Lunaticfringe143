const users = [];

module.exports = {

 create(user){
  users.push(user);
  return user;
 },

 findByEmail(email){
  return users.find(u => u.email === email);
 },

 findById(id){
  return users.find(u => u.id === id);
 },

 updatePreferences(id, preferences){
  const user = users.find(u => u.id === id);

  if(user){
   user.preferences = preferences;
  }

  return user;
 }

};