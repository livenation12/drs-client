export interface User {
          id: number | undefined
          firstName: string | undefined
          lastName: string | undefined
          email: string | undefined
          password: string | undefined
          createdAt?: string | Date
          updatedAt?: string | Date
}

export interface Login extends Pick<User, 'email' | 'password'> { }