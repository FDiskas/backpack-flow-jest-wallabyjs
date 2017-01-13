// @flow

export async function thingProvider(): Promise<ThingPromise> {
  return Promise.resolve({one: 'two'});
}
