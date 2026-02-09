"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReporterPollingTrigger = void 0;
const n8n_workflow_1 = require("n8n-workflow");
class ReporterPollingTrigger {
    constructor() {
        this.description = {
            displayName: 'Reporter Polling Trigger',
            name: 'reporterPollingTrigger',
            icon: 'file:reporter.svg',
            group: ['trigger'],
            version: 1,
            subtitle: '={{$parameter["resource"]}}',
            description: 'Polls Security Reporter API for new or updated items',
            defaults: {
                name: 'Reporter Polling Trigger',
            },
            inputs: [],
            outputs: ['main'],
            credentials: [
                {
                    name: 'reporterApi',
                    required: true,
                },
            ],
            polling: true,
            properties: [
                {
                    displayName: 'Resource',
                    name: 'resource',
                    type: 'options',
                    options: [
                        {
                            name: 'New Activity',
                            value: 'activity_created',
                            description: 'Triggers when a new activity is created',
                        },
                        {
                            name: 'Updated Activity',
                            value: 'activity_updated',
                            description: 'Triggers when an existing activity is updated',
                        },
                        {
                            name: 'New Assessment',
                            value: 'assessment_created',
                            description: 'Triggers when a new assessment is created',
                        },
                        {
                            name: 'Updated Assessment',
                            value: 'assessment_updated',
                            description: 'Triggers when an existing assessment is updated',
                        },
                        {
                            name: 'New Assessment Template',
                            value: 'assessmentTemplate_created',
                            description: 'Triggers when a new assessment template is created',
                        },
                        {
                            name: 'Updated Assessment Template',
                            value: 'assessmentTemplate_updated',
                            description: 'Triggers when an existing assessment template is updated',
                        },
                        {
                            name: 'New Client',
                            value: 'client_created',
                            description: 'Triggers when a new client is created',
                        },
                        {
                            name: 'Updated Client',
                            value: 'client_updated',
                            description: 'Triggers when an existing client is updated',
                        },
                        {
                            name: 'New Custom Field',
                            value: 'customField_created',
                            description: 'Triggers when a new custom field is created',
                        },
                        {
                            name: 'Updated Custom Field',
                            value: 'customField_updated',
                            description: 'Triggers when an existing custom field is updated',
                        },
                        {
                            name: 'New Finding',
                            value: 'finding_created',
                            description: 'Triggers when a new finding is created',
                        },
                        {
                            name: 'Updated Finding',
                            value: 'finding_updated',
                            description: 'Triggers when an existing finding is updated',
                        },
                        {
                            name: 'New Finding Layout',
                            value: 'findingLayout_created',
                            description: 'Triggers when a new finding layout is created',
                        },
                        {
                            name: 'Updated Finding Layout',
                            value: 'findingLayout_updated',
                            description: 'Triggers when an existing finding layout is updated',
                        },
                        {
                            name: 'New Finding Event',
                            value: 'findingEvent_created',
                            description: 'Triggers when a new finding event is created',
                        },
                        {
                            name: 'Updated Finding Event',
                            value: 'findingEvent_updated',
                            description: 'Triggers when an existing finding event is updated',
                        },
                        {
                            name: 'New Finding Template',
                            value: 'findingTemplate_created',
                            description: 'Triggers when a new finding template is created',
                        },
                        {
                            name: 'Updated Finding Template',
                            value: 'findingTemplate_updated',
                            description: 'Triggers when an existing finding template is updated',
                        },
                        {
                            name: 'New Language',
                            value: 'language_created',
                            description: 'Triggers when a new language is created',
                        },
                        {
                            name: 'Updated Language',
                            value: 'language_updated',
                            description: 'Triggers when an existing language is updated',
                        },
                        {
                            name: 'New Output File',
                            value: 'outputFile_created',
                            description: 'Triggers when a new output file is created',
                        },
                        {
                            name: 'Updated Output File',
                            value: 'outputFile_updated',
                            description: 'Triggers when an existing output file is updated',
                        },
                        {
                            name: 'New Tool Finding',
                            value: 'toolFinding_created',
                            description: 'Triggers when a new tool finding is created',
                        },
                        {
                            name: 'Updated Tool Finding',
                            value: 'toolFinding_updated',
                            description: 'Triggers when an existing tool finding is updated',
                        },
                        {
                            name: 'New Tool Target',
                            value: 'toolTarget_created',
                            description: 'Triggers when a new tool target is created',
                        },
                        {
                            name: 'Updated Tool Target',
                            value: 'toolTarget_updated',
                            description: 'Triggers when an existing tool target is updated',
                        },
                        {
                            name: 'New Role',
                            value: 'role_created',
                            description: 'Triggers when a new role is created',
                        },
                        {
                            name: 'Updated Role',
                            value: 'role_updated',
                            description: 'Triggers when an existing role is updated',
                        },
                        {
                            name: 'New Target',
                            value: 'target_created',
                            description: 'Triggers when a new target is created',
                        },
                        {
                            name: 'Updated Target',
                            value: 'target_updated',
                            description: 'Triggers when an existing target is updated',
                        },
                        {
                            name: 'New Task',
                            value: 'task_created',
                            description: 'Triggers when a new task is created',
                        },
                        {
                            name: 'Updated Task',
                            value: 'task_updated',
                            description: 'Triggers when an existing task is updated',
                        },
                        {
                            name: 'New Task Set',
                            value: 'taskSet_created',
                            description: 'Triggers when a new task set is created',
                        },
                        {
                            name: 'Updated Task Set',
                            value: 'taskSet_updated',
                            description: 'Triggers when an existing task set is updated',
                        },
                        {
                            name: 'New Theme',
                            value: 'theme_created',
                            description: 'Triggers when a new theme is created',
                        },
                        {
                            name: 'Updated Theme',
                            value: 'theme_updated',
                            description: 'Triggers when an existing theme is updated',
                        },
                        {
                            name: 'New User',
                            value: 'user_created',
                            description: 'Triggers when a new user is created',
                        },
                        {
                            name: 'Updated User',
                            value: 'user_updated',
                            description: 'Triggers when an existing user is updated',
                        },
                        {
                            name: 'New User Group',
                            value: 'userGroup_created',
                            description: 'Triggers when a new user group is created',
                        },
                        {
                            name: 'Updated User Group',
                            value: 'userGroup_updated',
                            description: 'Triggers when an existing user group is updated',
                        },
                    ],
                    default: 'activity_created',
                    required: true,
                    description: 'The resource and event to poll for',
                },
                {
                    displayName: 'Filters',
                    name: 'filters',
                    type: 'fixedCollection',
                    typeOptions: { "multipleValues": true },
                    options: [{ "name": "filter", "displayName": "Filter", "values": [{ "displayName": "Field", "name": "field", "type": "string", "default": "", "description": "The field to filter on" }, { "displayName": "Value", "name": "value", "type": "string", "default": "", "description": "The value to filter for" }] }],
                    placeholder: 'Add Filter',
                    default: [],
                    description: 'Filter names and the values to filter for. Allowed fields: "id", "and_id", "assessment_id", "and_assessment_id", "user_id", "and_user_id", "impersonator_id", "and_impersonator_id", "finding_id", "a...',
                },
                {
                    displayName: 'Include',
                    name: 'include',
                    type: 'string',
                    placeholder: 'assessment,user',
                    default: "",
                    description: 'Each include given will be concatenated into a Comma-separated list of relations to include in the response. See [ Including Related Data]({{bundle.authData.reporter_url}}/api-documentation#includi...',
                },
            ],
        };
    }
    async poll() {
        const webhookData = this.getWorkflowStaticData('node');
        const resource = this.getNodeParameter('resource', 0);
        const credentials = await this.getCredentials('reporterApi');
        const baseUrl = credentials.url.replace(/\/$/, '');
        // Map resource to API path, filter field, and sort field
        const resourceConfig = {
            'activity_created': {
                apiPath: '/api/v1/activities',
                filterField: 'created_at_after',
                sortField: '-created_at',
            },
            'activity_updated': {
                apiPath: '/api/v1/activities',
                filterField: 'updated_at_after',
                sortField: '-updated_at',
            },
            'assessment_created': {
                apiPath: '/api/v1/assessments',
                filterField: 'created_at_after',
                sortField: '-created_at',
            },
            'assessment_updated': {
                apiPath: '/api/v1/assessments',
                filterField: 'updated_at_after',
                sortField: '-updated_at',
            },
            'assessmentTemplate_created': {
                apiPath: '/api/v1/assessment-templates',
                filterField: 'created_at_after',
                sortField: '-created_at',
            },
            'assessmentTemplate_updated': {
                apiPath: '/api/v1/assessment-templates',
                filterField: 'updated_at_after',
                sortField: '-updated_at',
            },
            'client_created': {
                apiPath: '/api/v1/clients',
                filterField: 'created_at_after',
                sortField: '-created_at',
            },
            'client_updated': {
                apiPath: '/api/v1/clients',
                filterField: 'updated_at_after',
                sortField: '-updated_at',
            },
            'customField_created': {
                apiPath: '/api/v1/custom-fields',
                filterField: 'created_at_after',
                sortField: '-created_at',
            },
            'customField_updated': {
                apiPath: '/api/v1/custom-fields',
                filterField: 'updated_at_after',
                sortField: '-updated_at',
            },
            'finding_created': {
                apiPath: '/api/v1/findings',
                filterField: 'created_at_after',
                sortField: '-created_at',
            },
            'finding_updated': {
                apiPath: '/api/v1/findings',
                filterField: 'updated_at_after',
                sortField: '-updated_at',
            },
            'findingLayout_created': {
                apiPath: '/api/v1/finding-layouts',
                filterField: 'created_at_after',
                sortField: '-created_at',
            },
            'findingLayout_updated': {
                apiPath: '/api/v1/finding-layouts',
                filterField: 'updated_at_after',
                sortField: '-updated_at',
            },
            'findingEvent_created': {
                apiPath: '/api/v1/finding-events',
                filterField: 'created_at_after',
                sortField: '-created_at',
            },
            'findingEvent_updated': {
                apiPath: '/api/v1/finding-events',
                filterField: 'updated_at_after',
                sortField: '-updated_at',
            },
            'findingTemplate_created': {
                apiPath: '/api/v1/finding-templates',
                filterField: 'created_at_after',
                sortField: '-created_at',
            },
            'findingTemplate_updated': {
                apiPath: '/api/v1/finding-templates',
                filterField: 'updated_at_after',
                sortField: '-updated_at',
            },
            'language_created': {
                apiPath: '/api/v1/languages',
                filterField: 'created_at_after',
                sortField: '-created_at',
            },
            'language_updated': {
                apiPath: '/api/v1/languages',
                filterField: 'updated_at_after',
                sortField: '-updated_at',
            },
            'outputFile_created': {
                apiPath: '/api/v1/output-files',
                filterField: 'created_at_after',
                sortField: '-created_at',
            },
            'outputFile_updated': {
                apiPath: '/api/v1/output-files',
                filterField: 'updated_at_after',
                sortField: '-updated_at',
            },
            'toolFinding_created': {
                apiPath: '/api/v1/tool-findings',
                filterField: 'created_at_after',
                sortField: '-created_at',
            },
            'toolFinding_updated': {
                apiPath: '/api/v1/tool-findings',
                filterField: 'updated_at_after',
                sortField: '-updated_at',
            },
            'toolTarget_created': {
                apiPath: '/api/v1/tool-targets',
                filterField: 'created_at_after',
                sortField: '-created_at',
            },
            'toolTarget_updated': {
                apiPath: '/api/v1/tool-targets',
                filterField: 'updated_at_after',
                sortField: '-updated_at',
            },
            'role_created': {
                apiPath: '/api/v1/roles',
                filterField: 'created_at_after',
                sortField: '-created_at',
            },
            'role_updated': {
                apiPath: '/api/v1/roles',
                filterField: 'updated_at_after',
                sortField: '-updated_at',
            },
            'target_created': {
                apiPath: '/api/v1/targets',
                filterField: 'created_at_after',
                sortField: '-created_at',
            },
            'target_updated': {
                apiPath: '/api/v1/targets',
                filterField: 'updated_at_after',
                sortField: '-updated_at',
            },
            'task_created': {
                apiPath: '/api/v1/tasks',
                filterField: 'created_at_after',
                sortField: '-created_at',
            },
            'task_updated': {
                apiPath: '/api/v1/tasks',
                filterField: 'updated_at_after',
                sortField: '-updated_at',
            },
            'taskSet_created': {
                apiPath: '/api/v1/task-sets',
                filterField: 'created_at_after',
                sortField: '-created_at',
            },
            'taskSet_updated': {
                apiPath: '/api/v1/task-sets',
                filterField: 'updated_at_after',
                sortField: '-updated_at',
            },
            'theme_created': {
                apiPath: '/api/v1/themes',
                filterField: 'created_at_after',
                sortField: '-created_at',
            },
            'theme_updated': {
                apiPath: '/api/v1/themes',
                filterField: 'updated_at_after',
                sortField: '-updated_at',
            },
            'user_created': {
                apiPath: '/api/v1/users',
                filterField: 'created_at_after',
                sortField: '-created_at',
            },
            'user_updated': {
                apiPath: '/api/v1/users',
                filterField: 'updated_at_after',
                sortField: '-updated_at',
            },
            'userGroup_created': {
                apiPath: '/api/v1/user-groups',
                filterField: 'created_at_after',
                sortField: '-created_at',
            },
            'userGroup_updated': {
                apiPath: '/api/v1/user-groups',
                filterField: 'updated_at_after',
                sortField: '-updated_at',
            },
        };
        const config = resourceConfig[resource];
        if (!config) {
            throw new n8n_workflow_1.NodeOperationError(this.getNode(), `Unknown resource: ${resource}`);
        }
        // Get the last execution time
        const now = new Date();
        const lastTimeChecked = webhookData.lastTimeChecked;
        // Build query parameters
        const qs = {};
        // Add user-provided filters
        const filters = this.getNodeParameter('filters', 0);
        if (filters && filters.filter && Array.isArray(filters.filter)) {
            for (const filterItem of filters.filter) {
                const field = filterItem.field;
                const value = filterItem.value;
                if (field && value) {
                    qs[`filter[${field}]`] = value;
                }
            }
        }
        // Add user-provided sort
        const sortParam = this.getNodeParameter('sort', 0);
        if (sortParam) {
            // Prepend the resource-specific sort field (e.g., -created_at or -updated_at)
            qs['sort'] = `${config.sortField},${sortParam}`;
        }
        else {
            qs['sort'] = config.sortField;
        }
        // Add user-provided includes
        const includeParam = this.getNodeParameter('include', 0);
        if (includeParam) {
            qs['include'] = includeParam;
        }
        // Only filter by date if this is not the first poll
        // On first poll, get recent items without date filter to allow n8n to simulate events
        if (lastTimeChecked) {
            qs[`filter[${config.filterField}]`] = lastTimeChecked;
        }
        webhookData.lastTimeChecked = now.toISOString();
        const response = await this.helpers.httpRequest({
            method: 'GET',
            url: `${baseUrl}${config.apiPath}`,
            headers: {
                'Authorization': `Bearer ${credentials.apiToken}`,
                'Accept': 'application/vnd.api+json',
            },
            qs,
            json: true,
        });
        const items = Array.isArray(response) ? response : (response.data || []);
        if (items.length === 0) {
            return null;
        }
        // Return the new items
        return [this.helpers.returnJsonArray(items)];
    }
}
exports.ReporterPollingTrigger = ReporterPollingTrigger;
//# sourceMappingURL=ReporterPollingTrigger.node.js.map