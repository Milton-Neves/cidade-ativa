import { EventItem } from '../models/event.model';

export const MOCK_EVENTS: EventItem[] = [
  {
    id: 1,
    title: 'Corrida Urbana',
    location: 'Natal/RN',
    participants: 120,
    status: 'Ativo',
    district: 'Centro',
  },

  {
    id: 2,
    title: 'Pedalada Coletiva',
    location: 'Parnamirim/RN',
    participants: 80,
    status: 'Ativo',
    district: 'Zona Sul',
  },

  {
    id: 3,
    title: 'Yoga no Parque',
    location: 'Natal/RN',
    participants: 45,
    status: 'Encerrado',
    district: 'Zona Norte',
  },

  {
    id: 4,
    title: 'Feira Cultural',
    location: 'Macaíba/RN',
    participants: 200,
    status: 'Ativo',
    district: 'Centro',
  },

  {
    id: 5,
    title: 'Aula de Dança',
    location: 'Natal/RN',
    participants: 65,
    status: 'Ativo',
    district: 'Zona Sul',
  },
];
