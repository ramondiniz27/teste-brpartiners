import { User } from "../interfaces/UserInterface"

  export const getUserList = async () => {
  const response = await sessionStorage.getItem('users')
  return response ? JSON.parse(response) : []
 }

 export const createUser = async (user: User) => {
  const users = await getUserList()
  users.push(user)
  sessionStorage.setItem('users', JSON.stringify(users))
 }

 export const updateUser = async (user: User) => {
  const users = await getUserList()
  const index = users.findIndex((user: User) => user.id === user.id)
  users[index] = user
  sessionStorage.setItem('users', JSON.stringify(users))
 }

 export const deleteUser = async (id: string) => {
  const users = await getUserList()
  const filteredUsers = users.filter((user: User) => user.id !== id)
  sessionStorage.setItem('users', JSON.stringify(filteredUsers))
 }