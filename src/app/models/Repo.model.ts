export interface Repo {
  id: number;
  full_name: string;
  description: string;
  html_url: string;
  issues_url: string;
  updated_at: string;
  language: string;
  stargazers_count: number;
  subscribers_count: number;
  forks_count: number;
  topics: string[];
}
