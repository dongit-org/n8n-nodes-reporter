import { IPollFunctions, INodeType, INodeTypeDescription, INodeExecutionData } from 'n8n-workflow';
export declare class ReporterPollingTrigger implements INodeType {
    description: INodeTypeDescription;
    poll(this: IPollFunctions): Promise<INodeExecutionData[][] | null>;
}
//# sourceMappingURL=ReporterPollingTrigger.node.d.ts.map