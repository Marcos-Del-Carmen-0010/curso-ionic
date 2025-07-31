export namespace ModelsAuth {
  export const PathUsers = 'users'

  export interface UserProfile {
    name: string;
    email: string;
    age: string;
    id: string;
    photo: string;
  }

  export interface UpdateProfile {
    displayName?: string;
    photoURL?: string;
  }
}
