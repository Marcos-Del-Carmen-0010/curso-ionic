import { bootstrapApplication } from '@angular/platform-browser';
import { RouteReuseStrategy, provideRouter, withPreloading, PreloadAllModules } from '@angular/router';
import { IonicRouteStrategy, provideIonicAngular } from '@ionic/angular/standalone';

import { routes } from './app/app.routes';
import { AppComponent } from './app/app.component';
import { provideHttpClient } from "@angular/common/http";
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { getFirestore, initializeFirestore, provideFirestore} from '@angular/fire/firestore'
import {environment} from "./environments/environment";
import {Capacitor} from "@capacitor/core";
import {initializeAuth, indexedDBLocalPersistence, provideAuth, getAuth} from '@angular/fire/auth';
import { persistentLocalCache } from '@firebase/firestore'


bootstrapApplication(AppComponent,
  {
    providers: [
      {provide: RouteReuseStrategy, useClass: IonicRouteStrategy},
      provideIonicAngular(),
      provideRouter(routes, withPreloading(PreloadAllModules)),
      provideHttpClient(),
      provideFirebaseApp(() => {
        const app = initializeApp(environment.firebaseConfig);
        // if (Capacitor.isNativePlatform()) {
        initializeFirestore(app, {
          localCache: persistentLocalCache()
        });
        initializeAuth(app, {
          persistence: indexedDBLocalPersistence
        });
        // }
        return app;
      }),
      provideFirestore(() => getFirestore()),
      provideAuth(() => getAuth()),
    ],
  });
