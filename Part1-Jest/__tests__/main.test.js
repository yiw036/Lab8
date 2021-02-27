const formatVolumeIconPath = require('../assets/scripts/main');
  
  describe('volume icon level', () => {
    test('volume level 3 above 66', () => {
      expect(formatVolumeIconPath(67)).toBe('./assets/media/icons/volume-level-3.svg');
    });
    test('volume level 2 above 33', () => {
        expect(formatVolumeIconPath(34)).toBe('./assets/media/icons/volume-level-2.svg');
    });
    test('volume level 1 above 0', () => {
        expect(formatVolumeIconPath(1)).toBe('./assets/media/icons/volume-level-1.svg');
    });
    test('volume level 0', () => {
        expect(formatVolumeIconPath(0)).toBe('./assets/media/icons/volume-level-0.svg');
    });
  });