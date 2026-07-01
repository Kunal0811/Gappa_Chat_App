// Temporary mock data — will be replaced by API/WebSocket data later
export const mockChats = [
  {
    id: 'c1',
    name: 'Aarav Sharma',
    lastMessage: 'See you at 6pm then 👍',
    time: '10:42 AM',
    unread: 2,
    online: true,
    avatarColor: '#F15C6D',
  },
  {
    id: 'c2',
    name: 'Project Team',
    isGroup: true,
    lastMessage: 'Sneha: Pushed the new build',
    time: '9:15 AM',
    unread: 0,
    online: false,
    avatarColor: '#7C5CF1',
  },
  {
    id: 'c3',
    name: 'Priya Mehta',
    lastMessage: 'Sent a photo',
    time: 'Yesterday',
    unread: 0,
    online: false,
    avatarColor: '#FFB020',
  },
  {
    id: 'c4',
    name: 'Mumbai University Friends',
    isGroup: true,
    lastMessage: 'Kunal: anyone free for lunch?',
    time: 'Yesterday',
    unread: 5,
    online: false,
    avatarColor: '#25D366',
  },
];

export const mockContacts = [
  { id: 'u1', name: 'Aarav Sharma', phone: '+91 98200 11122', avatarColor: '#F15C6D' },
  { id: 'u2', name: 'Priya Mehta', phone: '+91 98200 33344', avatarColor: '#FFB020' },
  { id: 'u3', name: 'Rohan Verma', phone: '+91 98200 55566', avatarColor: '#3DA9FC' },
  { id: 'u4', name: 'Sneha Iyer', phone: '+91 98200 77788', avatarColor: '#7C5CF1' },
  { id: 'u5', name: 'Devansh Patel', phone: '+91 98200 99900', avatarColor: '#25D366' },
];

export const mockMessages = {
  c1: [
    { id: 'm1', text: 'Hey! Are we still on for the meeting?', sender: 'them', timestamp: '10:30 AM', status: 'read' },
    { id: 'm2', text: 'Yes, 6pm works for me', sender: 'me', timestamp: '10:35 AM', status: 'read' },
    { id: 'm3', text: 'See you at 6pm then 👍', sender: 'them', timestamp: '10:42 AM', status: 'read' },
  ],
  c2: [
    { id: 'm1', text: 'Pushed the new build to staging', sender: 'them', timestamp: '9:15 AM', status: 'read' },
  ],
  c3: [
    { id: 'm1', text: 'Sent a photo', sender: 'them', timestamp: 'Yesterday', status: 'read' },
  ],
  c4: [
    { id: 'm1', text: 'anyone free for lunch?', sender: 'me', timestamp: 'Yesterday', status: 'delivered' },
  ],
};