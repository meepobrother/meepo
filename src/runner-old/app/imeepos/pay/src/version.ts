export class Version {
  constructor(public full: string) {}

  get major(): string { return this.full.split('.')[0]; }

  get minor(): string { return this.full.split('.')[1]; }

  get patch(): string { return this.full.split('.').slice(2).join('.'); }
}

/**
 * @stable
 */
 
export const VERSION = new Version('1.0.0');