export type CreateUserRepositoryParams = {
  name: string
  email: string
  password_hash: string
}

export type UserWithSameEmailParams = {
  email: string
}
