import { User } from './user';

export interface AuthState {
  user: User | null;
  isLoading: boolean;
  error: string | null;
}

export interface AuthContextType extends AuthState {
  setUser: (user: User | null) => void;
  signout: () => void;
}
