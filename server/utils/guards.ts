import { Server } from 'socket.io';
import { Schema } from 'mongoose';
import { EnhancedServer } from './enhancer';
import { UserDocument } from '../models/user';

export function isEnhancedServer (socket: Server): socket is EnhancedServer {
  return (socket as EnhancedServer)._use !== undefined;
}

export function isUserDocument (to: Schema.Types.ObjectId | UserDocument): to is UserDocument {
  return typeof to === 'object';
}
