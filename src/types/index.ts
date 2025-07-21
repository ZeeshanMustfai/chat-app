export interface Contact {
  id: string;
  name: string;
  phone: string;
  avatar?: string;
  initials: string;
  color: string;
}

export interface CallEntry {
  id: string;
  name: string;
  time: string;
  status: 'missed' | 'incoming' | 'outgoing';
  avatar?: string;
  initials: string;
  color: string;
}

export interface Message {
  id: string;
  text: string;
  time: string;
  isSent: boolean;
}
