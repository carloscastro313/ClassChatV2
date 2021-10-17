import { EventEmitter, Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { msg } from '../models/msg.model';
import { SystemService } from '../utility/services/system.service';
import { User } from '../login/models/user.model';
import { Storage } from '@ionic/storage-angular';

@Injectable({
  providedIn: 'root',
})
export class ChatService {
  correo: string = '';
  pushListener = new EventEmitter<any>();
  constructor(
    private db: AngularFirestore,
    private storage: Storage,
    private system: SystemService
  ) {}

  async init() {
    this.correo = await this.storage.get('correo');
  }

  async send(msg: string, path: string) {
    try {
      await this.db
        .collection<msg>(path)
        .add({ msg, date: new Date(), email: this.correo });
      this.pushListener.emit('');
    } catch (error) {}
  }

  getMsg(path: string) {
    return this.db.collection<msg>(path);
  }
}
