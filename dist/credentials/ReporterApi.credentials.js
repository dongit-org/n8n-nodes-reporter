"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReporterApi = void 0;
class ReporterApi {
    constructor() {
        this.name = 'reporterApi';
        this.displayName = 'Reporter';
        this.documentationUrl = 'https://docs.securityreporter.app/reporter/latest/settings/api_tokens.html';
        this.icon = 'file:reporter.svg';
        this.properties = [
            {
                displayName: 'Reporter URL',
                name: 'url',
                type: 'string',
                default: '',
                description: 'The base Reporter URL that you use to access Reporter. Example: https://www.securityreporter.app',
            },
            {
                displayName: 'API Token',
                name: 'apiToken',
                type: 'string',
                typeOptions: {
                    password: true,
                },
                default: '',
                description: 'The API Token that you will use. See the Api Tokens part of your documentation (found at \'{reporterURL}/docs/settings/api_tokens.html\').',
            },
        ];
        this.authenticate = {
            type: 'generic',
            properties: {
                headers: {
                    'Authorization': '=Bearer {{$credentials.apiToken}}',
                    'Accept': 'application/vnd.api+json',
                    'Content-Type': 'application/vnd.api+json',
                },
            },
        };
        this.test = {
            request: {
                baseURL: '={{$credentials.url}}',
                url: '/api/v1/users/me',
            },
        };
    }
}
exports.ReporterApi = ReporterApi;
//# sourceMappingURL=ReporterApi.credentials.js.map