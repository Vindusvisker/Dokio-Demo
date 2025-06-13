// Persistent localStorage implementation for demo app
class PersistentStorage {
  async save(key: string, data: any): Promise<void> {
    try {
      const serializedData = JSON.stringify(data);
      localStorage.setItem(key, serializedData);
      console.log(`✅ Saved ${key} to localStorage:`, data);
    } catch (error) {
      console.error(`❌ Failed to save ${key}:`, error);
      throw error;
    }
  }

  async load(key: string): Promise<any> {
    try {
      const data = localStorage.getItem(key);
      if (data === null) {
        console.log(`📭 No data found for ${key}`);
        return null;
      }
      const parsed = JSON.parse(data);
      console.log(`📥 Loaded ${key} from localStorage:`, parsed);
      return parsed;
    } catch (error) {
      console.error(`❌ Failed to load ${key}:`, error);
      return null;
    }
  }

  async remove(key: string): Promise<void> {
    try {
      localStorage.removeItem(key);
      console.log(`🗑️ Removed ${key} from localStorage`);
    } catch (error) {
      console.error(`❌ Failed to remove ${key}:`, error);
      throw error;
    }
  }

  async clear(): Promise<void> {
    try {
      localStorage.clear();
      console.log('🧹 Cleared all localStorage data');
    } catch (error) {
      console.error('❌ Failed to clear localStorage:', error);
      throw error;
    }
  }

  // Get all keys with a specific prefix
  async getKeys(prefix?: string): Promise<string[]> {
    try {
      const keys = Object.keys(localStorage);
      const filtered = prefix ? keys.filter(key => key.startsWith(prefix)) : keys;
      console.log(`🔑 Found ${filtered.length} keys${prefix ? ` with prefix "${prefix}"` : ''}:`, filtered);
      return filtered;
    } catch (error) {
      console.error('❌ Failed to get keys:', error);
      return [];
    }
  }

  // Bulk operations
  async saveBulk(data: Record<string, any>): Promise<void> {
    for (const [key, value] of Object.entries(data)) {
      await this.save(key, value);
    }
  }

  async loadBulk(keys: string[]): Promise<Record<string, any>> {
    const result: Record<string, any> = {};
    for (const key of keys) {
      result[key] = await this.load(key);
    }
    return result;
  }

  // UserConfig specific helpers
  async saveUserConfig(config: any): Promise<void> {
    await this.save('user-config', {
      ...config,
      lastUpdated: new Date().toISOString(),
      onboardingCompleted: true
    });
  }

  async loadUserConfig(): Promise<any | null> {
    return await this.load('user-config');
  }

  async isOnboardingCompleted(): Promise<boolean> {
    const config = await this.loadUserConfig();
    return config?.onboardingCompleted === true;
  }

  // Theme persistence
  async saveTheme(themeId: string): Promise<void> {
    await this.save('background-theme', themeId);
  }

  async loadTheme(): Promise<string | null> {
    return await this.load('background-theme');
  }

  // Demo data initialization
  async initializeDemoData(): Promise<void> {
    const hasData = await this.isOnboardingCompleted();
    if (!hasData) {
      console.log('🎬 Initializing demo app - no existing data found');
    } else {
      console.log('📊 Demo app has existing user data');
    }
  }

  // Export/Import for demo purposes
  async exportData(): Promise<string> {
    const keys = await this.getKeys();
    const data: Record<string, any> = {};
    for (const key of keys) {
      data[key] = await this.load(key);
    }
    return JSON.stringify(data, null, 2);
  }

  async importData(jsonData: string): Promise<void> {
    try {
      const data = JSON.parse(jsonData);
      await this.saveBulk(data);
      console.log('📥 Imported data successfully');
    } catch (error) {
      console.error('❌ Failed to import data:', error);
      throw error;
    }
  }
}

export const storage = new PersistentStorage(); 