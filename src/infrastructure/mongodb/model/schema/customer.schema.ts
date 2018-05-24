import { Document, Schema } from 'mongoose';
import { Customer } from '../../../../domain/customer';

export interface ICustomerDocument extends Customer, Document {}

export const CustomerSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
      type: String,
      required: true,
      unique: true
  }
});
