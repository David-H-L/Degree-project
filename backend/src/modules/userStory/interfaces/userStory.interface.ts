export interface IUserStory {
    id: number;
    code: string;
    name: string;
    description: string;
    points: number;
    state: string;
    priority: string;
    isDeleted: boolean;
    userId: number;
    productBacklogId: number;
    sprintBacklogId: number;
    retrospectiveId: number;
}