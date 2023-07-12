"use client"

import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar"
import { Button } from "./ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card"
import { Input } from "./ui/input"

import { useChat } from 'ai/react'
import { ScrollArea } from "./ui/scroll-area"
export default function Chat() {

  const { messages, input, handleInputChange, handleSubmit } = useChat({
    api: '/api/chat'
  })

  return (
    <Card className="w-[440px]">
      <CardHeader>
        <CardTitle>Chat AI</CardTitle>
        <CardDescription>Using Vercel SDK to create a chat bot. </CardDescription>
      </CardHeader>

      <CardContent >
        <ScrollArea className="space-y-4 h-[600px] w-full pr-4">
          {messages.map(message => (
            <div key={message.id} className="flex gap-3 text-slate-600 text-sm">
              {message.role === "user" ? (
                <Avatar>
                  <AvatarFallback>DF</AvatarFallback>
                  <AvatarImage src="https://github.com/AndersonAlvesCoelho.png" />
                </Avatar>
              ) : (
                <Avatar>
                  <AvatarFallback>DF</AvatarFallback>
                  <AvatarImage src="https://github.com/rocketseat.png" />
                </Avatar>
              )}

              <p className="leading-relaxed">
                <span className="block font-bold text-slate-700">
                  {message.role === "user" ? "Usuário: " : "AI: "}
                </span>
                {message.content}
              </p>
            </div>
          ))}
        </ScrollArea>
      </CardContent>

      <CardFooter >
        <form className="w-full flex gap-2" onSubmit={handleSubmit}>
          <Input value={input} onChange={handleInputChange} placeholder="How can i help you?" />
          <Button type="submit">Send</Button>
        </form>
      </CardFooter>
    </Card>
  )
}