export class NotAuthorized extends Error {
  constructor() {
    super('Not authorized to do this action');
    this.name = 'NotAuthorized';
    Object.setPrototypeOf(this, NotAuthorized.prototype);
  }
}
