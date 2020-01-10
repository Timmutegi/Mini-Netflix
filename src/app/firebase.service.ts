import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  constructor(private db: AngularFirestore) {}

  createFavoriteMovie(value, name) {
    return this.db.collection('favorites').doc(value).set({name});
  }

  getFavoriteMovieID(value) {
    return this.db.collection('favorites').doc(value).get();
  }

  delete(ID) {
    return this.db.collection('favorites').doc(ID).delete();
  }

  getLiked() {
    return this.db.collection('favorites').snapshotChanges();
  }
}
