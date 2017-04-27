import mongoose from 'mongoose';
import AuctionSchema from './schema';

// AuctionSchema.pre('save', function save(next) {});

export default mongoose.model('auction', AuctionSchema);
