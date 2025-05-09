'use client'
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import React from 'react'
import Image from "next/image"
import { List } from "@radix-ui/react-tabs"

function Experience() {
  return (
    <Tabs defaultValue="experience" className="w-full mt-3">
      <TabsList className="grid w-full grid-cols-2 ">
        <TabsTrigger value="experience" className="relative z-10">Experience</TabsTrigger>
        <TabsTrigger value="education" className="relative z-10">Education</TabsTrigger>
      </TabsList>
      <TabsContent value="experience" className="transition-opacity duration-500 data-[state=inactive]:opacity-0 data-[state=active]:opacity-100">
        <Card>
            <CardContent className="mx-5 rounded-2xl py-2 hover:bg-slate-600">
              <div className="flex">
                <Image src="/MooManage.png" width={50} height={50} alt="..."></Image>
                <div className="mt-2 ml-2">
                  <CardTitle>MooManage (2025 - Present)</CardTitle>
                  <CardDescription>Backend Developer</CardDescription>
                </div>
              </div>
            </CardContent>
            <hr className="mx-3"/>
            <CardContent className="mx-5 rounded-2xl py-2 hover:bg-slate-600">
              <div className="flex">
                <Image src="/eonbotz.png" width={50} height={50} alt="..."></Image>
                <div className="mt-2 ml-2">
                  <CardTitle>EonBotz Technologies (2022)</CardTitle>
                  <CardDescription>Technical Education</CardDescription>
                </div>
              </div>
            </CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="education" className="transition-opacity duration-500 data-[state=inactive]:opacity-0 data-[state=active]:opacity-100">
        <Card>
          <CardContent className="space-y-2">
            <div className="flex items-center ">
              <div className="w-20 flex-none">
                <Image src="/umlogo.png" width={70} height={70} alt="..."></Image>
              </div>
              <div className=" flex-1">
                <CardDescription>(2022 - Present)</CardDescription>
                <CardTitle>University of Mindanao</CardTitle>
                <CardDescription>Bachelor Of Science in Computer Science</CardDescription>
                <CardDescription>
                  <List className="mx-2">
                    <li>Skills Clinic: Mentor / Finance Officer</li>
                    <li>2-time recipient of the Dean&apos;s Honor List</li>
                  </List>
                </CardDescription>
              </div>
            </div>
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  )
}

export default Experience