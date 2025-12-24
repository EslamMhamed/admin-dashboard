import React from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs'
import LoginForm from '@/app/(auth)/auth/LoginForm'
import RegisterForm from '@/app/(auth)/auth/RegisterForm'

function AuthTabs() {
  return (
    <Tabs defaultValue="login" className="w-[400px] ">
  <TabsList className='  w-full    '>
    <TabsTrigger  value="login">login</TabsTrigger>
    <TabsTrigger value="register">Register</TabsTrigger>
  </TabsList>
  <TabsContent value="login"><LoginForm /></TabsContent>
  <TabsContent value="register"><RegisterForm /></TabsContent>
</Tabs>
  )
}

export default AuthTabs