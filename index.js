const io = require('socket.io')(process.env.PORT || 3001, {
  cors: {
    origin: 'https://easyconnect-one.vercel.app',
    methods: ['GET', 'POST'],
  },
});
// 'http://localhost:3000' ||
io.on('connection', (socket) => {
  console.log('A chump connected!');

  // Handle incoming messages
  socket.on('chat message', (data) => {
    console.log('Received message:', data);

    // Broadcast the message to all connected clients
    io.emit('new message', { user: data.user, message: data.message });
  });

  // Handle disconnections
  socket.on('disconnect', () => {
    console.log('A user disconnected');
  });
});
console.log('hello');
