import { ZiformModule } from './ziform.module';

describe('ZiformModule', () => {
  let ziformModule: ZiformModule;

  beforeEach(() => {
    ziformModule = new ZiformModule();
  });

  it('should create an instance', () => {
    expect(ziformModule).toBeTruthy();
  });
});
