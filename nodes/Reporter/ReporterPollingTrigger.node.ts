import {
  IPollFunctions,
  INodeType,
  INodeTypeDescription,
  IDataObject,
  INodeExecutionData,
  JsonObject,
  NodeApiError,
  NodeConnectionTypes,
  NodeOperationError,
} from "n8n-workflow";

export class ReporterPollingTrigger implements INodeType {
  description: INodeTypeDescription = {
    displayName: "Reporter Polling Trigger",
    name: "reporterPollingTrigger",
    icon: "file:reporter.svg",
    group: ["trigger"],
    version: 1,
    subtitle: '={{$parameter["resource"]}}',
    description: "Polls Security Reporter API for new or updated items",
    defaults: {
      name: "Reporter Polling Trigger",
    },
    inputs: [],
    outputs: [NodeConnectionTypes.Main],
    credentials: [
      {
        name: "reporterApi",
        required: true,
      },
    ],
    polling: true,
    properties: [
      {
        displayName: "Resource",
        name: "resource",
        type: "options",
        options: [
          {
            name: "New Activity",
            value: "activity_created",
            description: "Triggers when a new activity is created",
          },
          {
            name: "Updated Activity",
            value: "activity_updated",
            description: "Triggers when an existing activity is updated",
          },
          {
            name: "New API Token",
            value: "aPIToken_created",
            description: "Triggers when a new api token is created",
          },
          {
            name: "Updated API Token",
            value: "aPIToken_updated",
            description: "Triggers when an existing api token is updated",
          },
          {
            name: "New Assessment",
            value: "assessment_created",
            description: "Triggers when a new assessment is created",
          },
          {
            name: "Updated Assessment",
            value: "assessment_updated",
            description: "Triggers when an existing assessment is updated",
          },
          {
            name: "New Assessment Section",
            value: "assessmentSection_created",
            description: "Triggers when a new assessment section is created",
          },
          {
            name: "Updated Assessment Section",
            value: "assessmentSection_updated",
            description:
              "Triggers when an existing assessment section is updated",
          },
          {
            name: "New Assessment Section Event",
            value: "assessmentSectionEvent_created",
            description:
              "Triggers when a new assessment section event is created",
          },
          {
            name: "Updated Assessment Section Event",
            value: "assessmentSectionEvent_updated",
            description:
              "Triggers when an existing assessment section event is updated",
          },
          {
            name: "New Assessment Section Template",
            value: "assessmentSectionTemplate_created",
            description:
              "Triggers when a new assessment section template is created",
          },
          {
            name: "Updated Assessment Section Template",
            value: "assessmentSectionTemplate_updated",
            description:
              "Triggers when an existing assessment section template is updated",
          },
          {
            name: "New Assessment Template",
            value: "assessmentTemplate_created",
            description: "Triggers when a new assessment template is created",
          },
          {
            name: "Updated Assessment Template",
            value: "assessmentTemplate_updated",
            description:
              "Triggers when an existing assessment template is updated",
          },
          {
            name: "New Client",
            value: "client_created",
            description: "Triggers when a new client is created",
          },
          {
            name: "Updated Client",
            value: "client_updated",
            description: "Triggers when an existing client is updated",
          },
          {
            name: "New Custom Field",
            value: "customField_created",
            description: "Triggers when a new custom field is created",
          },
          {
            name: "Updated Custom Field",
            value: "customField_updated",
            description: "Triggers when an existing custom field is updated",
          },
          {
            name: "New Finding",
            value: "finding_created",
            description: "Triggers when a new finding is created",
          },
          {
            name: "Updated Finding",
            value: "finding_updated",
            description: "Triggers when an existing finding is updated",
          },
          {
            name: "New Finding Layout",
            value: "findingLayout_created",
            description: "Triggers when a new finding layout is created",
          },
          {
            name: "Updated Finding Layout",
            value: "findingLayout_updated",
            description: "Triggers when an existing finding layout is updated",
          },
          {
            name: "New Finding Event",
            value: "findingEvent_created",
            description: "Triggers when a new finding event is created",
          },
          {
            name: "Updated Finding Event",
            value: "findingEvent_updated",
            description: "Triggers when an existing finding event is updated",
          },
          {
            name: "New Finding Template",
            value: "findingTemplate_created",
            description: "Triggers when a new finding template is created",
          },
          {
            name: "Updated Finding Template",
            value: "findingTemplate_updated",
            description:
              "Triggers when an existing finding template is updated",
          },
          {
            name: "New Language",
            value: "language_created",
            description: "Triggers when a new language is created",
          },
          {
            name: "Updated Language",
            value: "language_updated",
            description: "Triggers when an existing language is updated",
          },
          {
            name: "New Notification",
            value: "notification_created",
            description: "Triggers when a new notification is created",
          },
          {
            name: "Updated Notification",
            value: "notification_updated",
            description: "Triggers when an existing notification is updated",
          },
          {
            name: "New Output File",
            value: "outputFile_created",
            description: "Triggers when a new output file is created",
          },
          {
            name: "Updated Output File",
            value: "outputFile_updated",
            description: "Triggers when an existing output file is updated",
          },
          {
            name: "New Tool Finding",
            value: "toolFinding_created",
            description: "Triggers when a new tool finding is created",
          },
          {
            name: "Updated Tool Finding",
            value: "toolFinding_updated",
            description: "Triggers when an existing tool finding is updated",
          },
          {
            name: "New Tool Target",
            value: "toolTarget_created",
            description: "Triggers when a new tool target is created",
          },
          {
            name: "Updated Tool Target",
            value: "toolTarget_updated",
            description: "Triggers when an existing tool target is updated",
          },
          {
            name: "New Role",
            value: "role_created",
            description: "Triggers when a new role is created",
          },
          {
            name: "Updated Role",
            value: "role_updated",
            description: "Triggers when an existing role is updated",
          },
          {
            name: "New Snippet",
            value: "snippet_created",
            description: "Triggers when a new snippet is created",
          },
          {
            name: "Updated Snippet",
            value: "snippet_updated",
            description: "Triggers when an existing snippet is updated",
          },
          {
            name: "New Tag",
            value: "tag_created",
            description: "Triggers when a new tag is created",
          },
          {
            name: "Updated Tag",
            value: "tag_updated",
            description: "Triggers when an existing tag is updated",
          },
          {
            name: "New Target",
            value: "target_created",
            description: "Triggers when a new target is created",
          },
          {
            name: "Updated Target",
            value: "target_updated",
            description: "Triggers when an existing target is updated",
          },
          {
            name: "New Task",
            value: "task_created",
            description: "Triggers when a new task is created",
          },
          {
            name: "Updated Task",
            value: "task_updated",
            description: "Triggers when an existing task is updated",
          },
          {
            name: "New Task Set",
            value: "taskSet_created",
            description: "Triggers when a new task set is created",
          },
          {
            name: "Updated Task Set",
            value: "taskSet_updated",
            description: "Triggers when an existing task set is updated",
          },
          {
            name: "New Team",
            value: "team_created",
            description: "Triggers when a new team is created",
          },
          {
            name: "Updated Team",
            value: "team_updated",
            description: "Triggers when an existing team is updated",
          },
          {
            name: "New Test Case",
            value: "testCase_created",
            description: "Triggers when a new test case is created",
          },
          {
            name: "Updated Test Case",
            value: "testCase_updated",
            description: "Triggers when an existing test case is updated",
          },
          {
            name: "New Theme",
            value: "theme_created",
            description: "Triggers when a new theme is created",
          },
          {
            name: "Updated Theme",
            value: "theme_updated",
            description: "Triggers when an existing theme is updated",
          },
          {
            name: "New User",
            value: "user_created",
            description: "Triggers when a new user is created",
          },
          {
            name: "Updated User",
            value: "user_updated",
            description: "Triggers when an existing user is updated",
          },
        ],

        default: "activity_created",

        required: true,
        description: "The resource and event to poll for",
      },

      {
        displayName: "Filters",
        name: "filters",
        type: "fixedCollection",
        typeOptions: { multipleValues: true },
        options: [
          {
            name: "filter",
            displayName: "Filter",
            values: [
              {
                displayName: "Field",
                name: "field",
                type: "string",
                default: "",
                description: "The field to filter on",
              },
              {
                displayName: "Value",
                name: "value",
                type: "string",
                default: "",
                description: "The value to filter for",
              },
            ],
          },
        ],
        placeholder: "Add Filter",
        default: [],
        description:
          'Filter names and the values to filter for. Allowed fields: "ID", "and_id", "assessment_id", "and_assessment_id", "user_id", "and_user_id", "impersonator_id", "and_impersonator_id", "finding_id", "a...',
      },
      {
        displayName: "Include",
        name: "include",
        type: "string",
        placeholder: "assessment,user",
        default: "",
        description:
          "Each include given will be concatenated into a Comma-separated list of relations to include in the response. See [ Including Related Data]({{bundle.authData.reporter_url}}/api-documentation#includi...",
      },
    ],
  };

