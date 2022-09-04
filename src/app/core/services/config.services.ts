import { Injectable, InjectionToken } from '@angular/core';
import { environment } from 'src/environments/environment';
export interface AppConfig {
  apiUrl: string;
  apiUrlControl: string;
}
export const APP_CONFIG: AppConfig = {
  apiUrl: 'http://localhost:9000',
  apiUrlControl: '',
};
export const CONFIG_TOKEN = new InjectionToken<AppConfig>('CONFIG_TOKEN', {
  providedIn: 'any',
  factory: () => APP_CONFIG,
});
@Injectable({ providedIn: 'any' })
export class ConfigService {
  constructor() {}
}

// @Inject(CONFIG_TOKEN) private config: AppConfig => Inject into constructor
