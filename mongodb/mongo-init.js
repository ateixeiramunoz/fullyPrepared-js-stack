db.auth('admin', 'password')

db = db.getSiblingDB('YoVoyPorTi')

db.createUser({
  user: 'admin',
  pwd: 'test-password',
  roles: [
    {
      role: 'root',
      db: 'admin',
    },
  ],
});
