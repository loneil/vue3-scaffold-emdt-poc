// Not really a router, but the configuration to proxy calls to THIS backend over to Traction
import config from 'config';
import { createProxyMiddleware } from 'http-proxy-middleware';

// Send calls to api/traction to the configured Traction environment
// If we need to alter any request bodies or anything when coming from the tenant UI
// can do that in these options (like with onProxyReq)
// https://www.npmjs.com/package/http-proxy-middleware#intercept-and-manipulate-requests
const TRACURL: string = config.get('server.tractionUrl');
const options = {
    target: TRACURL,
    changeOrigin: true,
    // So we go to the root of proxied traction (lose the api/traction part)
    pathRewrite: { '^/api/traction': '' }
};

export const tractionProxy = createProxyMiddleware(options);