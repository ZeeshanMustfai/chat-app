import { CallEntry, Contact } from '@/types';

export const PROTECTED_ROUTES = ['/', '/create-member', '/members'];
export const AUTH_ROUTES = ['/login', '/register'];
// Mock data
export const calls: CallEntry[] = [
  { id: '1', name: 'Kim Williamson', time: '2:34pm', status: 'missed', initials: 'KW', color: 'bg-purple-400' },
  { id: '2', name: 'Shane Watson', time: '2:34pm', status: 'outgoing', initials: 'SW', color: 'bg-green-400' },
  { id: '3', name: 'Hazellwood', time: '2:34pm', status: 'incoming', initials: 'H', color: 'bg-pink-400' },
  { id: '4', name: 'Zunaira Butt', time: '2:34pm', status: 'incoming', initials: 'ZB', color: 'bg-pink-400' },
  { id: '5', name: 'Kamran Masood', time: '2:34pm', status: 'outgoing', initials: 'KM', color: 'bg-purple-400' },
];

export const contacts: Contact[] = [
  { id: '1', name: 'Alina', phone: '092345784521', initials: 'A', color: 'bg-blue-400' },
  { id: '2', name: 'Anna', phone: '092345784521', initials: 'A', color: 'bg-green-400' },
  { id: '3', name: 'Brown', phone: '092345784521', initials: 'B', color: 'bg-orange-400' },
  { id: '4', name: 'Ben', phone: '092345784521', initials: 'B', color: 'bg-purple-400' },
  { id: '5', name: 'Cutting', phone: '092345784521', initials: 'C', color: 'bg-pink-400' },
  { id: '6', name: 'Carl', phone: '092345784521', initials: 'C', color: 'bg-indigo-400' },
];
