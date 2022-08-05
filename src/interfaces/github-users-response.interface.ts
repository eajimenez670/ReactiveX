import { GitHubUser } from "./github-user.interfaces";

export interface GitHubUsersResponse {
    total_count: number;
    incomplete_results: boolean;
    items: GitHubUser[];
}