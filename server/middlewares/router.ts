import { Packet } from '../utils';

interface Routes {
  [routeName: string]: Function;
}

/**
 * 路由处理
 * @param routes 路由集合
 */
export default function router (routes: Routes) {
  return async (packet: Packet) => {
    if (packet.event === 'connection') {
      Object.keys(routes).forEach((routeName) => packet.socket._on(routeName));
    }
    if (routes[packet.event]) {
      await routes[packet.event](packet);
    }
  };
}
