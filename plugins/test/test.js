module.exports = {
  name: 'test',
  description: '',
  chat: true,
  event: false,
  type: 5004,
  command: 'test',
  permissions: [],
  alias: [],
  cooldown: 10,
  userCreated: true,
  settings: false,
  execute(client) {
    client.sendMessage('This is only a test....');
  },
};