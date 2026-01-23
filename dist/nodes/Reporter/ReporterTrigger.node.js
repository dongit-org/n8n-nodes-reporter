"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReporterTrigger = void 0;
class ReporterTrigger {
    constructor() {
        this.description = {
            displayName: 'Reporter Trigger',
            name: 'reporterTrigger',
            icon: 'file:reporter.svg',
            group: ['trigger'],
            version: 1,
            subtitle: '={{$parameter["event"]}}',
            description: 'Starts the workflow when Security Reporter events occur',
            defaults: {
                name: 'Reporter Trigger',
            },
            inputs: [],
            outputs: ['main'],
            credentials: [
                {
                    name: 'reporterApi',
                    required: true,
                },
            ],
            webhooks: [
                {
                    name: 'default',
                    httpMethod: 'POST',
                    responseMode: 'onReceived',
                    path: 'webhook',
                },
            ],
            properties: [
                {
                    displayName: 'Event',
                    name: 'event',
                    type: 'options',
                    options: [
                        {
                            name: 'Assessment created',
                            value: 'assessment:created',
                            description: 'Triggers when an assessment is created',
                        },
                        {
                            name: 'Assessment updated',
                            value: 'assessment:updated',
                            description: 'Triggers when an assessment or one of its phases is updated',
                        },
                        {
                            name: 'Assessment completed',
                            value: 'assessment:completed',
                            description: 'Triggers when an assessment&#039;s status is set to a completed state',
                        },
                        {
                            name: 'Finding created',
                            value: 'finding:created',
                            description: 'Triggers when a new finding is created',
                        },
                        {
                            name: 'Finding updated',
                            value: 'finding:updated',
                            description: 'Triggers when a finding is updated',
                        },
                        {
                            name: 'Finding published',
                            value: 'finding:published',
                            description: 'Triggers when an existing or new finding is published',
                        },
                        {
                            name: 'Reporter update available',
                            value: 'reporter:update-available',
                            description: 'Triggers when a new version of Reporter is available',
                        },
                        {
                            name: 'Output file processed',
                            value: 'output-file:processed',
                            description: 'Triggers when an output file has been processed',
                        },
                        {
                            name: 'Tool finding created',
                            value: 'tool-finding:created',
                            description: 'Triggers when a tool finding is created',
                        },
                        {
                            name: 'Tool target created',
                            value: 'tool-target:created',
                            description: 'Triggers when a tool target is created',
                        },
                    ],
                    default: 'finding:updated',
                    required: true,
                    description: 'The event to listen to',
                },
                {
                    displayName: 'Includes',
                    name: 'includes',
                    type: 'string',
                    default: '',
                    description: 'Related resources to include. Separate multiple includes with commas (e.g., phases.researchers,sections.findings)',
                },
                {
                    displayName: 'Conditions',
                    name: 'conditions',
                    type: 'string',
                    typeOptions: {
                        rows: 4,
                    },
                    default: '',
                    description: "A JmesPath expression that must evaluate to true to trigger the webhook. If left empty, the webhook will always be triggered. For example, a valid condition for the webhook type assessment:updated could be: contains(model.tags, 'Tag 1') && model.client.short_id == 'R-EXMP'.",
                },
            ],
        };
        this.webhookMethods = {
            default: {
                async checkExists() {
                    // Check if we have a stored webhook ID
                    const webhookData = await this.getWorkflowStaticData('node');
                    return webhookData.webhookId !== undefined;
                },
                async create() {
                    const webhookUrl = this.getNodeWebhookUrl('default');
                    const event = this.getNodeParameter('event');
                    const includes = this.getNodeParameter('includes');
                    const conditions = this.getNodeParameter('conditions');
                    const credentials = await this.getCredentials('reporterApi');
                    const baseUrl = credentials.url.replace(/\/$/, ''); // Remove trailing slash
                    // Generate a random secret for webhook verification
                    const secret = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
                    // Build includes and conditions objects keyed by event type
                    const includesObj = {};
                    if (includes && includes.trim()) {
                        includesObj[event] = includes.trim();
                    }
                    const conditionsObj = {};
                    if (conditions && conditions.trim()) {
                        conditionsObj[event] = conditions.trim();
                    }
                    const body = {
                        name: `n8n - ${event}`,
                        url: webhookUrl,
                        secret: secret,
                        auth_method: 0, // NONE = 0
                        types: [event],
                        mode: 0, // FULL = 0
                    };
                    // Only add includes/conditions if they have values
                    if (Object.keys(includesObj).length > 0) {
                        body.includes = includesObj;
                    }
                    if (Object.keys(conditionsObj).length > 0) {
                        body.conditions = conditionsObj;
                    }
                    const response = await this.helpers.httpRequest({
                        method: 'POST',
                        url: `${baseUrl}/api/v1/webhooks`,
                        headers: {
                            'Authorization': `Bearer ${credentials.apiToken}`,
                            'Accept': 'application/vnd.api+json',
                            'Content-Type': 'application/json',
                        },
                        body,
                        json: true,
                    });
                    // Parse response - it's a flat object with id at root level
                    const responseData = response;
                    if (!responseData || !responseData.id) {
                        throw new Error('Invalid response from Reporter API: missing webhook ID');
                    }
                    const webhookId = responseData.id;
                    const webhookData = await this.getWorkflowStaticData('node');
                    webhookData.webhookId = webhookId;
                    webhookData.secret = secret;
                    return true;
                },
                async delete() {
                    const webhookData = await this.getWorkflowStaticData('node');
                    const webhookId = webhookData.webhookId;
                    if (webhookId === undefined) {
                        return true;
                    }
                    const credentials = await this.getCredentials('reporterApi');
                    const baseUrl = credentials.url.replace(/\/$/, ''); // Remove trailing slash
                    try {
                        await this.helpers.httpRequest({
                            method: 'DELETE',
                            url: `${baseUrl}/api/v1/webhooks/${webhookId}`,
                            headers: {
                                'Authorization': `Bearer ${credentials.apiToken}`,
                                'Accept': 'application/vnd.api+json',
                                'Content-Type': 'application/vnd.api+json',
                            },
                        });
                    }
                    catch {
                        // Ignore errors during deletion
                        return false;
                    }
                    delete webhookData.webhookId;
                    return true;
                },
            },
        };
    }
    async webhook() {
        const bodyData = this.getBodyData();
        return {
            workflowData: [this.helpers.returnJsonArray([bodyData])],
        };
    }
}
exports.ReporterTrigger = ReporterTrigger;
//# sourceMappingURL=ReporterTrigger.node.js.map