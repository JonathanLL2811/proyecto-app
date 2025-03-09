import { bootstrapApplication } from '@angular/platform-browser';
import { RouteReuseStrategy, provideRouter, withPreloading, PreloadAllModules } from '@angular/router';
import { IonicRouteStrategy, provideIonicAngular } from '@ionic/angular/standalone';
import { routes } from './app/app.routes';
import { AppComponent } from './app/app.component';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getAnalytics, provideAnalytics, ScreenTrackingService, UserTrackingService } from '@angular/fire/analytics';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getMessaging, provideMessaging } from '@angular/fire/messaging';

bootstrapApplication(AppComponent, {
 providers: [
  { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
  provideIonicAngular(),
  provideRouter(routes, withPreloading(PreloadAllModules)),
  provideFirebaseApp(() => initializeApp({
   projectId: "proyectodm2jona",
   appId: "1:925083118783:web:58b3c1683e9a77683caa0a",
   storageBucket: "proyectodm2jona.firebasestorage.app",
   apiKey: "AIzaSyApnE0r-YFPSoroM_7lCPVZi5t65o7omZg",
   authDomain: "proyectodm2jona.firebaseapp.com",
   messagingSenderId: "925083118783",
   measurementId: "G-JXNN90F7LZ"
  })),
  provideAuth(() => getAuth()),
  provideAnalytics(() => getAnalytics()),
  ScreenTrackingService,
  UserTrackingService,
  provideFirestore(() => getFirestore()),
  provideMessaging(() => getMessaging()),
 ],
});