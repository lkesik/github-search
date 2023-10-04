import { Repo } from './Repo.model';

export interface ReposDto {
  total_count: number;
  incomplete_results: boolean;
  items: Repo[];
}
