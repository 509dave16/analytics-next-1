const faultyTrack = {
  name: 'Fails to send',
  type: 'destination',
  version: '1.0',

  load: async () => {},
  isLoaded: () => true,

  track(_ctx) {
    throw new Error('aaay')
  },
}

window.analytics.register(faultyTrack)
