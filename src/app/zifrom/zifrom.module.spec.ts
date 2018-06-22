import { ZifromModule } from './zifrom.module';

describe('ZifromModule', () => {
  let zifromModule: ZifromModule;

  beforeEach(() => {
    zifromModule = new ZifromModule();
  });

  it('should create an instance', () => {
    expect(zifromModule).toBeTruthy();
  });
});
