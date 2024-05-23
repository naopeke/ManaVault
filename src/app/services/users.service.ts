import { Injectable, inject } from '@angular/core';
import { Firestore, doc, docData, setDoc, updateDoc } from '@angular/fire/firestore';
import { ProfileUser } from '../models/user.model';
import { AuthService } from './auth.service';
import { concatMap, switchMap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { toSignal } from '@angular/core/rxjs-interop';
import { Storage, getDownloadURL, ref, uploadBytes } from '@angular/fire/storage';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  firestore = inject(Firestore);
  authService = inject(AuthService);
  storage = inject(Storage);



  constructor() { }
}
