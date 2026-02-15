export interface ISprintBacklog {
    id: number;
    sprintNumber: number;
    endDate: Date;
    startDate: Date;
    isDeleted: boolean;
    productBacklogId: number;
}