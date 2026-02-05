# @dongit/n8n-nodes-reporter

This is an n8n community node that lets you use [Security Reporter](https://securityreporter.app/) in your n8n workflows.

Security Reporter is a comprehensive security assessment and vulnerability management platform. This integration allows you to automate security workflows, manage findings, assessments, clients, and more.

[n8n](https://n8n.io/) is a [fair-code licensed](https://docs.n8n.io/reference/license/) workflow automation platform.

## Installation

### Community Nodes (Recommended)

For production use, install via n8n's Community Nodes:

1. Go to **Settings > Community Nodes** in your n8n instance
2. Select **Install**
3. Enter `@dongit/n8n-nodes-reporter` in **Enter npm package name**
4. Agree to the risks and click **Install**

After installation, the Reporter nodes will be available in your workflow editor.

### Manual Installation

For development or self-hosted instances:

```bash
# Navigate to your n8n installation directory
cd ~/.n8n

# Install the package
npm install @dongit/n8n-nodes-reporter
```

### Docker

If you're using n8n with Docker, you can mount the package:

```bash
docker run -it --rm \
  --name n8n \
  -p 5678:5678 \
  -v ~/.n8n:/home/node/.n8n \
  n8nio/n8n
```

Then install the package inside the container or mount it as a custom node.

## Credentials

This node requires Security Reporter API credentials. To set up:

1. In your Security Reporter instance, go to **Settings > API Tokens**
2. Click **Create New Token**
3. Copy the generated token
4. In n8n, create new **Reporter API** credentials:
   - **Base URL**: Your Reporter instance URL (e.g., `https://reporter.yourcompany.com`)
   - **API Token**: The token you generated

## Operations

### Resources

The Reporter node supports the following resources:

- **Assessments** - Manage security assessments
- **Findings** - Create and manage security findings
- **Clients** - Manage client organizations
- **Projects** - Manage projects within clients
- **Users** - Manage user accounts
- **Documents** - Upload and manage documents
- **Tasks** - Manage assessment tasks
- **Finding Templates** - Work with finding templates
- **Assessment Templates** - Work with assessment templates
- And many more...

### Triggers

#### Webhook Trigger (Reporter Trigger)

Trigger workflows when events occur in Reporter:

- Assessment Created/Updated/Deleted
- Finding Created/Updated/Deleted
- Client Created/Updated/Deleted
- Project Created/Updated/Deleted
- And more...

#### Polling Trigger (Reporter Polling Trigger)

Poll Reporter for new items at regular intervals:

- New Assessments
- New Findings
- New Clients
- New Projects
- And more...

## Example Workflows

### Create a Finding

1. Add a **Reporter** node
2. Select **Finding** resource
3. Choose **Create** operation
4. Fill in required fields:
   - Title
   - Description
   - Severity
   - Assessment ID

### Trigger on New Assessment

1. Add a **Reporter Polling Trigger** node
2. Select **Assessment** resource
3. Set polling interval (e.g., every 5 minutes)
4. Connect to downstream nodes to process new assessments

### Sync Findings to External System

1. Add a **Reporter Polling Trigger** for new findings
2. Add transformation nodes to format data
3. Add nodes to send data to your external system (Jira, Slack, etc.)

## Compatibility

- Tested with n8n version 1.0.0 and above
- Requires Security Reporter API v1

## Resources

- [n8n community nodes documentation](https://docs.n8n.io/integrations/community-nodes/)
- [Security Reporter Documentation](https://docs.securityreporter.app/)
- [Security Reporter API Documentation](https://docs.securityreporter.app/api/)

## Version History

See [CHANGELOG.md](CHANGELOG.md) for version history and changes.

## License

[MIT](LICENSE.md)

## Support

For issues and questions:

- **n8n node issues**: [GitHub Issues](https://github.com/dongit-org/reporter/issues)
- **Security Reporter issues**: [Security Reporter Support](https://securityreporter.app/support)
- **n8n general help**: [n8n Community Forum](https://community.n8n.io/)

