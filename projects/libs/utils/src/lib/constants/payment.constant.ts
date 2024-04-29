import { IPaymentMethod } from '@utils/lib/interfaces/payment.interface';

export const PAYMENTMETHODS: IPaymentMethod[] = [
  { key: 'CASH', title: 'Cash', value: 'cash' },
  { key: 'CARD', title: 'Card', value: 'card' },
];
