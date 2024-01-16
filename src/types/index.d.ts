
export interface User {
   name: string
   username: string
   email: string
   _id: string
   image: string
   uid: string
   emailVerified: string
   createdAt: string
   bio: string
  }
  
  export interface ProfileUserProps {
   profileUser: User;
 }