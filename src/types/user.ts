export interface User {
  userName: string;
  firstName: string;
  lastName: string;
  profilePicture: string;
  githubId: string;
  id: string;
  roles: {
    archived: boolean;
    in_discord: boolean;
    super_user: boolean;
  };
}
