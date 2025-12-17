import React, { createContext, useContext, useState, ReactNode } from 'react';

interface User {
  id: string;
  email: string;
  name: string;
  avatar?: string;
  xp: number;
  level: number;
}

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<void>;
  signup: (email: string, password: string, name: string) => Promise<void>;
  logout: () => void;
  addXP: (amount: number) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

const calculateLevel = (xp: number): number => {
  return Math.floor(xp / 100) + 1;
};

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(() => {
    const saved = localStorage.getItem('ap-learning-user');
    return saved ? JSON.parse(saved) : null;
  });

  const login = async (email: string, _password: string) => {
    // Simulated login - in production, use Firebase
    const newUser: User = {
      id: Math.random().toString(36).substr(2, 9),
      email,
      name: email.split('@')[0],
      xp: 0,
      level: 1
    };
    setUser(newUser);
    localStorage.setItem('ap-learning-user', JSON.stringify(newUser));
  };

  const signup = async (email: string, _password: string, name: string) => {
    const newUser: User = {
      id: Math.random().toString(36).substr(2, 9),
      email,
      name,
      xp: 0,
      level: 1
    };
    setUser(newUser);
    localStorage.setItem('ap-learning-user', JSON.stringify(newUser));
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('ap-learning-user');
  };

  const addXP = (amount: number) => {
    if (user) {
      const newXP = user.xp + amount;
      const newLevel = calculateLevel(newXP);
      const updatedUser = { ...user, xp: newXP, level: newLevel };
      setUser(updatedUser);
      localStorage.setItem('ap-learning-user', JSON.stringify(updatedUser));
    }
  };

  return (
    <AuthContext.Provider value={{ 
      user, 
      isAuthenticated: !!user, 
      login, 
      signup, 
      logout,
      addXP 
    }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
