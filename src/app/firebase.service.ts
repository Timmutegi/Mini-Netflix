import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  constructor(private db: AngularFirestore) {}

  createFavoriteMovie(imdbID, name, uid) {
    return this.db.collection('favorites').doc(imdbID).set({name, uid});
  }

  getFavoriteMovieID(value) {
    return this.db.collection('favorites').doc(value).get();
  }

  delete(ID) {
    return this.db.collection('favorites').doc(ID).delete();
  }
}
