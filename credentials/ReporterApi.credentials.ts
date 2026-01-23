import type {
    IAuthenticateGeneric,
    ICredentialTestRequest,
    ICredentialType,
    INodeProperties,
} from "n8n-workflow";

export class ReporterApi implements ICredentialType {
    name = "reporterApi";
    displayName = "Reporter";
    documentationUrl =
        "https://docs.securityreporter.app/reporter/latest/settings/api_tokens.html";
    icon = "file:reporter.svg";
    properties: INodeProperties[] = [
        {
            displayName: "Reporter URL",
            name: "url",
            type: "string",
            default: "",
            description:
                "The base Reporter URL that you use to access Reporter. Example: https://www.securityreporter.app",
        },
        {
            displayName: "API Token",
            name: "apiToken",
            type: "string",
            typeOptions: {
                password: true,
            },
            default: "",
            description:
                "The API Token that you will use. See the Api Tokens part of your documentation (found at '{reporterURL}/docs/settings/api_tokens.html').",
        },
    ];

    authenticate: IAuthenticateGeneric = {
        type: "generic",
        properties: {
            headers: {
                Authorization: "=Bearer {{$credentials.apiToken}}",
                Accept: "application/vnd.api+json",
                "Content-Type": "application/vnd.api+json",
            },
        },
    };

    test: ICredentialTestRequest = {
        request: {
            baseURL: "={{$credentials.url}}",
            url: "/api/v1/users/me",
        },
    };
}