  async poll(this: IPollFunctions): Promise<INodeExecutionData[][] | null> {
    const webhookData = this.getWorkflowStaticData("node");
    const resource = this.getNodeParameter("resource", 0) as string;
    const credentials = await this.getCredentials("reporterApi");
    const baseUrl = (credentials.url as string).replace(/\/$/, "");

    // Map resource to API path, filter field, and sort field
    const resourceConfig: {
      [key: string]: {
        apiPath: string;
        filterField: string;
        sortField: string;
      };
    } = {
      activity_created: {
        apiPath: "/api/v1/activities",
        filterField: "created_at_after",
        sortField: "-created_at",
      },
      activity_updated: {
        apiPath: "/api/v1/activities",
        filterField: "updated_at_after",
        sortField: "-updated_at",
      },
      aPIToken_created: {
        apiPath: "/api/v1/api-tokens",
        filterField: "created_at_after",
        sortField: "-created_at",
      },
      aPIToken_updated: {
        apiPath: "/api/v1/api-tokens",
        filterField: "updated_at_after",
        sortField: "-updated_at",
      },
      assessment_created: {
        apiPath: "/api/v1/assessments",
        filterField: "created_at_after",
        sortField: "-created_at",
      },
      assessment_updated: {
        apiPath: "/api/v1/assessments",
        filterField: "updated_at_after",
        sortField: "-updated_at",
      },
      assessmentSection_created: {
        apiPath: "/api/v1/assessment-sections",
        filterField: "created_at_after",
        sortField: "-created_at",
      },
      assessmentSection_updated: {
        apiPath: "/api/v1/assessment-sections",
        filterField: "updated_at_after",
        sortField: "-updated_at",
      },
      assessmentSectionEvent_created: {
        apiPath: "/api/v1/assessment-section-events",
        filterField: "created_at_after",
        sortField: "-created_at",
      },
      assessmentSectionEvent_updated: {
        apiPath: "/api/v1/assessment-section-events",
        filterField: "updated_at_after",
        sortField: "-updated_at",
      },
      assessmentSectionTemplate_created: {
        apiPath: "/api/v1/assessment-section-templates",
        filterField: "created_at_after",
        sortField: "-created_at",
      },
      assessmentSectionTemplate_updated: {
        apiPath: "/api/v1/assessment-section-templates",
        filterField: "updated_at_after",
        sortField: "-updated_at",
      },
      assessmentTemplate_created: {
        apiPath: "/api/v1/assessment-templates",
        filterField: "created_at_after",
        sortField: "-created_at",
      },
      assessmentTemplate_updated: {
        apiPath: "/api/v1/assessment-templates",
        filterField: "updated_at_after",
        sortField: "-updated_at",
      },
      client_created: {
        apiPath: "/api/v1/clients",
        filterField: "created_at_after",
        sortField: "-created_at",
      },
      client_updated: {
        apiPath: "/api/v1/clients",
        filterField: "updated_at_after",
        sortField: "-updated_at",
      },
      customField_created: {
        apiPath: "/api/v1/custom-fields",
        filterField: "created_at_after",
        sortField: "-created_at",
      },
      customField_updated: {
        apiPath: "/api/v1/custom-fields",
        filterField: "updated_at_after",
        sortField: "-updated_at",
      },
      finding_created: {
        apiPath: "/api/v1/findings",
        filterField: "created_at_after",
        sortField: "-created_at",
      },
      finding_updated: {
        apiPath: "/api/v1/findings",
        filterField: "updated_at_after",
        sortField: "-updated_at",
      },
      findingLayout_created: {
        apiPath: "/api/v1/finding-layouts",
        filterField: "created_at_after",
        sortField: "-created_at",
      },
      findingLayout_updated: {
        apiPath: "/api/v1/finding-layouts",
        filterField: "updated_at_after",
        sortField: "-updated_at",
      },
      findingEvent_created: {
        apiPath: "/api/v1/finding-events",
        filterField: "created_at_after",
        sortField: "-created_at",
      },
      findingEvent_updated: {
        apiPath: "/api/v1/finding-events",
        filterField: "updated_at_after",
        sortField: "-updated_at",
      },
      findingTemplate_created: {
        apiPath: "/api/v1/finding-templates",
        filterField: "created_at_after",
        sortField: "-created_at",
      },
      findingTemplate_updated: {
        apiPath: "/api/v1/finding-templates",
        filterField: "updated_at_after",
        sortField: "-updated_at",
      },
      language_created: {
        apiPath: "/api/v1/languages",
        filterField: "created_at_after",
        sortField: "-created_at",
      },
      language_updated: {
        apiPath: "/api/v1/languages",
        filterField: "updated_at_after",
        sortField: "-updated_at",
      },
      notification_created: {
        apiPath: "/api/v1/notifications",
        filterField: "created_at_after",
        sortField: "-created_at",
      },
      notification_updated: {
        apiPath: "/api/v1/notifications",
        filterField: "updated_at_after",
        sortField: "-updated_at",
      },
      outputFile_created: {
        apiPath: "/api/v1/output-files",
        filterField: "created_at_after",
        sortField: "-created_at",
      },
      outputFile_updated: {
        apiPath: "/api/v1/output-files",
        filterField: "updated_at_after",
        sortField: "-updated_at",
      },
      toolFinding_created: {
        apiPath: "/api/v1/tool-findings",
        filterField: "created_at_after",
        sortField: "-created_at",
      },
      toolFinding_updated: {
        apiPath: "/api/v1/tool-findings",
        filterField: "updated_at_after",
        sortField: "-updated_at",
      },
      toolTarget_created: {
        apiPath: "/api/v1/tool-targets",
        filterField: "created_at_after",
        sortField: "-created_at",
      },
      toolTarget_updated: {
        apiPath: "/api/v1/tool-targets",
        filterField: "updated_at_after",
        sortField: "-updated_at",
      },
      role_created: {
        apiPath: "/api/v1/roles",
        filterField: "created_at_after",
        sortField: "-created_at",
      },
      role_updated: {
        apiPath: "/api/v1/roles",
        filterField: "updated_at_after",
        sortField: "-updated_at",
      },
      snippet_created: {
        apiPath: "/api/v1/snippets",
        filterField: "created_at_after",
        sortField: "-created_at",
      },
      snippet_updated: {
        apiPath: "/api/v1/snippets",
        filterField: "updated_at_after",
        sortField: "-updated_at",
      },
      tag_created: {
        apiPath: "/api/v1/tags",
        filterField: "created_at_after",
        sortField: "-created_at",
      },
      tag_updated: {
        apiPath: "/api/v1/tags",
        filterField: "updated_at_after",
        sortField: "-updated_at",
      },
      target_created: {
        apiPath: "/api/v1/targets",
        filterField: "created_at_after",
        sortField: "-created_at",
      },
      target_updated: {
        apiPath: "/api/v1/targets",
        filterField: "updated_at_after",
        sortField: "-updated_at",
      },
      task_created: {
        apiPath: "/api/v1/tasks",
        filterField: "created_at_after",
        sortField: "-created_at",
      },
      task_updated: {
        apiPath: "/api/v1/tasks",
        filterField: "updated_at_after",
        sortField: "-updated_at",
      },
      taskSet_created: {
        apiPath: "/api/v1/task-sets",
        filterField: "created_at_after",
        sortField: "-created_at",
      },
      taskSet_updated: {
        apiPath: "/api/v1/task-sets",
        filterField: "updated_at_after",
        sortField: "-updated_at",
      },
      team_created: {
        apiPath: "/api/v1/teams",
        filterField: "created_at_after",
        sortField: "-created_at",
      },
      team_updated: {
        apiPath: "/api/v1/teams",
        filterField: "updated_at_after",
        sortField: "-updated_at",
      },
      testCase_created: {
        apiPath: "/api/v1/test-cases",
        filterField: "created_at_after",
        sortField: "-created_at",
      },
      testCase_updated: {
        apiPath: "/api/v1/test-cases",
        filterField: "updated_at_after",
        sortField: "-updated_at",
      },
      theme_created: {
        apiPath: "/api/v1/themes",
        filterField: "created_at_after",
        sortField: "-created_at",
      },
      theme_updated: {
        apiPath: "/api/v1/themes",
        filterField: "updated_at_after",
        sortField: "-updated_at",
      },
      user_created: {
        apiPath: "/api/v1/users",
        filterField: "created_at_after",
        sortField: "-created_at",
      },
      user_updated: {
        apiPath: "/api/v1/users",
        filterField: "updated_at_after",
        sortField: "-updated_at",
      },
    };

    const config = resourceConfig[resource];
    if (!config) {
      throw new NodeOperationError(
        this.getNode(),
        `Unknown resource: ${resource}`
      );
    }

    // Get the last execution time
    const now = new Date();
    const lastTimeChecked = webhookData.lastTimeChecked as string;

    // Build query parameters
    const qs: IDataObject = {};

    // Add user-provided filters
    const filters = this.getNodeParameter("filters", 0) as IDataObject;
    if (filters && filters.filter && Array.isArray(filters.filter)) {
      for (const filterItem of filters.filter as IDataObject[]) {
        const field = filterItem.field as string;
        const value = filterItem.value as string;
        if (field && value) {
          qs[`filter[${field}]`] = value;
        }
      }
    }

    // Sort by the resource-specific sort field (e.g., -created_at or -updated_at)
    qs["sort"] = config.sortField;

    // Add user-provided includes
    const includeParam = this.getNodeParameter("include", 0) as string;
    if (includeParam) {
      qs["include"] = includeParam;
    }

    // Only filter by date if this is not the first poll
    // On first poll, get recent items without date filter to allow n8n to simulate events
    if (lastTimeChecked) {
      qs[`filter[${config.filterField}]`] = lastTimeChecked;
    }

    webhookData.lastTimeChecked = now.toISOString();

    let response;
    try {
      response = await this.helpers.httpRequestWithAuthentication.call(
        this,
        "reporterApi",
        {
          method: "GET",
          url: `${baseUrl}${config.apiPath}`,
          headers: {
            Accept: "application/vnd.api+json",
          },
          qs,
          json: true,
        }
      );
    } catch (error) {
      throw new NodeApiError(this.getNode(), error as JsonObject);
    }

    const items = Array.isArray(response) ? response : response.data || [];

    if (items.length === 0) {
      return null;
    }

    // Return the new items
    return [this.helpers.returnJsonArray(items as IDataObject[])];
  }
}
