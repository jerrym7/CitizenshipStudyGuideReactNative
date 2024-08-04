/* eslint-disable */
import * as Router from 'expo-router';

export * from 'expo-router';

declare module 'expo-router' {
  export namespace ExpoRouter {
    export interface __routes<T extends string = string> extends Record<string, unknown> {
      StaticRoutes: `` | `/` | `/(tabs)` | `/_sitemap` | `/history` | `/home` | `/practice` | `/settings` | `/study`;
      DynamicRoutes: `/history/${Router.SingleRoutePart<T>}` | `/study/${Router.SingleRoutePart<T>}`;
      DynamicRouteTemplate: `/history/[id]` | `/study/[id]`;
    }
  }
}
